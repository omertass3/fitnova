import { useColorScheme } from 'react-native';

import { Colors, type ThemeColor } from '@/constants/theme';

export function useThemeColor(colorName: ThemeColor): string {
  const scheme = useColorScheme() ?? 'dark';
  return Colors[scheme][colorName];
}

export function useColors() {
  const scheme = useColorScheme() ?? 'dark';
  return Colors[scheme];
}