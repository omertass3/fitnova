import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { BorderRadius, Spacing } from '@/constants/theme';
import type { BodyType } from '@/engine/fitnessEngine';
import type { TranslationKey } from '@/constants/translations';

const BODY_TYPES: { type: BodyType; labelKey: TranslationKey; icon: React.ComponentProps<typeof Ionicons>['name']; descKey: TranslationKey }[] = [
  { type: 'skinny', labelKey: 'skinny', icon: 'body-outline', descKey: 'skinnyDesc' },
  { type: 'athletic', labelKey: 'athletic', icon: 'walk-outline', descKey: 'athleticDesc' },
  { type: 'muscular', labelKey: 'muscular', icon: 'barbell-outline', descKey: 'muscularDesc' },
  { type: 'overweight', labelKey: 'overweight', icon: 'person-outline', descKey: 'overweightDesc' },
];

export default function BodyTypeScreen() {
  const colors = useColors();
  const router = useRouter();
  const { t } = useTranslation();
  const [selected, setSelected] = useState<BodyType | null>(null);
  const setStep = useStore((s) => s.setOnboardingStep);

  const handleNext = () => {
    if (!selected) return;
    setStep(1);
    router.push({ pathname: '/(onboarding)/details', params: { bodyType: selected } });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={[styles.step, { color: colors.primary }]}>{t('step1of4')}</Text>
          <Text style={[styles.title, { color: colors.text }]}>{t('bodyTypeTitle')}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t('bodyTypeSubtitle')}
          </Text>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        >
          {BODY_TYPES.map((bt, i) => (
            <Animated.View key={bt.type} entering={FadeInDown.duration(400).delay(i * 100)}>
              <Pressable
                onPress={() => setSelected(bt.type)}
                style={[
                  styles.card,
                  {
                    backgroundColor: selected === bt.type ? colors.backgroundSelected : colors.card,
                    borderColor: selected === bt.type ? colors.primary : colors.border,
                    borderWidth: selected === bt.type ? 2 : 1,
                  },
                ]}
              >
                <Ionicons name={bt.icon} size={36} color={selected === bt.type ? colors.primary : colors.textSecondary} />
                <Text style={[styles.cardLabel, { color: colors.text }]}>{t(bt.labelKey)}</Text>
                <Text style={[styles.cardDesc, { color: colors.textSecondary }]}>
                  {t(bt.descKey)}
                </Text>
              </Pressable>
            </Animated.View>
          ))}
        </ScrollView>

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
  header: { paddingTop: Spacing.five, gap: Spacing.two, marginBottom: Spacing.four },
  step: { fontSize: 14, fontWeight: '600' },
  title: { fontSize: 28, fontWeight: '800' },
  subtitle: { fontSize: 15 },
  scroll: { flex: 1 },
  grid: { gap: Spacing.three, paddingBottom: Spacing.four },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.four,
    borderRadius: BorderRadius.lg,
    gap: Spacing.three,
  },
  cardIcon: { fontSize: 40 },
  cardLabel: { fontSize: 18, fontWeight: '700' },
  cardDesc: { fontSize: 13, flex: 1 },
  button: {
    paddingVertical: Spacing.three + 2,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  buttonText: { fontSize: 18, fontWeight: '700' },
});