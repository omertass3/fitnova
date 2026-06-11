import { EXERCISES, DAILY_CHALLENGES, type Exercise } from '@/constants/exercises';

export type Gender = 'male' | 'female';
export type BodyType = 'skinny' | 'athletic' | 'muscular' | 'overweight';
export type Goal = 'lose_weight' | 'build_muscle' | 'stay_fit';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
export type Strategy = 'cut' | 'bulk' | 'recomposition';
export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';
export type ProgramType = 'full_body' | 'upper_lower' | 'push_pull_legs';

export interface UserProfile {
  gender: Gender;
  age: number;
  height: number;
  weight: number;
  bodyFatPercentage: number;
  bodyType: BodyType;
  goal: Goal;
  activityLevel: ActivityLevel;
  targetWeight: number;
}

export interface CalorieResult {
  bmr: number;
  tdee: number;
  target: number;
  protein: number;
  carbs: number;
  fat: number;
  strategy: Strategy;
}

export interface WorkoutDay {
  dayName: string;
  label: string;
  exercises: Exercise[];
  totalXP: number;
}

export interface WeeklyProgram {
  week: number;
  type: ProgramType;
  level: FitnessLevel;
  daysPerWeek: number;
  days: WorkoutDay[];
}

export interface DailyChallenge {
  id: string;
  exerciseId: string;
  targetReps: number;
  xpBonus: number;
  label: string;
  completed: boolean;
}

// ============================================================
// XP & LEVEL
// ============================================================

export const XP_PER_LEVEL = 500;
export const STREAK_BONUS_XP = 25;
export const WORKOUT_COMPLETE_BONUS = 100;

export function getLevel(totalXP: number): number {
  return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

export function getXPProgress(totalXP: number): number {
  return totalXP % XP_PER_LEVEL;
}

export function getXPForNextLevel(): number {
  return XP_PER_LEVEL;
}

export function getLevelTitle(level: number): string {
  if (level <= 5) return 'Beginner';
  if (level <= 10) return 'Regular';
  if (level <= 20) return 'Athlete';
  if (level <= 35) return 'Warrior';
  if (level <= 50) return 'Champion';
  return 'Legend';
}

// ============================================================
// CALORIE & MACRO CALCULATIONS
// ============================================================

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9,
};

export function calculateBMR(profile: UserProfile): number {
  const { gender, weight, height, age } = profile;
  return gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
}

export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return Math.round(bmr * ACTIVITY_MULTIPLIERS[activityLevel]);
}

export function determineStrategy(profile: UserProfile): Strategy {
  const { weight, targetWeight, goal } = profile;
  const diff = targetWeight - weight;
  // Target weight difference determines strategy
  if (goal === 'lose_weight' || diff < -2) return 'cut';
  if (goal === 'build_muscle' || diff > 2) return 'bulk';
  return 'recomposition';
}

export function calculateCalories(profile: UserProfile): CalorieResult {
  const bmr = calculateBMR(profile);
  const tdee = calculateTDEE(bmr, profile.activityLevel);
  const strategy = determineStrategy(profile);

  // Calculate surplus/deficit based on how far from target weight
  const weightDiff = Math.abs(profile.targetWeight - profile.weight);
  let multiplier: number;

  if (strategy === 'cut') {
    // Moderate deficit: 15-25% based on how much to lose
    // More to lose → bigger deficit (max 25%)
    const deficitPct = Math.min(0.15 + (weightDiff / 100) * 0.5, 0.25);
    multiplier = 1 - deficitPct;
  } else if (strategy === 'bulk') {
    // Surplus: 15-30% based on how much to gain
    // More to gain → bigger surplus (max 30%)
    const surplusPct = Math.min(0.15 + (weightDiff / 100) * 0.5, 0.30);
    multiplier = 1 + surplusPct;
  } else {
    multiplier = 1;
  }

  const target = Math.round(tdee * multiplier);

  // Protein: 1.8-2.2g per kg of target weight (not current weight)
  // Higher for cut (preserve muscle), moderate for bulk
  const proteinPerKg = strategy === 'cut' ? 2.2 : strategy === 'bulk' ? 2.0 : 1.8;
  const proteinTarget = strategy === 'bulk' ? profile.targetWeight : profile.weight;
  const protein = Math.round(proteinTarget * proteinPerKg);

  // Fat: 25-30% of calories
  const fatPct = strategy === 'cut' ? 0.25 : 0.28;
  const fat = Math.round(target * fatPct / 9);

  // Carbs: remaining calories
  const carbs = Math.max(Math.round((target - protein * 4 - fat * 9) / 4), 50);

  return { bmr: Math.round(bmr), tdee, target, protein, carbs, fat, strategy };
}

// ============================================================
// WEEK-BASED PROGRAM GENERATION
//
// Programs are tailored to the user's GOAL:
//   lose_weight -> more cardio, circuits, higher reps, shorter rest
//   build_muscle -> more strength, lower reps, more sets
//   stay_fit -> balanced mix
//
// Progressive overload by week:
//   Week 1-4:  Beginner (Full Body, 3 days)
//   Week 5-8:  Intermediate (Upper/Lower, 4 days)
//   Week 9-12: Advanced (Push/Pull/Legs, 5-6 days)
// ============================================================

export function getProgramPhase(week: number): { type: ProgramType; level: FitnessLevel; cycleWeek: number; cycle: number } {
  const cycle = Math.floor((week - 1) / 12) + 1;
  const cycleWeek = ((week - 1) % 12) + 1;
  if (cycleWeek <= 4) return { type: 'full_body', level: 'beginner', cycleWeek, cycle };
  if (cycleWeek <= 8) return { type: 'upper_lower', level: 'intermediate', cycleWeek, cycle };
  return { type: 'push_pull_legs', level: 'advanced', cycleWeek, cycle };
}

// Simple seeded PRNG (mulberry32)
function mulberry32(seed: number) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Pick exercises by MUSCLE GROUP to ensure proper targeting
function pickByMuscle(muscleGroup: string, count: number, rng: () => number, exclude: Set<string> = new Set()): Exercise[] {
  const pool = EXERCISES.filter((e) => e.muscleGroup === muscleGroup && !exclude.has(e.id));
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Pick exercises by CATEGORY with muscle group diversity
function pickByCategory(category: string, count: number, rng: () => number, exclude: Set<string> = new Set()): Exercise[] {
  const pool = EXERCISES.filter((e) => e.category === category && !exclude.has(e.id));
  // Group by muscle group, pick from different groups
  const groups = new Map<string, Exercise[]>();
  for (const e of pool) {
    const arr = groups.get(e.muscleGroup) || [];
    arr.push(e);
    groups.set(e.muscleGroup, arr);
  }
  // Shuffle each group
  for (const arr of groups.values()) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // Round-robin from each muscle group for diversity
  const result: Exercise[] = [];
  const groupKeys = [...groups.keys()];
  // Shuffle group order
  for (let i = groupKeys.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [groupKeys[i], groupKeys[j]] = [groupKeys[j], groupKeys[i]];
  }
  let gi = 0;
  const indices = new Map<string, number>(groupKeys.map(k => [k, 0]));
  while (result.length < count) {
    const key = groupKeys[gi % groupKeys.length];
    const arr = groups.get(key)!;
    const idx = indices.get(key)!;
    if (idx < arr.length) {
      result.push(arr[idx]);
      indices.set(key, idx + 1);
    }
    gi++;
    if (gi > count * groupKeys.length) break; // safety
  }
  return result;
}

// Progressive overload: increase sets/reps by week
function applyProgression(exercises: Exercise[], week: number): Exercise[] {
  const extraSets = Math.floor((week - 1) / 3);
  return exercises.map((e) => ({
    ...e,
    sets: Math.min(e.sets + extraSets, 5),
    xpReward: e.xpReward + Math.floor(week / 2) * 2,
  }));
}

// Slot-based day builder: each slot targets a specific muscle group or category
type Slot = { muscle: string } | { cat: string };

function buildDay(dayName: string, label: string, slots: Slot[], week: number, goal: Goal): WorkoutDay {
  const rng = mulberry32(week * 100 + dayName.charCodeAt(0) + dayName.charCodeAt(dayName.length - 1));
  const used = new Set<string>();
  let exercises: Exercise[] = [];

  for (const slot of slots) {
    let picked: Exercise[];
    if ('muscle' in slot) {
      picked = pickByMuscle(slot.muscle, 1, rng, used);
    } else {
      picked = pickByCategory(slot.cat, 1, rng, used);
    }
    for (const e of picked) used.add(e.id);
    exercises.push(...picked);
  }

  // Goal-based adjustments
  if (goal === 'lose_weight') {
    exercises = exercises.map((e) => ({ ...e, restSeconds: Math.max(e.restSeconds - 15, 20) }));
    if (!exercises.some((e) => e.category === 'cardio')) {
      const extra = pickByCategory('cardio', 1, rng, used);
      exercises.push(...extra);
    }
  } else if (goal === 'build_muscle') {
    exercises = exercises.map((e) => ({
      ...e,
      sets: Math.min(e.sets + 1, 5),
      restSeconds: e.restSeconds + 15,
    }));
  }

  exercises = applyProgression(exercises, week);

  return {
    dayName,
    label,
    exercises,
    totalXP: exercises.reduce((sum, e) => sum + e.xpReward * e.sets, 0),
  };
}

// ============================================================
// PROFESSIONAL PROGRAM TEMPLATES
//
// Full Body (3 days): Compound lifts + accessory for all groups
// Upper/Lower (4 days): Focused muscle group splits
// Push/Pull/Legs (6 days): Bodybuilding-style split
//
// Each slot targets a SPECIFIC muscle group to guarantee
// balanced training across chest, back, shoulders, arms, legs
// ============================================================

function generateFullBodyWeek(week: number, goal: Goal): WorkoutDay[] {
  return [
    buildDay('Monday', 'Full Body A', [
      { muscle: 'chest' },      // bench movement (push-up variation)
      { muscle: 'back' },       // row/pull-up
      { muscle: 'quads' },      // squat variation
      { muscle: 'shoulders' },  // shoulder press/pike
      { muscle: 'abs' },        // core
      { cat: 'cardio' },        // finisher
    ], week, goal),
    buildDay('Wednesday', 'Full Body B', [
      { muscle: 'back' },       // pull variation
      { muscle: 'chest' },      // push variation
      { muscle: 'hamstrings' }, // hinge movement
      { muscle: 'glutes' },     // glute work
      { muscle: 'triceps' },    // arm isolation
      { muscle: 'abs' },        // core
    ], week, goal),
    buildDay('Friday', 'Full Body C', [
      { muscle: 'quads' },      // leg compound
      { muscle: 'back' },       // pull
      { muscle: 'shoulders' },  // shoulder work
      { muscle: 'biceps' },     // arm isolation
      { muscle: 'glutes' },     // glute accessory
      { muscle: 'abs' },        // core
    ], week, goal),
  ];
}

function generateUpperLowerWeek(week: number, goal: Goal): WorkoutDay[] {
  return [
    // Upper A: Chest & Back focus + arm accessories
    buildDay('Monday', 'Upper Body A', [
      { muscle: 'chest' },      // horizontal push
      { muscle: 'chest' },      // push variation
      { muscle: 'back' },       // vertical pull
      { muscle: 'back' },       // horizontal pull
      { muscle: 'shoulders' },  // lateral/overhead
      { muscle: 'triceps' },    // isolation
      { muscle: 'biceps' },     // isolation
    ], week, goal),
    // Lower A: Quad focus
    buildDay('Tuesday', 'Lower Body A', [
      { muscle: 'quads' },      // squat variation
      { muscle: 'quads' },      // lunge variation
      { muscle: 'hamstrings' }, // hinge
      { muscle: 'glutes' },     // bridge/thrust
      { muscle: 'calves' },     // calf work
      { muscle: 'abs' },        // core
      { cat: 'cardio' },        // finisher
    ], week, goal),
    // Upper B: Shoulder & Arms focus
    buildDay('Thursday', 'Upper Body B', [
      { muscle: 'shoulders' },  // overhead push
      { muscle: 'back' },       // pull
      { muscle: 'chest' },      // push
      { muscle: 'back' },       // row
      { muscle: 'biceps' },     // isolation
      { muscle: 'triceps' },    // isolation
      { muscle: 'abs' },        // core
    ], week, goal),
    // Lower B: Posterior chain focus
    buildDay('Friday', 'Lower Body B', [
      { muscle: 'hamstrings' }, // primary hinge
      { muscle: 'glutes' },     // glute focus
      { muscle: 'quads' },      // squat
      { muscle: 'quads' },      // unilateral
      { muscle: 'calves' },     // calf work
      { muscle: 'abs' },        // core
      { cat: 'cardio' },        // finisher
    ], week, goal),
  ];
}

function generatePPLWeek(week: number, goal: Goal): WorkoutDay[] {
  return [
    // Push A: Chest emphasis
    buildDay('Monday', 'Push (Chest)', [
      { muscle: 'chest' },      // compound push
      { muscle: 'chest' },      // push variation
      { muscle: 'shoulders' },  // overhead
      { muscle: 'shoulders' },  // lateral
      { muscle: 'triceps' },    // isolation
      { muscle: 'triceps' },    // isolation variation
    ], week, goal),
    // Pull A: Back emphasis
    buildDay('Tuesday', 'Pull (Back)', [
      { muscle: 'back' },       // vertical pull
      { muscle: 'back' },       // horizontal pull
      { muscle: 'back' },       // row variation
      { muscle: 'biceps' },     // curl
      { muscle: 'biceps' },     // curl variation
      { muscle: 'abs' },        // core
    ], week, goal),
    // Legs A: Quad emphasis
    buildDay('Wednesday', 'Legs (Quad)', [
      { muscle: 'quads' },      // squat
      { muscle: 'quads' },      // lunge
      { muscle: 'hamstrings' }, // hinge
      { muscle: 'glutes' },     // bridge
      { muscle: 'calves' },     // calf
      { cat: 'cardio' },        // finisher
    ], week, goal),
    // Push B: Shoulder emphasis
    buildDay('Thursday', 'Push (Shoulder)', [
      { muscle: 'shoulders' },  // overhead
      { muscle: 'shoulders' },  // variation
      { muscle: 'chest' },      // compound
      { muscle: 'chest' },      // variation
      { muscle: 'triceps' },    // isolation
      { muscle: 'abs' },        // core
    ], week, goal),
    // Pull B: Bicep emphasis
    buildDay('Friday', 'Pull (Arms)', [
      { muscle: 'back' },       // pull
      { muscle: 'back' },       // row
      { muscle: 'shoulders' },  // rear delt
      { muscle: 'biceps' },     // curl
      { muscle: 'biceps' },     // variation
      { muscle: 'abs' },        // core
    ], week, goal),
    // Legs B: Posterior chain emphasis
    buildDay('Saturday', 'Legs (Glute/Ham)', [
      { muscle: 'hamstrings' }, // primary
      { muscle: 'glutes' },     // thrust
      { muscle: 'glutes' },     // isolation
      { muscle: 'quads' },      // squat
      { muscle: 'calves' },     // calf
      { cat: 'cardio' },        // finisher
    ], week, goal),
  ];
}

export function generateWeekProgram(week: number, goal: Goal): WeeklyProgram {
  const { type, level, cycleWeek } = getProgramPhase(week);
  let days: WorkoutDay[];

  switch (type) {
    case 'full_body':
      days = generateFullBodyWeek(week, goal);
      break;
    case 'upper_lower':
      days = generateUpperLowerWeek(week, goal);
      break;
    case 'push_pull_legs':
      days = generatePPLWeek(week, goal);
      break;
  }

  return {
    week,
    type,
    level,
    daysPerWeek: days.length,
    days,
  };
}

// Legacy compat: generateProgram still works for initial onboarding
export function generateProgram(profile: UserProfile, _userLevel?: number): WeeklyProgram {
  return generateWeekProgram(1, profile.goal);
}

// ============================================================
// DAILY CHALLENGES
// ============================================================

export function getTodaysChallenges(): DailyChallenge[] {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const shuffled = [...DAILY_CHALLENGES].sort((a, b) => {
    const ha = ((seed * 31 + a.id.length) % 1000) / 1000;
    const hb = ((seed * 31 + b.id.length) % 1000) / 1000;
    return ha - hb;
  });
  return shuffled.slice(0, 2).map((c) => ({ ...c, completed: false }));
}

// ============================================================
// PROGRESS
// ============================================================

export function calculateGoalProgress(
  startWeight: number, currentWeight: number, targetWeight: number
): number {
  if (startWeight === targetWeight) return 100;
  const totalChange = Math.abs(targetWeight - startWeight);
  const currentChange = Math.abs(currentWeight - startWeight);
  return Math.min(Math.round((currentChange / totalChange) * 100), 100);
}