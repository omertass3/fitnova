import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type {
  UserProfile,
  CalorieResult,
  WeeklyProgram,
  DailyChallenge,
} from '@/engine/fitnessEngine';
import type { Language } from '@/constants/translations';
import {
  calculateCalories,
  generateWeekProgram,
  generateProgram,
  getTodaysChallenges,
  getLevel,
  getXPProgress,
  getLevelTitle,
  XP_PER_LEVEL,
  STREAK_BONUS_XP,
  WORKOUT_COMPLETE_BONUS,
} from '@/engine/fitnessEngine';

interface WeightEntry {
  date: string;
  weight: number;
}

interface CompletedExercise {
  exerciseId: string;
  date: string;
  setsCompleted: number;
}

interface AppState {
  // Onboarding
  onboardingComplete: boolean;
  onboardingStep: number;

  // User Profile
  profile: UserProfile | null;

  // Calculated values
  calories: CalorieResult | null;
  program: WeeklyProgram | null;

  // Gamification
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lastWorkoutDate: string | null;

  // Week-based progression
  currentWeek: number;
  /** How many workouts completed this week */
  weekWorkoutsCompleted: number;

  // Daily
  dailyChallenges: DailyChallenge[];
  dailyChallengesDate: string | null;

  // Progress
  weightHistory: WeightEntry[];
  completedExercises: CompletedExercise[];
  totalWorkouts: number;

  // Language
  language: Language;
  setLanguage: (lang: Language) => void;

  // Actions
  setOnboardingStep: (step: number) => void;
  completeOnboarding: (profile: UserProfile) => void;
  addXP: (amount: number) => void;
  completeExercise: (exerciseId: string, sets: number) => void;
  completeWorkout: () => void;
  advanceWeek: () => void;
  completeDailyChallenge: (challengeId: string) => void;
  refreshDailyChallenges: () => void;
  addWeightEntry: (weight: number) => void;
  resetStore: () => void;

  // DEV MODE
  devSetWeek: (week: number) => void;

  // Computed getters
  getLevel: () => number;
  getXPProgress: () => number;
  getLevelTitle: () => string;
  getXPForNextLevel: () => number;
}

const getDateString = () => new Date().toISOString().split('T')[0];

const initialState = {
  onboardingComplete: false,
  onboardingStep: 0,
  profile: null,
  calories: null,
  program: null,
  totalXP: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastWorkoutDate: null,
  currentWeek: 1,
  weekWorkoutsCompleted: 0,
  dailyChallenges: [],
  dailyChallengesDate: null,
  weightHistory: [],
  completedExercises: [],
  totalWorkouts: 0,
  language: 'tr' as Language,
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setLanguage: (lang) => set({ language: lang }),

      setOnboardingStep: (step) => set({ onboardingStep: step }),

      completeOnboarding: (profile) => {
        const calories = calculateCalories(profile);
        const program = generateWeekProgram(1, profile.goal);
        const challenges = getTodaysChallenges();
        set({
          onboardingComplete: true,
          profile,
          calories,
          program,
          currentWeek: 1,
          weekWorkoutsCompleted: 0,
          dailyChallenges: challenges,
          dailyChallengesDate: getDateString(),
          weightHistory: [{ date: getDateString(), weight: profile.weight }],
        });
      },

      addXP: (amount) =>
        set((state) => ({ totalXP: state.totalXP + amount })),

      completeExercise: (exerciseId, sets) => {
        set((state) => ({
          completedExercises: [
            ...state.completedExercises,
            { exerciseId, date: getDateString(), setsCompleted: sets },
          ],
        }));
      },

      completeWorkout: () => {
        const state = get();
        const today = getDateString();

        // Don't count same day twice
        if (state.lastWorkoutDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        let newStreak = 1;
        if (state.lastWorkoutDate === yesterdayStr) {
          newStreak = state.currentStreak + 1;
        }

        const streakBonus = newStreak > 1 ? STREAK_BONUS_XP * Math.min(newStreak, 7) : 0;

        set({
          totalXP: state.totalXP + WORKOUT_COMPLETE_BONUS + streakBonus,
          currentStreak: newStreak,
          longestStreak: Math.max(state.longestStreak, newStreak),
          lastWorkoutDate: today,
          totalWorkouts: state.totalWorkouts + 1,
          weekWorkoutsCompleted: state.weekWorkoutsCompleted + 1,
        });
      },

      // Advance to next week - generates new program
      advanceWeek: () => {
        const state = get();
        if (!state.profile) return;
        const nextWeek = state.currentWeek + 1;
        const newProgram = generateWeekProgram(nextWeek, state.profile.goal);
        set({
          currentWeek: nextWeek,
          weekWorkoutsCompleted: 0,
          program: newProgram,
        });
      },

      completeDailyChallenge: (challengeId) => {
        set((state) => {
          const challenge = state.dailyChallenges.find((c) => c.id === challengeId);
          if (!challenge || challenge.completed) return state;
          return {
            dailyChallenges: state.dailyChallenges.map((c) =>
              c.id === challengeId ? { ...c, completed: true } : c
            ),
            totalXP: state.totalXP + challenge.xpBonus,
          };
        });
      },

      refreshDailyChallenges: () => {
        const today = getDateString();
        const state = get();
        if (state.dailyChallengesDate !== today) {
          set({
            dailyChallenges: getTodaysChallenges(),
            dailyChallengesDate: today,
          });
        }
      },

      addWeightEntry: (weight) =>
        set((state) => ({
          weightHistory: [...state.weightHistory, { date: getDateString(), weight }],
        })),

      resetStore: () => set(initialState),

      // DEV MODE
      devSetWeek: (week) => {
        const state = get();
        if (!state.profile) return;
        const newProgram = generateWeekProgram(week, state.profile.goal);
        const freshChallenges = getTodaysChallenges();
        set({
          currentWeek: week,
          weekWorkoutsCompleted: 0,
          program: newProgram,
          dailyChallenges: freshChallenges,
          dailyChallengesDate: getDateString(),
          totalXP: (week - 1) * WORKOUT_COMPLETE_BONUS * 3,
          totalWorkouts: (week - 1) * 3,
        });
      },

      getLevel: () => getLevel(get().totalXP),
      getXPProgress: () => getXPProgress(get().totalXP),
      getLevelTitle: () => getLevelTitle(getLevel(get().totalXP)),
      getXPForNextLevel: () => XP_PER_LEVEL,
    }),
    {
      name: 'fitnova-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);