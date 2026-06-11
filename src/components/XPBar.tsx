import { View, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

import { useColors } from '@/hooks/useThemeColor';
import { BorderRadius, Spacing } from '@/constants/theme';

interface XPBarProps {
  current: number;
  max: number;
  height?: number;
  showGlow?: boolean;
}

export function XPBar({ current, max, height = 8, showGlow = false }: XPBarProps) {
  const colors = useColors();
  const progress = Math.min(current / max, 1);
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animatedWidth, {
      toValue: progress,
      useNativeDriver: false,
      tension: 50,
      friction: 8,
    }).start();
  }, [progress]);

  return (
    <View
      style={[
        styles.container,
        {
          height,
          backgroundColor: colors.border,
          borderRadius: height / 2,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: colors.xp,
            width: animatedWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
            ...(showGlow
              ? {
                  shadowColor: colors.xp,
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.6,
                  shadowRadius: 8,
                }
              : {}),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});