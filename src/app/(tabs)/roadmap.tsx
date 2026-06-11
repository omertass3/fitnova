import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import type { Language } from '@/constants/translations';
import { useStore } from '@/store/useStore';
import { RoadMap } from '@/components/RoadMap';
import { XPBar } from '@/components/XPBar';
import { Spacing, BorderRadius } from '@/constants/theme';
import { getProgramPhase } from '@/engine/fitnessEngine';

export default function RoadMapScreen() {
  const colors = useColors();
  const { language } = useTranslation();
  const currentWeek = useStore((s) => s.currentWeek);
  const weekWorkoutsCompleted = useStore((s) => s.weekWorkoutsCompleted);
  const program = useStore((s) => s.program);
  const totalXP = useStore((s) => s.totalXP);
  const advanceWeek = useStore((s) => s.advanceWeek);

  const phase = getProgramPhase(currentWeek);
  const targetDays = program?.daysPerWeek ?? 3;
  const weekProgress = Math.min(weekWorkoutsCompleted / targetDays, 1);
  const canAdvance = weekWorkoutsCompleted >= targetDays;
  const cycleLabelMap = { tr: 'Döngü', en: 'Cycle', fr: 'Cycle', de: 'Zyklus' } as const;
  const cycleLabel = phase.cycle > 1 ? ` (${cycleLabelMap[language]} ${phase.cycle})` : '';

  const phaseLabels: Record<string, Record<Language, string>> = {
    full_body: { tr: 'Tam Vücut', en: 'Full Body', fr: 'Corps entier', de: 'Ganzkörper' },
    upper_lower: { tr: 'Üst/Alt Vücut', en: 'Upper/Lower', fr: 'Haut/Bas du corps', de: 'Ober-/Unterkörper' },
    push_pull_legs: { tr: 'İtme/Çekme/Bacak', en: 'Push/Pull/Legs', fr: 'Poussée/Tirage/Jambes', de: 'Drücken/Ziehen/Beine' },
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView edges={['top']} style={styles.safe}>
        <Animated.View entering={FadeInDown.duration(500)} style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>
            {{ tr: 'Yol Haritası', en: 'Road Map', fr: 'Feuille de route', de: 'Trainingsplan' }[language]}
          </Text>

          {/* Current week card */}
          <View style={[styles.weekCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={[styles.weekBadge, { backgroundColor: colors.primary }]}>
              <Text style={styles.weekNum}>{currentWeek}</Text>
            </View>
            <View style={styles.weekInfo}>
              <Text style={[styles.weekLabel, { color: colors.text }]}>
                {{ tr: 'Hafta', en: 'Week', fr: 'Semaine', de: 'Woche' }[language]} {currentWeek}{cycleLabel}
              </Text>
              <Text style={[styles.weekPhase, { color: colors.primary }]}>
                {phaseLabels[phase.type]?.[language] ?? phase.type} - {targetDays} {{ tr: 'gün/hafta', en: 'days/week', fr: 'jours/semaine', de: 'Tage/Woche' }[language]}
              </Text>
              <View style={styles.progressRow}>
                <View style={styles.progressBarWrap}>
                  <XPBar current={weekWorkoutsCompleted} max={targetDays} height={8} />
                </View>
                <Text style={[styles.progressText, { color: colors.textSecondary }]}>
                  {weekWorkoutsCompleted}/{targetDays}
                </Text>
              </View>
            </View>
          </View>

          {/* Advance week button */}
          {canAdvance && (
            <Pressable
              onPress={advanceWeek}
              style={({ pressed }) => [
                styles.advanceBtn,
                { backgroundColor: colors.accent, opacity: pressed ? 0.9 : 1 },
              ]}
            >
              <Text style={styles.advanceTxt}>
                {language === 'tr' ? `Hafta ${currentWeek + 1}'e Geç` : language === 'fr' ? `Passer à la semaine ${currentWeek + 1}` : language === 'de' ? `Weiter zu Woche ${currentWeek + 1}` : `Go to Week ${currentWeek + 1}`}
              </Text>
            </Pressable>
          )}

        </Animated.View>

        <RoadMap />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  header: { paddingHorizontal: Spacing.four, paddingTop: Spacing.four, gap: Spacing.three },
  title: { fontSize: 28, fontWeight: '800' },
  weekCard: {
    flexDirection: 'row', alignItems: 'center', padding: Spacing.three,
    borderRadius: BorderRadius.xl, borderWidth: 1, gap: Spacing.three,
  },
  weekBadge: {
    width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center',
  },
  weekNum: { color: '#fff', fontSize: 22, fontWeight: '800' },
  weekInfo: { flex: 1, gap: 4 },
  weekLabel: { fontSize: 17, fontWeight: '700' },
  weekPhase: { fontSize: 13, fontWeight: '600' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 2, overflow: 'hidden' },
  progressBarWrap: { flex: 1 },
  progressText: { fontSize: 12, fontWeight: '600', minWidth: 30 },
  advanceBtn: {
    paddingVertical: 14, borderRadius: BorderRadius.lg, alignItems: 'center',
  },
  advanceTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
