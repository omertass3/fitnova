import { View, Text, StyleSheet, Pressable, TextInput, ScrollView, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { BorderRadius, Spacing } from '@/constants/theme';
import type { Gender, ActivityLevel } from '@/engine/fitnessEngine';
import type { TranslationKey } from '@/constants/translations';

const ACTIVITY_LEVELS: { level: ActivityLevel; labelKey: TranslationKey; descKey: TranslationKey }[] = [
  { level: 'sedentary', labelKey: 'sedentary', descKey: 'sedentaryDesc' },
  { level: 'light', labelKey: 'light', descKey: 'lightDesc' },
  { level: 'moderate', labelKey: 'moderate', descKey: 'moderateDesc' },
  { level: 'active', labelKey: 'active', descKey: 'activeDesc' },
  { level: 'very_active', labelKey: 'veryActive', descKey: 'veryActiveDesc' },
];

export default function DetailsScreen() {
  const colors = useColors();
  const router = useRouter();
  const { t } = useTranslation();
  const setStep = useStore((s) => s.setOnboardingStep);
  const params = useLocalSearchParams<{ bodyType: string }>();

  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [activity, setActivity] = useState<ActivityLevel | null>(null);

  const isValid = gender && age && height && weight && bodyFat && activity;

  const handleNext = () => {
    if (!isValid) return;
    setStep(2);
    router.push({
      pathname: '/(onboarding)/goal',
      params: {
        gender,
        age,
        height,
        weight,
        bodyFat,
        activity,
        bodyType: params.bodyType ?? 'athletic',
      },
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={[styles.step, { color: colors.primary }]}>{t('step2of4')}</Text>
          <Text style={[styles.title, { color: colors.text }]}>{t('aboutYou')}</Text>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Gender */}
          <Animated.View entering={FadeInDown.duration(400).delay(100)}>
            <Text style={[styles.label, { color: colors.text }]}>{t('gender')}</Text>
            <View style={styles.genderRow}>
              {(['male', 'female'] as Gender[]).map((g) => (
                <Pressable
                  key={g}
                  onPress={() => setGender(g)}
                  style={[
                    styles.genderButton,
                    {
                      backgroundColor: gender === g ? colors.primary : colors.card,
                      borderColor: gender === g ? colors.primary : colors.border,
                    },
                  ]}
                >
                  <Ionicons name={g === 'male' ? 'male-outline' : 'female-outline'} size={22} color={gender === g ? '#fff' : colors.text} />
                  <Text style={[styles.genderText, { color: gender === g ? '#fff' : colors.text }]}>
                    {t(g)}
                  </Text>
                </Pressable>
              ))}
            </View>
          </Animated.View>

          {/* Numeric inputs */}
          <Animated.View entering={FadeInDown.duration(400).delay(200)} style={styles.inputsGrid}>
            {[
              { labelKey: 'age' as const, value: age, setter: setAge, unit: t('years'), placeholder: '25' },
              { labelKey: 'height' as const, value: height, setter: setHeight, unit: 'cm', placeholder: '175' },
              { labelKey: 'weight' as const, value: weight, setter: setWeight, unit: 'kg', placeholder: '75' },
              { labelKey: 'bodyFat' as const, value: bodyFat, setter: setBodyFat, unit: '%', placeholder: '18' },
            ].map((input) => (
              <View key={input.labelKey} style={styles.inputContainer}>
                <Text style={[styles.label, { color: colors.text }]}>{t(input.labelKey)}</Text>
                <View
                  style={[
                    styles.inputWrapper,
                    { backgroundColor: colors.card, borderColor: colors.border },
                  ]}
                >
                  <TextInput
                    value={input.value}
                    onChangeText={input.setter}
                    placeholder={input.placeholder}
                    placeholderTextColor={colors.textSecondary}
                    keyboardType="numeric"
                    style={[styles.input, { color: colors.text }]}
                  />
                  <Text style={[styles.unit, { color: colors.textSecondary }]}>{input.unit}</Text>
                </View>
              </View>
            ))}
          </Animated.View>

          {/* Activity Level */}
          <Animated.View entering={FadeInDown.duration(400).delay(300)}>
            <Text style={[styles.label, { color: colors.text }]}>{t('activityLevel')}</Text>
            <View style={styles.activityList}>
              {ACTIVITY_LEVELS.map((al) => (
                <Pressable
                  key={al.level}
                  onPress={() => setActivity(al.level)}
                  style={[
                    styles.activityItem,
                    {
                      backgroundColor: activity === al.level ? colors.backgroundSelected : colors.card,
                      borderColor: activity === al.level ? colors.primary : colors.border,
                      borderWidth: activity === al.level ? 2 : 1,
                    },
                  ]}
                >
                  <Text style={[styles.activityLabel, { color: colors.text }]}>{t(al.labelKey)}</Text>
                  <Text style={[styles.activityDesc, { color: colors.textSecondary }]}>{t(al.descKey)}</Text>
                </Pressable>
              ))}
            </View>
          </Animated.View>
        </ScrollView>

        <Pressable
          onPress={handleNext}
          disabled={!isValid}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isValid ? colors.primary : colors.border,
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: isValid ? '#fff' : colors.textSecondary }]}>
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
  header: { paddingTop: Spacing.five, gap: Spacing.two, marginBottom: Spacing.four },
  step: { fontSize: 14, fontWeight: '600' },
  title: { fontSize: 28, fontWeight: '800' },
  scroll: { flex: 1 },
  scrollContent: { gap: Spacing.four, paddingBottom: Spacing.four },
  label: { fontSize: 15, fontWeight: '600', marginBottom: Spacing.two },
  genderRow: { flexDirection: 'row', gap: Spacing.three },
  genderButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.three,
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    gap: Spacing.two,
  },
  genderIcon: { fontSize: 22 },
  genderText: { fontSize: 16, fontWeight: '600' },
  inputsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three },
  inputContainer: { width: '47%' },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    paddingHorizontal: Spacing.three,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
  },
  unit: { fontSize: 14 },
  activityList: { gap: Spacing.two },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.three,
    borderRadius: BorderRadius.md,
  },
  activityLabel: { fontSize: 15, fontWeight: '600' },
  activityDesc: { fontSize: 13 },
  button: {
    paddingVertical: Spacing.three + 2,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    marginTop: Spacing.three,
  },
  buttonText: { fontSize: 18, fontWeight: '700' },
});