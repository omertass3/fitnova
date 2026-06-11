import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useMemo, useCallback, useEffect } from 'react';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { ExerciseCard } from '@/components/ExerciseCard';
import { ExerciseDetailModal } from '@/components/ExerciseDetailModal';
import { XPBar } from '@/components/XPBar';
import { BorderRadius, Spacing } from '@/constants/theme';
import type { Exercise } from '@/constants/exercises';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function WorkoutScreen() {
  const colors = useColors();
  const { t, dayName } = useTranslation();
  const program = useStore((s) => s.program);
  const addXP = useStore((s) => s.addXP);
  const completeExercise = useStore((s) => s.completeExercise);
  const completeWorkout = useStore((s) => s.completeWorkout);
  const level = useStore((s) => s.getLevel());
  const xpProgress = useStore((s) => s.getXPProgress());
  const xpNext = useStore((s) => s.getXPForNextLevel());

  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [workoutDone, setWorkoutDone] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Reset local state when program changes (e.g. week advance)
  useEffect(() => {
    setCompletedIds(new Set());
    setWorkoutDone(false);
  }, [program]);

  const todayEnglish = DAYS[new Date().getDay()];

  const todayWorkout = useMemo(() => {
    if (!program) return null;
    return program.days.find((d) => d.dayName === todayEnglish) ?? program.days[0];
  }, [program, todayEnglish]);

  const labelMap: Record<string, string> = {
    'Full Body': t('fullBody'),
    'Upper Body': t('upperBody'),
    'Lower Body': t('lowerBody'),
    Push: t('push'),
    Pull: t('pull'),
    Legs: t('legs'),
  };

  const handleCompleteExercise = useCallback((exerciseId: string, xpReward: number, sets: number) => {
    if (completedIds.has(exerciseId) || workoutDone) return;

    const newCompleted = new Set(completedIds);
    newCompleted.add(exerciseId);
    setCompletedIds(newCompleted);

    addXP(xpReward * sets);
    completeExercise(exerciseId, sets);

    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }

    if (todayWorkout && newCompleted.size === todayWorkout.exercises.length) {
      setTimeout(() => {
        setWorkoutDone(true);
        completeWorkout();
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
      }, 500);
    }
  }, [completedIds, workoutDone, todayWorkout]);

  if (!program || !todayWorkout) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <SafeAreaView style={styles.restDay}>
          <Ionicons name="moon-outline" size={64} color={colors.textSecondary} />
          <Text style={[styles.restTitle, { color: colors.text }]}>{t('restDay')}</Text>
          <Text style={[styles.restSubtitle, { color: colors.textSecondary }]}>
            {t('restDayMessage')}
          </Text>
        </SafeAreaView>
      </View>
    );
  }

  const progress = todayWorkout.exercises.length > 0
    ? completedIds.size / todayWorkout.exercises.length
    : 0;

  const translatedLabel = labelMap[todayWorkout.label] ?? todayWorkout.label;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView edges={['top']} style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Header */}
          <Animated.View entering={FadeInDown.duration(500)}>
            <Text style={[styles.dayLabel, { color: colors.primary }]}>
              {dayName(todayEnglish).toUpperCase()}
            </Text>
            <Text style={[styles.title, { color: colors.text }]}>{translatedLabel}</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              {todayWorkout.exercises.length} {t('exercises')} - {todayWorkout.totalXP} {t('xpPossible')}
            </Text>
          </Animated.View>

          {/* Progress */}
          <Animated.View
            entering={FadeInDown.duration(500).delay(100)}
            style={[styles.progressCard, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <View style={styles.progressHeader}>
              <Text style={[styles.progressLabel, { color: colors.text }]}>{t('workoutProgress')}</Text>
              <Text style={[styles.progressPercent, { color: colors.accent }]}>
                {Math.round(progress * 100)}%
              </Text>
            </View>
            <XPBar current={progress * 100} max={100} height={10} />
            <View style={styles.levelRow}>
              <Text style={[styles.levelText, { color: colors.level }]}>Lv. {level}</Text>
              <Text style={[styles.xpText, { color: colors.textSecondary }]}>
                {xpProgress}/{xpNext} XP
              </Text>
            </View>
          </Animated.View>

          {/* Workout Complete Banner */}
          {workoutDone && (
            <Animated.View
              entering={FadeIn.duration(600)}
              style={[styles.completeBanner, { backgroundColor: colors.accent }]}
            >
              <Ionicons name="checkmark-circle" size={36} color="#fff" />
              <View>
                <Text style={styles.completeTitle}>{t('workoutComplete')}</Text>
                <Text style={styles.completeSubtitle}>{t('bonusEarned')}</Text>
              </View>
            </Animated.View>
          )}

          {/* Hint */}
          <Animated.View
            entering={FadeInDown.duration(400).delay(150)}
            style={[styles.hint, { backgroundColor: colors.backgroundElement }]}
          >
            <Ionicons name="bulb-outline" size={16} color={colors.textSecondary} />
            <Text style={[styles.hintText, { color: colors.textSecondary }]}>
              {{ tr: 'Hareketi öğrenmek için karta tıkla, tamamlamak için GO butonuna bas', en: 'Tap a card to learn the exercise, press GO to complete it', fr: 'Appuyez sur une carte pour apprendre l\'exercice, appuyez sur GO pour le terminer', de: 'Tippe auf eine Karte, um die Übung zu lernen. Drücke GO zum Abschließen' }[useStore.getState().language]}
            </Text>
          </Animated.View>

          {/* Exercise List */}
          <View style={styles.exercises}>
            {todayWorkout.exercises.map((exercise, i) => (
              <Animated.View key={exercise.id + i} entering={FadeInDown.duration(400).delay(200 + i * 80)}>
                <ExerciseCard
                  exercise={exercise}
                  index={i}
                  completed={completedIds.has(exercise.id)}
                  onComplete={() =>
                    handleCompleteExercise(exercise.id, exercise.xpReward, exercise.sets)
                  }
                  onInfo={() => {
                    setSelectedExercise(exercise);
                    setModalVisible(true);
                  }}
                />
              </Animated.View>
            ))}
          </View>

          <View style={{ height: 120 }} />
        </ScrollView>
      </SafeAreaView>

      {/* Exercise Detail Modal */}
      <ExerciseDetailModal
        exercise={selectedExercise}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        completed={selectedExercise ? completedIds.has(selectedExercise.id) : false}
        onStart={() => {
          if (selectedExercise) {
            handleCompleteExercise(
              selectedExercise.id,
              selectedExercise.xpReward,
              selectedExercise.sets
            );
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  scroll: { paddingHorizontal: Spacing.four, paddingTop: Spacing.four, gap: Spacing.four },
  dayLabel: { fontSize: 14, fontWeight: '800', letterSpacing: 2 },
  title: { fontSize: 28, fontWeight: '800', marginTop: Spacing.one },
  subtitle: { fontSize: 14, marginTop: Spacing.one },
  progressCard: {
    padding: Spacing.four,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    gap: Spacing.two,
  },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressLabel: { fontSize: 15, fontWeight: '600' },
  progressPercent: { fontSize: 18, fontWeight: '800' },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  levelText: { fontSize: 14, fontWeight: '700' },
  xpText: { fontSize: 13 },
  completeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.four,
    borderRadius: BorderRadius.lg,
    gap: Spacing.three,
  },
  completeIcon: { fontSize: 36 },
  completeTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
  completeSubtitle: { color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: '500' },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingVertical: Spacing.two + 2,
    paddingHorizontal: Spacing.three,
    borderRadius: BorderRadius.md,
  },
  hintIcon: { fontSize: 16 },
  hintText: { flex: 1, fontSize: 13, lineHeight: 18 },
  exercises: { gap: Spacing.three },
  restDay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.four,
    paddingHorizontal: Spacing.five,
  },
  restIcon: { fontSize: 64 },
  restTitle: { fontSize: 28, fontWeight: '800' },
  restSubtitle: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
});