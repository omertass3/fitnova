import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useState, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { useColors } from '@/hooks/useThemeColor';
import { BorderRadius, Spacing } from '@/constants/theme';
import { EXERCISE_DETAILS } from '@/constants/exerciseDetails';

// ================================================================
// TWO-IMAGE CROSSFADE: Smoothly fades between start & end position
// This shows the actual movement of the exercise with real photos
// ================================================================

function ImageCrossfade({
  startImage,
  endImage,
  duration = 1500,
}: {
  startImage: any;
  endImage: any;
  duration?: number;
}) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0, { duration, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      false,
    );
  }, []);

  const startStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const endStyle = useAnimatedStyle(() => ({
    opacity: 1 - opacity.value,
  }));

  return (
    <View style={crossfadeStyles.container}>
      {/* End image (bottom layer) */}
      <Animated.View style={[crossfadeStyles.imageWrap, endStyle]}>
        <Animated.Image source={endImage} style={crossfadeStyles.image} resizeMode="contain" />
      </Animated.View>
      {/* Start image (top layer, fades in/out) */}
      <Animated.View style={[crossfadeStyles.imageWrap, crossfadeStyles.overlay, startStyle]}>
        <Animated.Image source={startImage} style={crossfadeStyles.image} resizeMode="contain" />
      </Animated.View>
    </View>
  );
}

// ================================================================
// VIDEO PLAYER (for when user provides video URLs)
// ================================================================

function VideoPlayer({
  videoUrl,
  language,
}: {
  videoUrl: string;
  language: 'tr' | 'en' | 'fr' | 'de';
}) {
  const colors = useColors();
  const [playing, setPlaying] = useState(false);

  const player = useVideoPlayer(videoUrl, (p) => {
    p.loop = true;
  });

  if (playing) {
    return (
      <View style={videoStyles.container}>
        <VideoView player={player} style={videoStyles.video} contentFit="contain" nativeControls />
        <Pressable
          onPress={() => { setPlaying(false); player.pause(); }}
          style={[videoStyles.closeBtn, { backgroundColor: colors.background }]}
        >
          <Text style={[videoStyles.closeTxt, { color: colors.text }]}>X</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <Pressable
      onPress={() => { setPlaying(true); player.play(); }}
      style={[videoStyles.playBtn, { backgroundColor: colors.primary }]}
    >
      <Text style={videoStyles.playIcon}>{'\u25B6'}</Text>
      <Text style={videoStyles.playTxt}>
        {{ tr: 'Videoyu Izle', en: 'Watch Video', fr: 'Voir la vidéo', de: 'Video ansehen' }[language]}
      </Text>
    </Pressable>
  );
}

// ================================================================
// MAIN COMPONENT
// ================================================================

interface Props {
  exerciseId: string;
  language: 'tr' | 'en' | 'fr' | 'de';
}

export function ExerciseIllustration({ exerciseId, language }: Props) {
  const colors = useColors();
  const detail = EXERCISE_DETAILS[exerciseId];
  const media = detail?.media;

  const hasImages = media?.startImage != null && media?.endImage != null;
  const hasVideo = !!media?.videoUrl;

  if (!hasImages && !hasVideo) return null;

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundElement, borderColor: colors.border }]}>
      {/* Image crossfade animation */}
      {hasImages && (
        <ImageCrossfade
          startImage={media!.startImage}
          endImage={media!.endImage}
        />
      )}

      {/* Video button (below images or standalone) */}
      {hasVideo && (
        <VideoPlayer videoUrl={media!.videoUrl!} language={language} />
      )}

      {/* Labels row */}
      {hasImages && (
        <View style={[styles.labelRow, { borderTopColor: colors.border }]}>
          <View style={styles.labelItem}>
            <View style={[styles.labelDot, { backgroundColor: colors.primary }]} />
            <Text style={[styles.labelText, { color: colors.textSecondary }]}>
              {{ tr: 'Baslangic', en: 'Start', fr: 'Début', de: 'Start' }[language]}
            </Text>
          </View>
          <Text style={[styles.labelArrow, { color: colors.textSecondary }]}>{'\u2194\uFE0F'}</Text>
          <View style={styles.labelItem}>
            <View style={[styles.labelDot, { backgroundColor: colors.accent }]} />
            <Text style={[styles.labelText, { color: colors.textSecondary }]}>
              {{ tr: 'Bitis', en: 'End', fr: 'Fin', de: 'Ende' }[language]}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

// ================================================================
// STYLES
// ================================================================

const crossfadeStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 260,
    position: 'relative',
    backgroundColor: '#f8f8f8',
  },
  imageWrap: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const videoStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 260,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeTxt: { fontSize: 14, fontWeight: '700' },
  playBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    marginHorizontal: Spacing.four,
    marginVertical: Spacing.two,
    borderRadius: BorderRadius.lg,
  },
  playIcon: { color: '#fff', fontSize: 14 },
  playTxt: { color: '#fff', fontSize: 14, fontWeight: '600' },
});

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.two,
    borderTopWidth: 0.5,
  },
  labelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  labelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '600',
  },
  labelArrow: {
    fontSize: 14,
  },
});