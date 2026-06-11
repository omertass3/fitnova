import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { useEffect } from 'react';

import { useStore } from '@/store/useStore';

export default function RootLayout() {
  const scheme = useColorScheme();
  const onboardingComplete = useStore((s) => s.onboardingComplete);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inTabs = segments[0] === '(tabs)';
    const inOnboarding = segments[0] === '(onboarding)';

    if (onboardingComplete && !inTabs) {
      router.replace('/(tabs)');
    } else if (!onboardingComplete && !inOnboarding) {
      router.replace('/(onboarding)/welcome');
    }
  }, [onboardingComplete]);

  return (
    <>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(onboarding)" options={{ animation: 'fade' }} />
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
      </Stack>
    </>
  );
}