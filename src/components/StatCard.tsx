import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { BorderRadius, Spacing } from '@/constants/theme';

interface StatCardProps {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  value: string | number;
  color?: string;
  small?: boolean;
}

export function StatCard({ icon, label, value, color, small }: StatCardProps) {
  const colors = useColors();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        small && styles.small,
      ]}
    >
      <Ionicons name={icon} size={small ? 20 : 26} color={color ?? colors.primary} />
      <Text style={[styles.value, { color: color ?? colors.text }, small && styles.valueSmall]}>
        {value}
      </Text>
      <Text style={[styles.label, { color: colors.textSecondary }, small && styles.labelSmall]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.three,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    gap: Spacing.one,
  },
  small: {
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.two,
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
  },
  valueSmall: {
    fontSize: 18,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontSize: 10,
  },
});