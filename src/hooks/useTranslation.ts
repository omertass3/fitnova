import { useCallback } from 'react';

import { useStore } from '@/store/useStore';
import { t, type TranslationKey, type Language, DAY_NAMES, DAY_SHORT } from '@/constants/translations';

export function useTranslation() {
  const language = useStore((s) => s.language);

  const tr = useCallback(
    (key: TranslationKey) => t(key, language),
    [language]
  );

  const dayName = useCallback(
    (englishDay: string) => DAY_NAMES[englishDay]?.[language] ?? englishDay,
    [language]
  );

  const dayShort = useCallback(
    (englishDay: string) => DAY_SHORT[englishDay]?.[language] ?? englishDay.slice(0, 3),
    [language]
  );

  return { t: tr, language, dayName, dayShort };
}