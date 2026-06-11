import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { useEffect, useRef } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { useColors } from '@/hooks/useThemeColor';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { Spacing } from '@/constants/theme';
import { getProgramPhase } from '@/engine/fitnessEngine';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const NODE_SIZE = 54;
const MS_SIZE = 66;
const PADDING_H = 24;

const XPOS = [0.25, 0.5, 0.75, 0.5];

interface WeekNode {
  week: number;
  isMilestone: boolean;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  programChange?: string;
}

function buildWeekNodes(language: 'tr' | 'en' | 'fr' | 'de', currentWeek: number): WeekNode[] {
  const nodes: WeekNode[] = [];
  const cycle = Math.floor((currentWeek - 1) / 12);
  const startWeek = cycle * 12 + 1;
  const endWeek = startWeek + 11;

  const L = (tr: string, en: string, fr: string, de: string) => ({ tr, en, fr, de }[language]);

  const milestones: Record<number, { icon: string; label: string; change?: string }> = {
    1:  { icon: 'leaf-outline', label: L('Başlangıç', 'Start', 'Début', 'Start')!, change: L('Tam Vücut 3 gün/hafta', 'Full Body 3 days/week', 'Corps entier 3 jours/semaine', 'Ganzkörper 3 Tage/Woche') },
    3:  { icon: 'flame-outline', label: L('Isınma Bitti', 'Warmed Up', 'Échauffement terminé', 'Aufgewärmt')! },
    5:  { icon: 'star-outline', label: L('Yeni Seviye!', 'New Level!', 'Nouveau niveau !', 'Neues Level!')!, change: L('Üst/Alt Vücut 4 gün/hafta', 'Upper/Lower 4 days/week', 'Haut/Bas du corps 4 jours/semaine', 'Ober-/Unterkörper 4 Tage/Woche') },
    7:  { icon: 'barbell-outline', label: L('Güçlüyüm', 'Getting Strong', 'Je deviens fort', 'Werde stärker')! },
    9:  { icon: 'medal-outline', label: L('Atlet', 'Athlete', 'Athlète', 'Athlet')!, change: L('İtme/Çekme/Bacak 6 gün/hafta', 'Push/Pull/Legs 6 days/week', 'Poussée/Tirage/Jambes 6 jours/semaine', 'Drücken/Ziehen/Beine 6 Tage/Woche') },
    12: { icon: 'trophy-outline', label: L('Şampiyon', 'Champion', 'Champion', 'Champion')! },
  };

  for (let w = startWeek; w <= endWeek; w++) {
    const cycleWeek = ((w - 1) % 12) + 1;
    const ms = milestones[cycleWeek];
    if (ms) {
      nodes.push({
        week: w,
        isMilestone: true,
        label: ms.label,
        icon: ms.icon,
        programChange: ms.change,
      });
    } else {
      nodes.push({
        week: w,
        isMilestone: false,
        label: `${L('Hafta', 'Week', 'Semaine', 'Woche')} ${w}`,
        icon: 'fitness-outline',
      });
    }
  }

  return nodes;
}

function Pulsing({ children, active }: { children: React.ReactNode; active: boolean }) {
  const scale = useSharedValue(1);
  useEffect(() => {
    if (active) {
      scale.value = withRepeat(
        withSequence(withTiming(1.15, { duration: 700 }), withTiming(1, { duration: 700 })),
        -1, true,
      );
    } else {
      scale.value = 1;
    }
  }, [active]);
  const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  return <Animated.View style={style}>{children}</Animated.View>;
}

export function RoadMap() {
  const colors = useColors();
  const { language } = useTranslation();
  const currentWeek = useStore((s) => s.currentWeek);
  const scrollRef = useRef<ScrollView>(null);

  const nodes = buildWeekNodes(language, currentWeek);

  useEffect(() => {
    if (currentWeek > 2 && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ y: Math.max(0, (currentWeek - 1) * 100 - 200), animated: true });
      }, 400);
    }
  }, [currentWeek]);

  return (
    <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>
      {nodes.map((node, i) => {
        const isMs = node.isMilestone;
        const size = isMs ? MS_SIZE : NODE_SIZE;
        const xPct = XPOS[i % 4];
        const nodeX = PADDING_H + (SCREEN_WIDTH - PADDING_H * 2) * xPct;
        const prevXPct = i > 0 ? XPOS[(i - 1) % 4] : xPct;
        const prevX = PADDING_H + (SCREEN_WIDTH - PADDING_H * 2) * prevXPct;

        const completed = node.week < currentWeek;
        const isCurrent = node.week === currentWeek;
        const locked = node.week > currentWeek;
        const labelOnLeft = xPct > 0.55;

        // Program phase info
        const phase = getProgramPhase(node.week);

        return (
          <Animated.View key={node.week} entering={FadeInDown.duration(300).delay(Math.min(i * 50, 500))}>
            {/* Connector */}
            {i > 0 && (
              <View style={c.wrap}>
                <View style={[c.v1, { left: prevX - 1.5, backgroundColor: completed || isCurrent ? colors.primary : colors.border + '40' }]} />
                <View style={[c.h, {
                  left: Math.min(prevX, nodeX) - 1,
                  width: Math.abs(nodeX - prevX) + 3,
                  backgroundColor: completed || isCurrent ? colors.primary : colors.border + '40',
                }]} />
                <View style={[c.v2, { left: nodeX - 1.5, backgroundColor: completed || isCurrent ? colors.primary : colors.border + '40' }]} />
              </View>
            )}

            {/* Node row */}
            <View style={s.row}>
              {/* Label */}
              {labelOnLeft ? (
                <View style={[s.lbl, { right: SCREEN_WIDTH - nodeX + size / 2 + 12, alignItems: 'flex-end' }]}>
                  <Text numberOfLines={1} style={[isMs ? s.msText : s.wkText, {
                    color: isCurrent ? colors.primary : completed ? colors.accent : colors.textSecondary + '60',
                  }]}>{node.label}</Text>
                  {isMs && node.programChange && (
                    <View style={[s.badge, { backgroundColor: (completed || isCurrent ? colors.accent : colors.primary) + '15' }]}>
                      <Text style={[s.badgeTxt, { color: completed || isCurrent ? colors.accent : colors.primary }]}>{node.programChange}</Text>
                    </View>
                  )}
                </View>
              ) : null}

              {/* Circle */}
              <View style={{ position: 'absolute', left: nodeX - size / 2 }}>
                <Pulsing active={isCurrent}>
                  <View style={[
                    isMs ? s.msNode : s.wkNode,
                    {
                      backgroundColor: completed ? colors.accent : isCurrent ? colors.primary : colors.border + '20',
                      borderColor: completed ? colors.accent : isCurrent ? colors.primary : colors.border + '50',
                      shadowColor: isCurrent ? colors.primary : 'transparent',
                      shadowOpacity: isCurrent ? 0.5 : 0, shadowRadius: isCurrent ? 12 : 0,
                      shadowOffset: { width: 0, height: 0 }, elevation: isCurrent ? 8 : 0,
                    },
                  ]}>
                    {completed ? (
                      <Ionicons name="checkmark" size={isMs ? 28 : 22} color="#fff" />
                    ) : (
                      <Ionicons
                        name={locked ? 'lock-closed-outline' : node.icon}
                        size={isMs ? 26 : 20}
                        color={locked ? '#999' : '#fff'}
                        style={{ opacity: locked ? 0.3 : 1 }}
                      />
                    )}
                  </View>
                </Pulsing>
              </View>

              {/* Label right */}
              {!labelOnLeft ? (
                <View style={[s.lbl, { left: nodeX + size / 2 + 12, alignItems: 'flex-start' }]}>
                  <Text numberOfLines={1} style={[isMs ? s.msText : s.wkText, {
                    color: isCurrent ? colors.primary : completed ? colors.accent : colors.textSecondary + '60',
                  }]}>{node.label}</Text>
                  {isMs && node.programChange && (
                    <View style={[s.badge, { backgroundColor: (completed || isCurrent ? colors.accent : colors.primary) + '15' }]}>
                      <Text style={[s.badgeTxt, { color: completed || isCurrent ? colors.accent : colors.primary }]}>{node.programChange}</Text>
                    </View>
                  )}
                </View>
              ) : null}
            </View>
          </Animated.View>
        );
      })}

      <View style={{ height: 140 }} />
    </ScrollView>
  );
}

const c = StyleSheet.create({
  wrap: { height: 24, position: 'relative' },
  v1: { position: 'absolute', width: 3, height: 12, top: 0, borderRadius: 2 },
  h: { position: 'absolute', height: 3, top: 11, borderRadius: 2 },
  v2: { position: 'absolute', width: 3, height: 12, top: 11, borderRadius: 2 },
});

const s = StyleSheet.create({
  scroll: { paddingTop: Spacing.three },
  row: { height: MS_SIZE + 6, position: 'relative', justifyContent: 'center' },
  wkNode: {
    width: NODE_SIZE, height: NODE_SIZE, borderRadius: NODE_SIZE / 2,
    alignItems: 'center', justifyContent: 'center', borderWidth: 3,
  },
  msNode: {
    width: MS_SIZE, height: MS_SIZE, borderRadius: MS_SIZE / 2,
    alignItems: 'center', justifyContent: 'center', borderWidth: 4,
  },
  wkIcon: { fontSize: 20 },
  msIcon: { fontSize: 26 },
  check: { fontSize: 22, color: '#fff', fontWeight: '800' },
  checkMs: { fontSize: 28 },
  lbl: { position: 'absolute', gap: 2, maxWidth: 150 },
  wkText: { fontSize: 13, fontWeight: '600' },
  msText: { fontSize: 16, fontWeight: '800' },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, marginTop: 2 },
  badgeTxt: { fontSize: 10, fontWeight: '700' },
});