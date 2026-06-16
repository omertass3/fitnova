import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { XPBar } from '@/components/XPBar';
import { StatCard } from '@/components/StatCard';
import { BorderRadius, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  const colors = useColors();
  const { t, dayShort } = useTranslation();
  const profile = useStore((s) => s.profile);
  const totalXP = useStore((s) => s.totalXP);
  const level = useStore((s) => s.getLevel());
  const xpProgress = useStore((s) => s.getXPProgress());
  const xpNext = useStore((s) => s.getXPForNextLevel());
  const levelTitle = useStore((s) => s.getLevelTitle());
  const streak = useStore((s) => s.currentStreak);
  const totalWorkouts = useStore((s) => s.totalWorkouts);
  const calories = useStore((s) => s.calories);
  const program = useStore((s) => s.program);
  const dailyChallenges = useStore((s) => s.dailyChallenges);
  const completeDailyChallenge = useStore((s) => s.completeDailyChallenge);

  if (!profile || !calories) return null;

  // Translate level title
  const levelTitleMap: Record<string, string> = {
    Beginner: t('levelBeginner'),
    Regular: t('levelRegular'),
    Athlete: t('levelAthlete'),
    Warrior: t('levelWarrior'),
    Champion: t('levelChampion'),
    Legend: t('levelLegend'),
  };
  const translatedLevelTitle = levelTitleMap[levelTitle] ?? levelTitle;

  // Translate program label
  const programLabelMap: Record<string, string> = {
    'Full Body': t('fullBody'),
    'Upper Body': t('upperBody'),
    'Lower Body': t('lowerBody'),
    Push: t('push'),
    Pull: t('pull'),
    Legs: t('legs'),
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView edges={['top']} style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Header */}
          <Animated.View entering={FadeInDown.duration(500)}>
            <Text style={[styles.greeting, { color: colors.textSecondary }]}>{t('welcomeBack')}</Text>
            <Text style={[styles.name, { color: colors.text }]}>{t('athlete')}</Text>
          </Animated.View>

          {/* Level Card */}
          <Animated.View
            entering={FadeInDown.duration(500).delay(100)}
            style={[styles.levelCard, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <View style={styles.levelHeader}>
              <View style={[styles.levelBadge, { backgroundColor: colors.level }]}>
                <Text style={styles.levelNumber}>{level}</Text>
              </View>
              <View style={styles.levelInfo}>
                <Text style={[styles.levelTitle, { color: colors.text }]}>{translatedLevelTitle}</Text>
                <Text style={[styles.xpText, { color: colors.textSecondary }]}>
                  {xpProgress} / {xpNext} XP
                </Text>
              </View>
              <Text style={[styles.totalXP, { color: colors.xp }]}>{totalXP} XP</Text>
            </View>
            <XPBar current={xpProgress} max={xpNext} showGlow />
          </Animated.View>

          {/* Stats Row */}
          <Animated.View entering={FadeInDown.duration(500).delay(200)} style={styles.statsRow}>
            <StatCard icon="flame-outline" label={t('streak')} value={`${streak}d`} color={colors.streak} small />
            <StatCard icon="barbell-outline" label={t('workouts')} value={totalWorkouts} small />
            <StatCard icon="nutrition-outline" label={t('calories')} value={calories.target} color={colors.accent} small />
          </Animated.View>

          {/* Daily Challenges */}
          <Animated.View entering={FadeInDown.duration(500).delay(300)}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('dailyChallenges')}</Text>
            <View style={styles.challenges}>
              {dailyChallenges.map((challenge) => (
                <Pressable
                  key={challenge.id}
                  onPress={() => {
                    if (!challenge.completed) completeDailyChallenge(challenge.id);
                  }}
                  style={[
                    styles.challengeCard,
                    {
                      backgroundColor: challenge.completed ? colors.backgroundSelected : colors.card,
                      borderColor: challenge.completed ? colors.accent : colors.border,
                    },
                  ]}
                >
                  <Ionicons
                    name={challenge.completed ? 'checkmark-circle' : 'trophy-outline'}
                    size={24}
                    color={challenge.completed ? colors.accent : colors.primary}
                  />
                  <View style={styles.challengeContent}>
                    <Text style={[styles.challengeLabel, { color: colors.text }]}>
                      {challenge.label}
                    </Text>
                    <Text style={[styles.challengeXP, { color: colors.xp }]}>
                      +{challenge.xpBonus} XP
                    </Text>
                  </View>
                  {!challenge.completed && (
                    <View style={[styles.challengeAction, { backgroundColor: colors.primary }]}>
                      <Text style={styles.challengeActionText}>GO</Text>
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          </Animated.View>

          {/* Program Info */}
          {program && (
            <Animated.View entering={FadeInDown.duration(500).delay(400)}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('yourProgram')}</Text>
              <View
                style={[styles.programCard, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Text style={[styles.programType, { color: colors.primary }]}>
                  {program.type.replace(/_/g, ' ').toUpperCase()}
                </Text>
                <Text style={[styles.programDetail, { color: colors.text }]}>
                  {program.daysPerWeek} {t('daysWeek')} - {t(program.level === 'beginner' ? 'levelBeginner' : program.level === 'intermediate' ? 'moderate' : 'levelAthlete')} {t('level')}
                </Text>
                <View style={styles.programDays}>
                  {program.days.map((day, i) => (
                    <View key={i} style={[styles.dayPill, { backgroundColor: colors.backgroundSelected }]}>
                      <Text style={[styles.dayPillText, { color: colors.text }]}>
                        {dayShort(day.dayName)}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </Animated.View>
          )}

          {/* Nutrition Summary */}
          <Animated.View entering={FadeInDown.duration(500).delay(500)}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('nutritionPlan')}</Text>
            <View style={styles.nutritionRow}>
              <StatCard icon="flame-outline" label={t('calories')} value={calories.target} color={colors.accent} small />
              <StatCard icon="fish-outline" label={t('protein')} value={`${calories.protein}g`} small />
              <StatCard icon="leaf-outline" label={t('carbs')} value={`${calories.carbs}g`} small />
              <StatCard icon="water-outline" label={t('fat')} value={`${calories.fat}g`} small />
            </View>
            <View style={[styles.strategyBadge, { backgroundColor: colors.backgroundSelected }]}>
              <Text style={[styles.strategyText, { color: colors.primary }]}>
                {t('strategy')}: {calories.strategy.toUpperCase()}
              </Text>
            </View>
            <View style={styles.disclaimerContainer}>
              <Ionicons name="information-circle-outline" size={14} color={colors.textSecondary} style={{ marginTop: 1 }} />
              <View style={styles.disclaimerTextContainer}>
                <Text style={[styles.disclaimerText, { color: colors.textSecondary }]}>
                  {t('nutritionDisclaimer')}
                </Text>
                <Text style={[styles.sourcesText, { color: colors.textSecondary }]}>
                  {t('nutritionSources')}
                </Text>
              </View>
            </View>
          </Animated.View>

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  scroll: { paddingHorizontal: Spacing.four, paddingTop: Spacing.four, gap: Spacing.four },
  greeting: { fontSize: 14, fontWeight: '500' },
  name: { fontSize: 28, fontWeight: '800' },
  levelCard: {
    padding: Spacing.four,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    gap: Spacing.three,
  },
  levelHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  levelBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelNumber: { color: '#fff', fontSize: 20, fontWeight: '800' },
  levelInfo: { flex: 1, gap: 2 },
  levelTitle: { fontSize: 18, fontWeight: '700' },
  xpText: { fontSize: 13 },
  totalXP: { fontSize: 16, fontWeight: '700' },
  statsRow: { flexDirection: 'row', gap: Spacing.two },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginBottom: Spacing.three },
  challenges: { gap: Spacing.two },
  challengeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.three,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    gap: Spacing.three,
  },
  challengeIcon: { fontSize: 24 },
  challengeContent: { flex: 1, gap: 2 },
  challengeLabel: { fontSize: 15, fontWeight: '600' },
  challengeXP: { fontSize: 13, fontWeight: '600' },
  challengeAction: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: BorderRadius.sm,
  },
  challengeActionText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  programCard: {
    padding: Spacing.four,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    gap: Spacing.two,
  },
  programType: { fontSize: 14, fontWeight: '800', letterSpacing: 1 },
  programDetail: { fontSize: 15, fontWeight: '500', textTransform: 'capitalize' },
  programDays: { flexDirection: 'row', gap: Spacing.one, marginTop: Spacing.two },
  dayPill: {
    flex: 1,
    paddingVertical: Spacing.two,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
  },
  dayPillText: { fontSize: 12, fontWeight: '600' },
  nutritionRow: { flexDirection: 'row', gap: Spacing.two },
  strategyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: BorderRadius.full,
    marginTop: Spacing.two,
  },
  strategyText: { fontSize: 13, fontWeight: '700' },
  disclaimerContainer: {
    flexDirection: 'row',
    gap: 6,
    marginTop: Spacing.three,
    paddingTop: Spacing.three,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(128,128,128,0.2)',
  },
  disclaimerTextContainer: { flex: 1, gap: 4 },
  disclaimerText: { fontSize: 11, lineHeight: 15 },
  sourcesText: { fontSize: 10, lineHeight: 14, fontStyle: 'italic' },
});