import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { BorderRadius, Spacing } from '@/constants/theme';

export default function WelcomeScreen() {
  const colors = useColors();
  const router = useRouter();
  const { t, language } = useTranslation();
  const setLanguage = useStore((s) => s.setLanguage);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe}>
        {/* Language Toggle */}
        <Animated.View entering={FadeInUp.duration(500)} style={styles.langRow}>
          {(['tr', 'en', 'fr', 'de'] as const).map((lang) => (
            <Pressable
              key={lang}
              onPress={() => setLanguage(lang)}
              style={[
                styles.langButton,
                {
                  backgroundColor: language === lang ? colors.primary : colors.card,
                  borderColor: language === lang ? colors.primary : colors.border,
                },
              ]}
            >
              <Text style={[styles.langText, { color: language === lang ? '#fff' : colors.text }]}>
                {lang.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </Animated.View>

        <Animated.View entering={FadeInUp.duration(800).delay(200)} style={styles.hero}>
          <Text style={styles.logo}>FN</Text>
          <Text style={[styles.title, { color: colors.text }]}>{t('welcomeTitle')}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t('welcomeSubtitle')}
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(600).delay(500)} style={styles.features}>
          {[
            { icon: 'fitness-outline' as const, key: 'feature1' as const },
            { icon: 'flame-outline' as const, key: 'feature2' as const },
            { icon: 'game-controller-outline' as const, key: 'feature3' as const },
            { icon: 'trending-up-outline' as const, key: 'feature4' as const },
          ].map((f, i) => (
            <View key={i} style={styles.featureRow}>
              <Ionicons name={f.icon} size={20} color={colors.primary} />
              <Text style={[styles.featureText, { color: colors.text }]}>{t(f.key)}</Text>
            </View>
          ))}
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(600).delay(800)} style={styles.bottom}>
          <Pressable
            onPress={() => router.push('/(onboarding)/body-type')}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: colors.primary, opacity: pressed ? 0.9 : 1 },
            ]}
          >
            <Text style={styles.buttonText}>{t('getStarted')}</Text>
          </Pressable>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1, paddingHorizontal: Spacing.four },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.two,
    paddingTop: Spacing.three,
  },
  langButton: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
  langText: { fontSize: 14, fontWeight: '700' },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.three,
  },
  logo: { fontSize: 72, fontWeight: '900', color: '#4F46E5', letterSpacing: -2 },
  title: { fontSize: 36, fontWeight: '800', letterSpacing: 6 },
  subtitle: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
  features: { gap: Spacing.three, paddingBottom: Spacing.five },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  featureIcon: { fontSize: 24 },
  featureText: { fontSize: 16, fontWeight: '500', flex: 1 },
  bottom: { paddingBottom: Spacing.five },
  button: {
    paddingVertical: Spacing.three + 2,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});