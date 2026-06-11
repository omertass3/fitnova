import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Platform, LayoutChangeEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { StatCard } from '@/components/StatCard';
import { BorderRadius, Spacing } from '@/constants/theme';
import { calculateGoalProgress } from '@/engine/fitnessEngine';

const CHART_HEIGHT = 180;

function MiniChart({ data, color }: { data: { date: string; weight: number }[]; color: string }) {
  const colors = useColors();
  const { t } = useTranslation();
  const [chartWidth, setChartWidth] = useState(0);

  const handleLayout = (e: LayoutChangeEvent) => {
    setChartWidth(e.nativeEvent.layout.width);
  };

  if (data.length < 2) {
    return (
      <View style={[miniStyles.empty, { borderColor: colors.border }]}>
        <Text style={[miniStyles.emptyText, { color: colors.textSecondary }]}>
          {t('addMoreEntries')}
        </Text>
      </View>
    );
  }

  const weights = data.map((d) => d.weight);
  const min = Math.min(...weights) - 2;
  const max = Math.max(...weights) + 2;
  const range = max - min || 1;

  const usableWidth = Math.max(chartWidth - 16, 0); // padding for dots at edges
  const points = usableWidth > 0
    ? data.map((d, i) => ({
        x: 8 + (i / (data.length - 1)) * usableWidth,
        y: CHART_HEIGHT - ((d.weight - min) / range) * CHART_HEIGHT,
      }))
    : [];

  return (
    <View style={miniStyles.container}>
      <View style={miniStyles.yAxis}>
        <Text style={[miniStyles.axisLabel, { color: colors.textSecondary }]}>{Math.round(max)}</Text>
        <Text style={[miniStyles.axisLabel, { color: colors.textSecondary }]}>{Math.round(min)}</Text>
      </View>
      <View style={[miniStyles.chart, { borderColor: colors.border }]} onLayout={handleLayout}>
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <View
            key={pct}
            style={[miniStyles.gridLine, { top: pct * CHART_HEIGHT, backgroundColor: colors.border }]}
          />
        ))}
        {points.map((point, i) => (
          <View key={i}>
            {i > 0 && (
              <View
                style={[
                  miniStyles.line,
                  {
                    backgroundColor: color,
                    left: points[i - 1].x,
                    top: points[i - 1].y,
                    width: Math.sqrt(
                      Math.pow(point.x - points[i - 1].x, 2) + Math.pow(point.y - points[i - 1].y, 2)
                    ),
                    transform: [
                      { rotate: `${Math.atan2(point.y - points[i - 1].y, point.x - points[i - 1].x)}rad` },
                    ],
                  },
                ]}
              />
            )}
            <View
              style={[miniStyles.dot, { backgroundColor: color, left: point.x - 4, top: point.y - 4 }]}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default function ProgressScreen() {
  const colors = useColors();
  const { t } = useTranslation();
  const profile = useStore((s) => s.profile);
  const weightHistory = useStore((s) => s.weightHistory);
  const totalWorkouts = useStore((s) => s.totalWorkouts);
  const totalXP = useStore((s) => s.totalXP);
  const longestStreak = useStore((s) => s.longestStreak);
  const calories = useStore((s) => s.calories);
  const addWeightEntry = useStore((s) => s.addWeightEntry);

  const [newWeight, setNewWeight] = useState('');

  if (!profile || !calories) return null;

  const currentWeight = weightHistory.length > 0 ? weightHistory[weightHistory.length - 1].weight : profile.weight;
  const startWeight = weightHistory.length > 0 ? weightHistory[0].weight : profile.weight;
  const weightChange = currentWeight - startWeight;

  const goalWeight = profile.targetWeight ?? startWeight;

  const goalProgress = calculateGoalProgress(startWeight, currentWeight, goalWeight);

  const handleAddWeight = () => {
    const w = parseFloat(newWeight);
    if (!w || w < 30 || w > 300) return;
    addWeightEntry(w);
    setNewWeight('');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView edges={['top']} style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          <Animated.View entering={FadeInDown.duration(500)}>
            <Text style={[styles.title, { color: colors.text }]}>{t('progress')}</Text>
          </Animated.View>

          {/* Goal Progress */}
          <Animated.View
            entering={FadeInDown.duration(500).delay(100)}
            style={[styles.goalCard, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <Text style={[styles.goalTitle, { color: colors.text }]}>{t('goalProgress')}</Text>
            <View style={styles.goalBar}>
              <View style={[styles.goalBarBg, { backgroundColor: colors.border }]}>
                <View
                  style={[styles.goalBarFill, { backgroundColor: colors.accent, width: `${Math.min(goalProgress, 100)}%` }]}
                />
              </View>
              <Text style={[styles.goalPercent, { color: colors.accent }]}>{goalProgress}%</Text>
            </View>
            <View style={styles.goalRow}>
              <Text style={[styles.goalLabel, { color: colors.textSecondary }]}>
                {t('start')}: {startWeight.toFixed(1)} kg
              </Text>
              <Text style={[styles.goalLabel, { color: colors.textSecondary }]}>
                {t('target')}: {goalWeight.toFixed(1)} kg
              </Text>
            </View>
          </Animated.View>

          {/* Stats */}
          <Animated.View entering={FadeInDown.duration(500).delay(200)} style={styles.statsRow}>
            <StatCard icon="barbell-outline" label={t('workouts')} value={totalWorkouts} />
            <StatCard icon="flame-outline" label={t('bestStreak')} value={`${longestStreak}d`} color={colors.streak} />
            <StatCard icon="star-outline" label={t('totalXP')} value={totalXP} color={colors.xp} />
          </Animated.View>

          {/* Weight Chart */}
          <Animated.View entering={FadeInDown.duration(500).delay(300)}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('weightTrend')}</Text>
            <View style={[styles.chartContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.currentWeight}>
                <Text style={[styles.weightValue, { color: colors.text }]}>{currentWeight.toFixed(1)} kg</Text>
                <Text
                  style={[styles.weightChange, { color: weightChange <= 0 ? colors.accent : colors.warning }]}
                >
                  {weightChange >= 0 ? '+' : ''}{weightChange.toFixed(1)} kg
                </Text>
              </View>
              <MiniChart data={weightHistory} color={colors.primary} />
            </View>
          </Animated.View>

          {/* Add Weight */}
          <Animated.View
            entering={FadeInDown.duration(500).delay(400)}
            style={[styles.addWeight, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <Text style={[styles.addWeightLabel, { color: colors.text }]}>{t('logWeight')}</Text>
            <View style={styles.addWeightRow}>
              <TextInput
                value={newWeight}
                onChangeText={setNewWeight}
                placeholder="e.g. 74.5"
                placeholderTextColor={colors.textSecondary}
                keyboardType="decimal-pad"
                style={[
                  styles.weightInput,
                  { color: colors.text, backgroundColor: colors.backgroundElement, borderColor: colors.border },
                ]}
              />
              <Pressable onPress={handleAddWeight} style={[styles.addButton, { backgroundColor: colors.primary }]}>
                <Text style={styles.addButtonText}>{t('add')}</Text>
              </Pressable>
            </View>
          </Animated.View>

          {/* Body Info */}
          <Animated.View entering={FadeInDown.duration(500).delay(500)}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('bodyInfo')}</Text>
            <View style={styles.bodyInfoGrid}>
              <StatCard icon="resize-outline" label={t('height')} value={`${profile.height}cm`} small />
              <StatCard icon="analytics-outline" label={t('bodyFat')} value={`${profile.bodyFatPercentage}%`} small />
              <StatCard icon="flag-outline" label={t('strategy')} value={calories.strategy} small />
            </View>
          </Animated.View>

          <View style={{ height: 120 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const miniStyles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 8, overflow: 'hidden' },
  yAxis: { justifyContent: 'space-between', paddingVertical: 2 },
  axisLabel: { fontSize: 10 },
  chart: { flex: 1, height: CHART_HEIGHT, borderLeftWidth: 1, borderBottomWidth: 1, position: 'relative', overflow: 'hidden' },
  gridLine: { position: 'absolute', left: 0, right: 0, height: 0.5 },
  line: { position: 'absolute', height: 2, transformOrigin: 'left center' },
  dot: { position: 'absolute', width: 8, height: 8, borderRadius: 4 },
  empty: {
    flex: 1, height: 120, borderWidth: 1, borderStyle: 'dashed', borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
  },
  emptyText: { fontSize: 13, textAlign: 'center' },
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  scroll: { paddingHorizontal: Spacing.four, paddingTop: Spacing.four, gap: Spacing.four },
  title: { fontSize: 28, fontWeight: '800' },
  goalCard: { padding: Spacing.four, borderRadius: BorderRadius.lg, borderWidth: 1, gap: Spacing.three },
  goalTitle: { fontSize: 18, fontWeight: '700' },
  goalBar: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  goalBarBg: { flex: 1, height: 12, borderRadius: 6, overflow: 'hidden' },
  goalBarFill: { height: 12, borderRadius: 6 },
  goalPercent: { fontSize: 18, fontWeight: '800', minWidth: 50, textAlign: 'right' },
  goalRow: { flexDirection: 'row', justifyContent: 'space-between' },
  goalLabel: { fontSize: 13 },
  statsRow: { flexDirection: 'row', gap: Spacing.two },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginBottom: Spacing.two },
  chartContainer: { padding: Spacing.four, borderRadius: BorderRadius.lg, borderWidth: 1, gap: Spacing.three, overflow: 'hidden' },
  currentWeight: { flexDirection: 'row', alignItems: 'baseline', gap: Spacing.two },
  weightValue: { fontSize: 24, fontWeight: '800' },
  weightChange: { fontSize: 14, fontWeight: '600' },
  addWeight: { padding: Spacing.four, borderRadius: BorderRadius.lg, borderWidth: 1, gap: Spacing.three },
  addWeightLabel: { fontSize: 16, fontWeight: '600' },
  addWeightRow: { flexDirection: 'row', gap: Spacing.two },
  weightInput: {
    flex: 1, fontSize: 18, fontWeight: '600',
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    paddingHorizontal: Spacing.three, borderRadius: BorderRadius.md, borderWidth: 1,
  },
  addButton: {
    paddingHorizontal: Spacing.four, borderRadius: BorderRadius.md,
    alignItems: 'center', justifyContent: 'center',
  },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  bodyInfoGrid: { flexDirection: 'row', gap: Spacing.two },
});