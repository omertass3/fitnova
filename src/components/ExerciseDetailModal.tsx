import { View, Text, StyleSheet, ScrollView, Pressable, Modal, Dimensions } from 'react-native';
import Animated, { FadeIn, FadeInDown, SlideInDown } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { BorderRadius, Spacing } from '@/constants/theme';
import type { Exercise } from '@/constants/exercises';
import { EXERCISE_DETAILS, type Difficulty } from '@/constants/exerciseDetails';
import { ExerciseIllustration } from '@/components/ExerciseIllustration';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ExerciseDetailModalProps {
  exercise: Exercise | null;
  visible: boolean;
  onClose: () => void;
  onStart: () => void;
  completed: boolean;
}

const DIFFICULTY_CONFIG: Record<Difficulty, { tr: string; en: string; fr: string; de: string; color: string; dots: number }> = {
  easy: { tr: 'Kolay', en: 'Easy', fr: 'Facile', de: 'Leicht', color: '#10B981', dots: 1 },
  medium: { tr: 'Orta', en: 'Medium', fr: 'Moyen', de: 'Mittel', color: '#F59E0B', dots: 2 },
  hard: { tr: 'Zor', en: 'Hard', fr: 'Difficile', de: 'Schwer', color: '#EF4444', dots: 3 },
};

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

export function ExerciseDetailModal({
  exercise,
  visible,
  onClose,
  onStart,
  completed,
}: ExerciseDetailModalProps) {
  const colors = useColors();
  const { language } = useTranslation();

  if (!exercise) return null;

  const detail = EXERCISE_DETAILS[exercise.id];
  const diffConfig = detail ? DIFFICULTY_CONFIG[detail.difficulty] : null;

  return (
    <Modal visible={visible} animationType="none" transparent statusBarTranslucent>
      <Animated.View entering={FadeIn.duration(200)} style={styles.overlay}>
        <Pressable style={styles.overlayPress} onPress={onClose} />

        <Animated.View
          entering={SlideInDown.duration(400).springify()}
          style={[styles.sheet, { backgroundColor: colors.background }]}
        >
          {/* Handle */}
          <View style={styles.handleRow}>
            <View style={[styles.handle, { backgroundColor: colors.border }]} />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            bounces={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerIcon}>
                <Ionicons name={MUSCLE_ICONS[exercise.muscleGroup] ?? 'barbell-outline'} size={24} color={colors.textSecondary} />
              </Text>
              <View style={styles.headerInfo}>
                <Text style={[styles.exerciseName, { color: colors.text }]}>{exercise.name}</Text>
                <Text style={[styles.exerciseDesc, { color: colors.textSecondary }]}>
                  {exercise.description}
                </Text>
              </View>
            </View>

            {/* Stats Row */}
            <View style={styles.statsRow}>
              <View style={[styles.statPill, { backgroundColor: colors.backgroundElement }]}>
                <Text style={[styles.statValue, { color: colors.text }]}>
                  {exercise.sets}x{exercise.reps}
                </Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                  {{ tr: 'Set/Tekrar', en: 'Sets/Reps', fr: 'Séries/Reps', de: 'Sätze/Wdh.' }[language]}
                </Text>
              </View>
              <View style={[styles.statPill, { backgroundColor: colors.backgroundElement }]}>
                <Text style={[styles.statValue, { color: colors.text }]}>{exercise.restSeconds}s</Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                  {{ tr: 'Dinlenme', en: 'Rest', fr: 'Repos', de: 'Pause' }[language]}
                </Text>
              </View>
              <View style={[styles.statPill, { backgroundColor: colors.backgroundElement }]}>
                <Text style={[styles.statValue, { color: colors.xp }]}>
                  +{exercise.xpReward * exercise.sets}
                </Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>XP</Text>
              </View>
            </View>

            {detail && (
              <>
                {/* Difficulty */}
                {diffConfig && (
                  <View style={[styles.difficultyRow, { backgroundColor: colors.backgroundElement }]}>
                    <Text style={[styles.diffLabel, { color: colors.text }]}>
                      {{ tr: 'Zorluk', en: 'Difficulty', fr: 'Difficulté', de: 'Schwierigkeit' }[language]}
                    </Text>
                    <View style={styles.diffDots}>
                      {[1, 2, 3].map((d) => (
                        <View
                          key={d}
                          style={[
                            styles.diffDot,
                            {
                              backgroundColor:
                                d <= diffConfig.dots ? diffConfig.color : colors.border,
                            },
                          ]}
                        />
                      ))}
                      <Text style={[styles.diffText, { color: diffConfig.color }]}>
                        {diffConfig[language]}
                      </Text>
                    </View>
                  </View>
                )}

                {/* Target Muscles */}
                <View style={styles.section}>
                  <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    {{ tr: 'Hedef Kaslar', en: 'Target Muscles', fr: 'Muscles ciblés', de: 'Zielmuskeln' }[language]}
                  </Text>
                  <View style={styles.muscleChips}>
                    {detail.targetMuscles.map((m, i) => (
                      <View key={i} style={[styles.chip, { backgroundColor: colors.primaryLight + '22', borderColor: colors.primaryLight }]}>
                        <Text style={[styles.chipText, { color: colors.primary }]}>{m[language]}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Illustration */}
                <ExerciseIllustration exerciseId={exercise.id} language={language} />

                {/* Steps - How To */}
                <View style={styles.section}>
                  <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    {{ tr: 'Nasıl Yapılır', en: 'How To Do It', fr: 'Comment faire', de: 'Ausführung' }[language]}
                  </Text>
                  {detail.steps.map((step, i) => (
                    <Animated.View
                      key={i}
                      entering={FadeInDown.duration(300).delay(i * 80)}
                      style={styles.stepRow}
                    >
                      <View style={[styles.stepNumber, { backgroundColor: colors.primary }]}>
                        <Text style={styles.stepNumberText}>{i + 1}</Text>
                      </View>
                      <Text style={[styles.stepText, { color: colors.text }]}>{step[language]}</Text>
                    </Animated.View>
                  ))}
                </View>

                {/* Tips */}
                <View style={styles.section}>
                  <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    {{ tr: 'İpuçları', en: 'Pro Tips', fr: 'Conseils', de: 'Tipps' }[language]}
                  </Text>
                  {detail.tips.map((tip, i) => (
                    <View key={i} style={[styles.tipRow, { backgroundColor: colors.accent + '15' }]}>
                      <Text style={styles.tipIcon}>{'\u2705'}</Text>
                      <Text style={[styles.tipText, { color: colors.text }]}>{tip[language]}</Text>
                    </View>
                  ))}
                </View>

                {/* Common Mistakes */}
                <View style={styles.section}>
                  <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    {{ tr: 'Sık Yapılan Hatalar', en: 'Common Mistakes', fr: 'Erreurs courantes', de: 'Häufige Fehler' }[language]}
                  </Text>
                  {detail.mistakes.map((m, i) => (
                    <View key={i} style={[styles.tipRow, { backgroundColor: colors.danger + '15' }]}>
                      <Text style={styles.tipIcon}>{'\u274C'}</Text>
                      <Text style={[styles.tipText, { color: colors.text }]}>{m[language]}</Text>
                    </View>
                  ))}
                </View>
              </>
            )}

            {/* Action Button */}
            <Pressable
              onPress={() => {
                onStart();
                onClose();
              }}
              disabled={completed}
              style={({ pressed }) => [
                styles.actionButton,
                {
                  backgroundColor: completed ? colors.accent : colors.primary,
                  opacity: pressed ? 0.9 : 1,
                },
              ]}
            >
              <Text style={styles.actionButtonText}>
                {completed
                  ? { tr: '\u2713 Tamamlandi!', en: '\u2713 Completed!', fr: '\u2713 Terminé !', de: '\u2713 Abgeschlossen!' }[language]
                  : { tr: 'Hareketi Tamamla', en: 'Complete Exercise', fr: 'Terminer l\'exercice', de: 'Übung abschließen' }[language]}
              </Text>
              {!completed && (
                <Text style={styles.actionButtonXP}>
                  +{exercise.xpReward * exercise.sets} XP
                </Text>
              )}
            </Pressable>

            <View style={{ height: 40 }} />
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  overlayPress: {
    flex: 1,
  },
  sheet: {
    maxHeight: SCREEN_HEIGHT * 0.88,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handleRow: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  content: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
    paddingBottom: Spacing.five,
  },
  header: {
    flexDirection: 'row',
    gap: Spacing.four,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 48,
  },
  headerInfo: {
    flex: 1,
    gap: Spacing.one,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: '800',
  },
  exerciseDesc: {
    fontSize: 14,
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  statPill: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.three,
    borderRadius: BorderRadius.lg,
    gap: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
  difficultyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.three,
    borderRadius: BorderRadius.lg,
  },
  diffLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  diffDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  diffDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  diffText: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 4,
  },
  section: {
    gap: Spacing.two,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  muscleChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  stepNumberText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: BorderRadius.md,
  },
  tipIcon: {
    fontSize: 16,
    marginTop: 1,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  actionButton: {
    paddingVertical: Spacing.three + 4,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    gap: 2,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  actionButtonXP: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    fontWeight: '600',
  },
});