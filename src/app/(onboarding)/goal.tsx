import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { BorderRadius, Spacing } from '@/constants/theme';
import type { Goal } from '@/engine/fitnessEngine';
import type { TranslationKey } from '@/constants/translations';

const GOALS: { goal: Goal; labelKey: TranslationKey; icon: React.ComponentProps<typeof Ionicons>['name']; descKey: TranslationKey }[] = [
  { goal: 'lose_weight', labelKey: 'loseWeight', icon: 'flame-outline', descKey: 'loseWeightDesc' },
  { goal: 'build_muscle', labelKey: 'buildMuscle', icon: 'barbell-outline', descKey: 'buildMuscleDesc' },
  { goal: 'stay_fit', labelKey: 'stayFit', icon: 'heart-outline', descKey: 'stayFitDesc' },
];

export default function GoalScreen() {
  const colors = useColors();
  const router = useRouter();
  const { t } = useTranslation();
  const params = useLocalSearchParams<{
    gender: string;
    age: string;
    height: string;
    weight: string;
    bodyFat: string;
    activity: string;
    bodyType: string;
  }>();
  const setStep = useStore((s) => s.setOnboardingStep);
  const [selected, setSelected] = useState<Goal | null>(null);

  const handleNext = () => {
    if (!selected) return;
    setStep(3);
    router.push({
      pathname: '/(onboarding)/target-weight',
      params: { ...params, goal: selected },
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={[styles.step, { color: colors.primary }]}>{t('step3of4')}</Text>
          <Text style={[styles.title, { color: colors.text }]}>{t('goalTitle')}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t('goalSubtitle')}
          </Text>
        </View>

        <View style={styles.goals}>
          {GOALS.map((g, i) => (
            <Animated.View key={g.goal} entering={FadeInDown.duration(400).delay(i * 150)}>
              <Pressable
                onPress={() => setSelected(g.goal)}
                style={[
                  styles.card,
                  {
                    backgroundColor: selected === g.goal ? colors.backgroundSelected : colors.card,
                    borderColor: selected === g.goal ? colors.primary : colors.border,
                    borderWidth: selected === g.goal ? 2 : 1,
                  },
                ]}
              >
                <Ionicons name={g.icon} size={40} color={selected === g.goal ? colors.primary : colors.textSecondary} />
                <View style={styles.cardContent}>
                  <Text style={[styles.cardLabel, { color: colors.text }]}>{t(g.labelKey)}</Text>
                  <Text style={[styles.cardDesc, { color: colors.textSecondary }]}>{t(g.descKey)}</Text>
                </View>
              </Pressable>
            </Animated.View>
          ))}
        </View>

        <View style={styles.spacer} />

        <Pressable
          onPress={handleNext}
          disabled={!selected}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: selected ? colors.primary : colors.border,
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: selected ? '#fff' : colors.textSecondary }]}>
            {t('continue')}
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1, paddingHorizontal: Spacing.four, paddingBottom: Spacing.five },
  header: { paddingTop: Spacing.five, gap: Spacing.two, marginBottom: Spacing.five },
  step: { fontSize: 14, fontWeight: '600' },
  title: { fontSize: 28, fontWeight: '800' },
  subtitle: { fontSize: 15 },
  goals: { gap: Spacing.three },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.four,
    borderRadius: BorderRadius.lg,
    gap: Spacing.four,
  },
  cardIcon: { fontSize: 44 },
  cardContent: { flex: 1, gap: Spacing.one },
  cardLabel: { fontSize: 20, fontWeight: '700' },
  cardDesc: { fontSize: 14 },
  spacer: { flex: 1 },
  button: {
    paddingVertical: Spacing.three + 2,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  buttonText: { fontSize: 18, fontWeight: '700' },
});