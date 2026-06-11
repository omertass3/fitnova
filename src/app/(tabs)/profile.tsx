import { View, Text, StyleSheet, ScrollView, Pressable, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { XPBar } from '@/components/XPBar';
import { StatCard } from '@/components/StatCard';
import { BorderRadius, Spacing } from '@/constants/theme';
import type { Language } from '@/constants/translations';

export default function ProfileScreen() {
  const colors = useColors();
  const { t, language } = useTranslation();
  const profile = useStore((s) => s.profile);
  const calories = useStore((s) => s.calories);
  const program = useStore((s) => s.program);
  const totalXP = useStore((s) => s.totalXP);
  const level = useStore((s) => s.getLevel());
  const xpProgress = useStore((s) => s.getXPProgress());
  const xpNext = useStore((s) => s.getXPForNextLevel());
  const levelTitle = useStore((s) => s.getLevelTitle());
  const streak = useStore((s) => s.currentStreak);
  const longestStreak = useStore((s) => s.longestStreak);
  const totalWorkouts = useStore((s) => s.totalWorkouts);
  const resetStore = useStore((s) => s.resetStore);
  const setLanguage = useStore((s) => s.setLanguage);

  if (!profile || !calories || !program) return null;

  const levelTitleMap: Record<string, string> = {
    Beginner: t('levelBeginner'),
    Regular: t('levelRegular'),
    Athlete: t('levelAthlete'),
    Warrior: t('levelWarrior'),
    Champion: t('levelChampion'),
    Legend: t('levelLegend'),
  };
  const translatedLevelTitle = levelTitleMap[levelTitle] ?? levelTitle;

  const handleReset = () => {
    if (Platform.OS === 'web') {
      resetStore();
      return;
    }
    Alert.alert(t('resetConfirmTitle'), t('resetConfirmMessage'), [
      { text: t('cancel'), style: 'cancel' },
      {
        text: t('reset'),
        style: 'destructive',
        onPress: () => resetStore(),
      },
    ]);
  };

  const GOAL_LABELS: Record<string, string> = {
    lose_weight: t('loseWeight'),
    build_muscle: t('buildMuscle'),
    stay_fit: t('stayFit'),
  };

  const GENDER_LABELS: Record<string, string> = {
    male: t('male'),
    female: t('female'),
  };

  const ACTIVITY_LABELS: Record<string, string> = {
    sedentary: t('sedentary'),
    light: t('light'),
    moderate: t('moderate'),
    active: t('active'),
    very_active: t('veryActive'),
  };

  const BODY_TYPE_LABELS: Record<string, string> = {
    skinny: t('skinny'),
    athletic: t('athletic'),
    muscular: t('muscular'),
    overweight: t('overweight'),
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView edges={['top']} style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          <Animated.View entering={FadeInDown.duration(500)}>
            <Text style={[styles.title, { color: colors.text }]}>{t('profile')}</Text>
          </Animated.View>

          {/* Language Selector */}
          <Animated.View entering={FadeInDown.duration(500).delay(50)} style={styles.langSection}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('language')}</Text>
            <View style={styles.langRow}>
              {(['tr', 'en', 'fr', 'de'] as Language[]).map((lang) => (
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
                    {lang === 'tr' ? t('turkish') : lang === 'en' ? t('english') : lang === 'fr' ? t('french') : t('german')}
                  </Text>
                </Pressable>
              ))}
            </View>
          </Animated.View>

          {/* Avatar & Level */}
          <Animated.View
            entering={FadeInDown.duration(500).delay(100)}
            style={[styles.avatarCard, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
              <Text style={styles.avatarText}>{level}</Text>
            </View>
            <Text style={[styles.levelTitle, { color: colors.text }]}>{translatedLevelTitle}</Text>
            <Text style={[styles.totalXPText, { color: colors.xp }]}>{totalXP} {t('totalXP')}</Text>
            <View style={styles.xpBarWrapper}>
              <XPBar current={xpProgress} max={xpNext} height={10} showGlow />
              <Text style={[styles.xpLabel, { color: colors.textSecondary }]}>
                {xpProgress} / {xpNext} XP - {t('level')} {level + 1}
              </Text>
            </View>
          </Animated.View>

          {/* Achievements */}
          <Animated.View entering={FadeInDown.duration(500).delay(200)} style={styles.statsRow}>
            <StatCard icon="flame-outline" label={t('streak')} value={`${streak}d`} color={colors.streak} />
            <StatCard icon="trophy-outline" label={t('bestStreak')} value={`${longestStreak}d`} color={colors.warning} />
            <StatCard icon="barbell-outline" label={t('workouts')} value={totalWorkouts} />
          </Animated.View>

          {/* Personal Info */}
          <Animated.View entering={FadeInDown.duration(500).delay(300)}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('personalInfo')}</Text>
            <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              {[
                { label: t('gender'), value: GENDER_LABELS[profile.gender] },
                { label: t('age'), value: `${profile.age} ${t('years')}` },
                { label: t('height'), value: `${profile.height} cm` },
                { label: t('weight'), value: `${profile.weight} kg` },
                { label: t('bodyFat'), value: `${profile.bodyFatPercentage}%` },
                { label: t('type'), value: BODY_TYPE_LABELS[profile.bodyType] },
                { label: t('activityLevel'), value: ACTIVITY_LABELS[profile.activityLevel] },
                { label: t('target'), value: GOAL_LABELS[profile.goal] },
              ].map((item, i) => (
                <View
                  key={item.label}
                  style={[styles.infoRow, i > 0 && { borderTopWidth: 0.5, borderTopColor: colors.border }]}
                >
                  <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>{item.label}</Text>
                  <Text style={[styles.infoValue, { color: colors.text }]}>{item.value}</Text>
                </View>
              ))}
            </View>
          </Animated.View>

          {/* Nutrition */}
          <Animated.View entering={FadeInDown.duration(500).delay(400)}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('nutritionPlan')}</Text>
            <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              {[
                { label: t('bmr'), value: `${calories.bmr} kcal` },
                { label: t('tdee'), value: `${calories.tdee} kcal` },
                { label: t('target'), value: `${calories.target} kcal` },
                { label: t('protein'), value: `${calories.protein}g` },
                { label: t('carbs'), value: `${calories.carbs}g` },
                { label: t('fat'), value: `${calories.fat}g` },
                { label: t('strategy'), value: calories.strategy.toUpperCase() },
              ].map((item, i) => (
                <View
                  key={item.label + i}
                  style={[styles.infoRow, i > 0 && { borderTopWidth: 0.5, borderTopColor: colors.border }]}
                >
                  <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>{item.label}</Text>
                  <Text style={[styles.infoValue, { color: colors.text }]}>{item.value}</Text>
                </View>
              ))}
            </View>
          </Animated.View>

          {/* Reset */}
          <Animated.View entering={FadeInDown.duration(500).delay(500)}>
            <Pressable
              onPress={handleReset}
              style={({ pressed }) => [
                styles.resetButton,
                { borderColor: colors.danger, opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Text style={[styles.resetText, { color: colors.danger }]}>{t('resetAllData')}</Text>
            </Pressable>
          </Animated.View>

          <View style={{ height: 120 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  scroll: { paddingHorizontal: Spacing.four, paddingTop: Spacing.four, gap: Spacing.four },
  title: { fontSize: 28, fontWeight: '800' },
  langSection: { gap: Spacing.two },
  langRow: { flexDirection: 'row', gap: Spacing.two },
  langButton: {
    flex: 1,
    paddingVertical: Spacing.three,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    alignItems: 'center',
  },
  langText: { fontSize: 15, fontWeight: '600' },
  avatarCard: {
    alignItems: 'center',
    padding: Spacing.five,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    gap: Spacing.three,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: '900' },
  levelTitle: { fontSize: 22, fontWeight: '800' },
  totalXPText: { fontSize: 16, fontWeight: '600' },
  xpBarWrapper: { width: '100%', gap: Spacing.one },
  xpLabel: { fontSize: 12, textAlign: 'center' },
  statsRow: { flexDirection: 'row', gap: Spacing.two },
  sectionTitle: { fontSize: 20, fontWeight: '700' },
  infoCard: { borderRadius: BorderRadius.lg, borderWidth: 1, overflow: 'hidden' },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.four,
  },
  infoLabel: { fontSize: 14 },
  infoValue: { fontSize: 14, fontWeight: '600' },
  resetButton: {
    paddingVertical: Spacing.three,
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    alignItems: 'center',
  },
  resetText: { fontSize: 16, fontWeight: '600' },
});