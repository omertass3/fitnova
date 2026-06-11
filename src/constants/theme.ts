import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1A1A2E',
    textSecondary: '#6B7280',
    background: '#F8F9FA',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#E8F5E9',
    card: '#FFFFFF',
    border: '#E5E7EB',
    primary: '#4F46E5',
    primaryLight: '#818CF8',
    primaryDark: '#3730A3',
    accent: '#10B981',
    accentLight: '#34D399',
    warning: '#F59E0B',
    danger: '#EF4444',
    xp: '#FBBF24',
    streak: '#F97316',
    level: '#8B5CF6',
  },
  dark: {
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
    background: '#0F0F23',
    backgroundElement: '#1A1A2E',
    backgroundSelected: '#16213E',
    card: '#1A1A2E',
    border: '#374151',
    primary: '#818CF8',
    primaryLight: '#A5B4FC',
    primaryDark: '#6366F1',
    accent: '#34D399',
    accentLight: '#6EE7B7',
    warning: '#FBBF24',
    danger: '#F87171',
    xp: '#FBBF24',
    streak: '#FB923C',
    level: '#A78BFA',
  },
} as const;

export type ThemeColor = keyof (typeof Colors)['light'];

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;