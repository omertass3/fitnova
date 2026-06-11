import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useStore } from '@/store/useStore';
import { useColors } from '@/hooks/useThemeColor';

export default function EntryScreen() {
  const onboardingComplete = useStore((s) => s.onboardingComplete);
  const refreshDailyChallenges = useStore((s) => s.refreshDailyChallenges);
  const colors = useColors();

  useEffect(() => {
    if (onboardingComplete) {
      refreshDailyChallenges();
    }
  }, [onboardingComplete]);

  if (onboardingComplete) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(onboarding)/welcome" />;
}