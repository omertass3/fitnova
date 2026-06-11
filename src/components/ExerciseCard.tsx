import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { BorderRadius, Spacing } from '@/constants/theme';
import type { Exercise } from '@/constants/exercises';
import { EXERCISE_DETAILS } from '@/constants/exerciseDetails';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
  completed: boolean;
  onComplete: () => void;
  onInfo: () => void;
}

const MUSCLE_ICONS: Record<string, React.ComponentProps<typeof Ionicons>['name']> = {
  chest: 'body-outline',
  back: 'fitness-outline',
  shoulders: 'arrow-up-circle-outline',
  biceps: 'barbell-outline',
  triceps: 'barbell-outline',
  quads: 'walk-outline',
  hamstrings: 'walk-outline',
  glutes: 'trending-up-outline',
  calves: 'footsteps-outline',
  abs: 'shield-outline',
  cardio: 'heart-outline',
};

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: '#10B981',
  medium: '#F59E0B',
  hard: '#EF4444',
};

export function ExerciseCard({ exercise, index, completed, onComplete, onInfo }: ExerciseCardProps) {
  const colors = useColors();
  const detail = EXERCISE_DETAILS[exercise.id];
  const diffColor = detail ? DIFFICULTY_COLORS[detail.difficulty] : undefined;

  const handleComplete = () => {
    if (!completed && Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    onComplete();
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: completed ? colors.backgroundSelected : colors.card,
          borderColor: completed ? colors.accent : colors.border,
        },
      ]}
    >
      <Pressable
        onPress={onInfo}
        style={({ pressed }) => [
          styles.mainRow,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <View style={[styles.indexBadge, { backgroundColor: completed ? colors.accent : colors.primary }]}>
          {completed ? (
            <Ionicons name="checkmark" size={18} color="#fff" />
          ) : (
            <Text style={styles.indexText}>{index + 1}</Text>
          )}
        </View>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.name, { color: colors.text }]}>{exercise.name}</Text>
            <Ionicons
              name={MUSCLE_ICONS[exercise.muscleGroup] ?? 'barbell-outline'}
              size={18}
              color={colors.textSecondary}
            />
          </View>
          <Text style={[styles.detail, { color: colors.textSecondary }]}>
            {exercise.sets} set x {exercise.reps}  |  {exercise.restSeconds}s
          </Text>
          <View style={styles.bottomRow}>
            <Text style={[styles.xp, { color: colors.xp }]}>+{exercise.xpReward * exercise.sets} XP</Text>
            {diffColor && (
              <View style={styles.diffDots}>
                {[1, 2, 3].map((d) => (
                  <View
                    key={d}
                    style={[
                      styles.diffDot,
                      {
                        backgroundColor:
                          d <= (detail?.difficulty === 'easy' ? 1 : detail?.difficulty === 'medium' ? 2 : 3)
                            ? diffColor
                            : colors.border,
                      },
                    ]}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </Pressable>

      <View style={styles.actions}>
        <Pressable
          onPress={onInfo}
          style={[styles.infoButton, { backgroundColor: colors.backgroundElement }]}
        >
          <Ionicons name="information-circle-outline" size={20} color={colors.primary} />
        </Pressable>
        <Pressable
          onPress={handleComplete}
          disabled={completed}
          style={[
            styles.completeButton,
            {
              backgroundColor: completed ? colors.accent : colors.primary,
              opacity: completed ? 0.7 : 1,
            },
          ]}
        >
          {completed ? (
            <Ionicons name="checkmark" size={18} color="#fff" />
          ) : (
            <Text style={styles.completeButtonText}>GO</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.three,
    gap: Spacing.three,
  },
  indexBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    gap: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  detail: {
    fontSize: 13,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  xp: {
    fontSize: 13,
    fontWeight: '600',
  },
  diffDots: {
    flexDirection: 'row',
    gap: 3,
  },
  diffDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(128,128,128,0.15)',
  },
  infoButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(128,128,128,0.15)',
  },
  completeButton: {
    flex: 2,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },
});