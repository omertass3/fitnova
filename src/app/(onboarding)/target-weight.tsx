import { View, Text, StyleSheet, Pressable, TextInput, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useMemo } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { BorderRadius, Spacing } from '@/constants/theme';
import { determineStrategy } from '@/engine/fitnessEngine';
import type { UserProfile, Gender, ActivityLevel, BodyType, Goal } from '@/engine/fitnessEngine';

export default function TargetWeightScreen() {
  const colors = useColors();
  const router = useRouter();
  const { t } = useTranslation();
  const completeOnboarding = useStore((s) => s.completeOnboarding);

  const params = useLocalSearchParams<{
    gender: string;
    age: string;
    height: string;
    weight: string;
    bodyFat: string;
    activity: string;
    bodyType: string;
    goal: string;
  }>();

  const currentWeight = parseInt(params.weight ?? '75', 10);
  const goal = (params.goal ?? 'stay_fit') as Goal;

  const suggested = useMemo(() => {
    const tempProfile = {
      gender: (params.gender ?? 'male') as Gender,
      age: parseInt(params.age ?? '25', 10),
      height: parseInt(params.height ?? '175', 10),
      weight: currentWeight,
      bodyFatPercentage: parseInt(params.bodyFat ?? '18', 10),
      bodyType: (params.bodyType ?? 'athletic') as BodyType,
      goal,
      activityLevel: (params.activity ?? 'moderate') as ActivityLevel,
      targetWeight: currentWeight,
    };
    const strategy = determineStrategy(tempProfile);
    if (strategy === 'cut') return Math.round(currentWeight * 0.9);
    if (strategy === 'bulk') return Math.round(currentWeight * 1.08);
    return currentWeight;
  }, [params]);

  const [targetWeight, setTargetWeight] = useState(suggested.toString());
  const [loading, setLoading] = useState(false);

  const parsedTarget = parseFloat(targetWeight);
  const isValid = !isNaN(parsedTarget) && parsedTarget >= 30 && parsedTarget <= 300;

  const handleComplete = () => {
    if (!isValid) return;
    setLoading(true);

    const profile: UserProfile = {
      gender: (params.gender ?? 'male') as Gender,
      age: parseInt(params.age ?? '25', 10),
      height: parseInt(params.height ?? '175', 10),
      weight: currentWeight,
      bodyFatPercentage: parseInt(params.bodyFat ?? '18', 10),
      bodyType: (params.bodyType ?? 'athletic') as BodyType,
      goal,
      activityLevel: (params.activity ?? 'moderate') as ActivityLevel,
      targetWeight: parsedTarget,
    };

    completeOnboarding(profile);

    setTimeout(() => {
      router.replace('/(tabs)');
    }, 500);
  };

  const diff = isValid ? parsedTarget - currentWeight : 0;
  const diffText = diff > 0 ? '+' + diff.toFixed(1) + ' kg' : diff.toFixed(1) + ' kg';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={[styles.step, { color: colors.primary }]}>{t('step4of4')}</Text>
          <Text style={[styles.title, { color: colors.text }]}>{t('targetWeightTitle')}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{t('targetWeightSubtitle')}</Text>
        </View>

        <Animated.View entering={FadeInDown.duration(400).delay(100)} style={styles.content}>
          <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>{t('currentWeightLabel')}</Text>
            <Text style={[styles.infoValue, { color: colors.text }]}>{String(currentWeight) + ' kg'}</Text>
          </View>

          <View style={[styles.inputCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>{t('targetWeightLabel')}</Text>
            <View style={[styles.inputWrapper, { backgroundColor: colors.backgroundElement, borderColor: colors.border }]}>
              <TextInput
                value={targetWeight}
                onChangeText={setTargetWeight}
                keyboardType="decimal-pad"
                style={[styles.input, { color: colors.text }]}
                placeholder="70"
                placeholderTextColor={colors.textSecondary}
              />
              <Text style={[styles.unit, { color: colors.textSecondary }]}>{'kg'}</Text>
            </View>
            {isValid && diff !== 0 ? (
              <Text style={[styles.diff, { color: diff < 0 ? colors.accent : colors.primary }]}>{diffText}</Text>
            ) : null}
          </View>

          <Animated.View entering={FadeInDown.duration(400).delay(200)}>
            <Pressable
              onPress={() => setTargetWeight(suggested.toString())}
              style={[styles.suggestedBtn, { backgroundColor: colors.backgroundSelected, borderColor: colors.primary }]}
            >
              <Text style={[styles.suggestedLabel, { color: colors.primary }]}>{t('suggestedWeight') + ': ' + String(suggested) + ' kg'}</Text>
            </Pressable>
          </Animated.View>
        </Animated.View>

        <View style={styles.spacer} />

        <Pressable
          onPress={handleComplete}
          disabled={!isValid || loading}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isValid ? colors.accent : colors.border,
              opacity: pressed || loading ? 0.8 : 1,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: isValid ? '#fff' : colors.textSecondary }]}>
            {loading ? t('buildingPlan') : t('letsGo')}
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
  content: { gap: Spacing.four },
  infoCard: {
    padding: Spacing.four, borderRadius: BorderRadius.lg, borderWidth: 1,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  infoLabel: { fontSize: 15, fontWeight: '600' },
  infoValue: { fontSize: 22, fontWeight: '800' },
  inputCard: {
    padding: Spacing.four, borderRadius: BorderRadius.lg, borderWidth: 1, gap: Spacing.three,
  },
  inputLabel: { fontSize: 16, fontWeight: '700' },
  inputWrapper: {
    flexDirection: 'row', alignItems: 'center',
    borderRadius: BorderRadius.md, borderWidth: 1, paddingHorizontal: Spacing.three,
  },
  input: {
    flex: 1, fontSize: 28, fontWeight: '800',
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
  },
  unit: { fontSize: 18, fontWeight: '600' },
  diff: { fontSize: 16, fontWeight: '700', textAlign: 'center' },
  suggestedBtn: {
    paddingVertical: Spacing.three, borderRadius: BorderRadius.lg,
    alignItems: 'center', borderWidth: 1.5,
  },
  suggestedLabel: { fontSize: 15, fontWeight: '700' },
  spacer: { flex: 1 },
  button: {
    paddingVertical: Spacing.three + 2, borderRadius: BorderRadius.lg, alignItems: 'center',
  },
  buttonText: { fontSize: 18, fontWeight: '700' },
});