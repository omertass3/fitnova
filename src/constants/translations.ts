export type Language = 'tr' | 'en' | 'fr' | 'de';

const translations = {
  // Common
  continue: { tr: 'Devam', en: 'Continue', fr: 'Continuer', de: 'Weiter' },
  letsGo: { tr: 'Hadi Başla!', en: "Let's Go!", fr: 'C\'est parti !', de: 'Los geht\'s!' },
  buildingPlan: { tr: 'Planın hazırlanıyor...', en: 'Building your plan...', fr: 'Préparation de votre plan...', de: 'Dein Plan wird erstellt...' },
  reset: { tr: 'Sıfırla', en: 'Reset', fr: 'Réinitialiser', de: 'Zurücksetzen' },
  cancel: { tr: 'İptal', en: 'Cancel', fr: 'Annuler', de: 'Abbrechen' },
  add: { tr: 'Ekle', en: 'Add', fr: 'Ajouter', de: 'Hinzufügen' },

  // Welcome
  welcomeTitle: { tr: 'FITNOVA', en: 'FITNOVA', fr: 'FITNOVA', de: 'FITNOVA' },
  welcomeSubtitle: {
    tr: 'Kişisel fitness yolculuğun\nburada başlıyor',
    en: 'Your personal fitness journey\nstarts here',
    fr: 'Votre parcours fitness\ncommence ici',
    de: 'Deine persönliche Fitness-Reise\nbeginnt hier',
  },
  getStarted: { tr: 'Başla', en: 'Get Started', fr: 'Commencer', de: 'Starten' },
  feature1: { tr: 'Kişisel antrenman planları', en: 'Personalized workout plans', fr: 'Plans d\'entraînement personnalisés', de: 'Personalisierte Trainingspläne' },
  feature2: { tr: 'Akıllı kalori takibi', en: 'Smart calorie tracking', fr: 'Suivi intelligent des calories', de: 'Intelligentes Kalorien-Tracking' },
  feature3: { tr: 'XP ve seviye sistemi ile oyunlaştırılmış deneyim', en: 'Gamified experience with XP & levels', fr: 'Expérience gamifiée avec XP et niveaux', de: 'Spielerisches Erlebnis mit XP & Leveln' },
  feature4: { tr: 'Gelişimini takip et', en: 'Track your progress', fr: 'Suivez vos progrès', de: 'Verfolge deinen Fortschritt' },

  // Onboarding Steps
  step1of4: { tr: 'Adım 1 / 4', en: 'Step 1 / 4', fr: 'Étape 1 / 4', de: 'Schritt 1 / 4' },
  step2of4: { tr: 'Adım 2 / 4', en: 'Step 2 / 4', fr: 'Étape 2 / 4', de: 'Schritt 2 / 4' },
  step3of4: { tr: 'Adım 3 / 4', en: 'Step 3 / 4', fr: 'Étape 3 / 4', de: 'Schritt 3 / 4' },
  step4of4: { tr: 'Adım 4 / 4', en: 'Step 4 / 4', fr: 'Étape 4 / 4', de: 'Schritt 4 / 4' },

  // Body Type
  bodyTypeTitle: { tr: 'Vücut tipin nedir?', en: "What's your body type?", fr: 'Quel est votre type de corps ?', de: 'Was ist dein Körpertyp?' },
  bodyTypeSubtitle: {
    tr: 'Sana uygun planı oluşturmamıza yardımcı olur',
    en: 'This helps us create the right plan for you',
    fr: 'Cela nous aide à créer le bon plan pour vous',
    de: 'Das hilft uns, den richtigen Plan für dich zu erstellen',
  },
  skinny: { tr: 'Zayıf', en: 'Skinny', fr: 'Mince', de: 'Schlank' },
  skinnyDesc: { tr: 'İnce yapı, hızlı metabolizma', en: 'Lean build, fast metabolism', fr: 'Silhouette fine, métabolisme rapide', de: 'Schlanker Körperbau, schneller Stoffwechsel' },
  athletic: { tr: 'Atletik', en: 'Athletic', fr: 'Athlétique', de: 'Athletisch' },
  athleticDesc: { tr: 'Fit, orta yapı', en: 'Toned, moderate build', fr: 'Tonique, corpulence moyenne', de: 'Trainiert, mittlerer Körperbau' },
  muscular: { tr: 'Kaslı', en: 'Muscular', fr: 'Musclé', de: 'Muskulös' },
  muscularDesc: { tr: 'Güçlü, kaslı yapı', en: 'Strong, well-built', fr: 'Fort, bien bâti', de: 'Stark, kräftig gebaut' },
  overweight: { tr: 'Fazla Kilolu', en: 'Overweight', fr: 'En surpoids', de: 'Übergewichtig' },
  overweightDesc: { tr: 'Yüksek yağ oranı', en: 'Higher body fat percentage', fr: 'Pourcentage de graisse élevé', de: 'Höherer Körperfettanteil' },

  // Details
  aboutYou: { tr: 'Hakkında', en: 'About You', fr: 'À propos de vous', de: 'Über dich' },
  gender: { tr: 'Cinsiyet', en: 'Gender', fr: 'Genre', de: 'Geschlecht' },
  male: { tr: 'Erkek', en: 'Male', fr: 'Homme', de: 'Männlich' },
  female: { tr: 'Kadın', en: 'Female', fr: 'Femme', de: 'Weiblich' },
  age: { tr: 'Yaş', en: 'Age', fr: 'Âge', de: 'Alter' },
  years: { tr: 'yaş', en: 'years', fr: 'ans', de: 'Jahre' },
  height: { tr: 'Boy', en: 'Height', fr: 'Taille', de: 'Größe' },
  weight: { tr: 'Kilo', en: 'Weight', fr: 'Poids', de: 'Gewicht' },
  bodyFat: { tr: 'Yağ Oranı %', en: 'Body Fat %', fr: 'Masse grasse %', de: 'Körperfett %' },
  activityLevel: { tr: 'Aktivite Seviyesi', en: 'Activity Level', fr: 'Niveau d\'activité', de: 'Aktivitätslevel' },
  sedentary: { tr: 'Hareketsiz', en: 'Sedentary', fr: 'Sédentaire', de: 'Sitzend' },
  sedentaryDesc: { tr: 'Çok az veya hiç egzersiz yok', en: 'Little to no exercise', fr: 'Peu ou pas d\'exercice', de: 'Wenig bis kein Sport' },
  light: { tr: 'Hafif', en: 'Light', fr: 'Léger', de: 'Leicht' },
  lightDesc: { tr: 'Haftada 1-3 gün', en: '1-3 days/week', fr: '1-3 jours/semaine', de: '1-3 Tage/Woche' },
  moderate: { tr: 'Orta', en: 'Moderate', fr: 'Modéré', de: 'Mittel' },
  moderateDesc: { tr: 'Haftada 3-5 gün', en: '3-5 days/week', fr: '3-5 jours/semaine', de: '3-5 Tage/Woche' },
  active: { tr: 'Aktif', en: 'Active', fr: 'Actif', de: 'Aktiv' },
  activeDesc: { tr: 'Haftada 6-7 gün', en: '6-7 days/week', fr: '6-7 jours/semaine', de: '6-7 Tage/Woche' },
  veryActive: { tr: 'Çok Aktif', en: 'Very Active', fr: 'Très actif', de: 'Sehr aktiv' },
  veryActiveDesc: { tr: 'Yoğun günlük antrenman', en: 'Intense daily', fr: 'Entraînement intensif quotidien', de: 'Intensives tägliches Training' },

  // Goal
  goalTitle: { tr: 'Hedefin ne?', en: "What's your goal?", fr: 'Quel est votre objectif ?', de: 'Was ist dein Ziel?' },
  goalSubtitle: { tr: 'Sana mükemmel planı oluşturacağız', en: "We'll build the perfect plan for you", fr: 'Nous créerons le plan parfait pour vous', de: 'Wir erstellen den perfekten Plan für dich' },
  loseWeight: { tr: 'Kilo Ver', en: 'Lose Weight', fr: 'Perdre du poids', de: 'Abnehmen' },
  loseWeightDesc: { tr: 'Yağ yak ve incel', en: 'Burn fat and get lean', fr: 'Brûler les graisses et s\'affiner', de: 'Fett verbrennen und definieren' },
  buildMuscle: { tr: 'Kas Kazan', en: 'Build Muscle', fr: 'Gagner du muscle', de: 'Muskeln aufbauen' },
  buildMuscleDesc: { tr: 'Güçlen ve büyüt', en: 'Get stronger and bigger', fr: 'Devenir plus fort et plus musclé', de: 'Stärker und muskulöser werden' },
  stayFit: { tr: 'Formda Kal', en: 'Stay Fit', fr: 'Rester en forme', de: 'Fit bleiben' },
  stayFitDesc: { tr: 'Formu koru ve geliştir', en: 'Maintain and improve fitness', fr: 'Maintenir et améliorer la forme', de: 'Fitness halten und verbessern' },

  // Target Weight
  targetWeightTitle: { tr: 'Hedef Kilon', en: 'Your Target Weight', fr: 'Votre poids cible', de: 'Dein Zielgewicht' },
  targetWeightSubtitle: { tr: 'Ulaşmak istediğin kiloyu belirle', en: 'Set the weight you want to reach', fr: 'Définissez le poids que vous souhaitez atteindre', de: 'Lege das Gewicht fest, das du erreichen möchtest' },
  suggestedWeight: { tr: 'Önerilen', en: 'Suggested', fr: 'Suggéré', de: 'Empfohlen' },
  currentWeightLabel: { tr: 'Mevcut Kilo', en: 'Current Weight', fr: 'Poids actuel', de: 'Aktuelles Gewicht' },
  targetWeightLabel: { tr: 'Hedef Kilo', en: 'Target Weight', fr: 'Poids cible', de: 'Zielgewicht' },

  // Cycle
  cycleLabel: { tr: 'Döngü', en: 'Cycle', fr: 'Cycle', de: 'Zyklus' },

  // Home
  welcomeBack: { tr: 'Tekrar hoş geldin', en: 'Welcome back', fr: 'Bon retour', de: 'Willkommen zurück' },
  athlete: { tr: 'Sporcu', en: 'Athlete', fr: 'Athlète', de: 'Sportler' },
  dailyChallenges: { tr: 'Günlük Görevler', en: 'Daily Challenges', fr: 'Défis quotidiens', de: 'Tägliche Aufgaben' },
  yourProgram: { tr: 'Programın', en: 'Your Program', fr: 'Votre programme', de: 'Dein Programm' },
  nutritionPlan: { tr: 'Beslenme Planı', en: 'Nutrition Plan', fr: 'Plan nutritionnel', de: 'Ernährungsplan' },
  streak: { tr: 'Seri', en: 'Streak', fr: 'Série', de: 'Serie' },
  workouts: { tr: 'Antrenman', en: 'Workouts', fr: 'Entraînements', de: 'Trainings' },
  calories: { tr: 'Kalori', en: 'Calories', fr: 'Calories', de: 'Kalorien' },
  protein: { tr: 'Protein', en: 'Protein', fr: 'Protéines', de: 'Protein' },
  carbs: { tr: 'Karbonhidrat', en: 'Carbs', fr: 'Glucides', de: 'Kohlenhydrate' },
  fat: { tr: 'Yağ', en: 'Fat', fr: 'Lipides', de: 'Fett' },
  strategy: { tr: 'Strateji', en: 'Strategy', fr: 'Stratégie', de: 'Strategie' },
  daysWeek: { tr: 'gün/hafta', en: 'days/week', fr: 'jours/semaine', de: 'Tage/Woche' },
  level: { tr: 'seviye', en: 'level', fr: 'niveau', de: 'Level' },

  // Workout
  restDay: { tr: 'Dinlenme Günü', en: 'Rest Day', fr: 'Jour de repos', de: 'Ruhetag' },
  restDayMessage: {
    tr: 'Toparlanma sürecin bir parçası.\nYarın daha güçlü gel!',
    en: "Recovery is part of the process.\nCome back stronger tomorrow!",
    fr: 'La récupération fait partie du processus.\nRevenez plus fort demain !',
    de: 'Erholung gehört zum Prozess.\nKomm morgen stärker zurück!',
  },
  workoutProgress: { tr: 'Antrenman İlerlemesi', en: 'Workout Progress', fr: 'Progression d\'entraînement', de: 'Trainingsfortschritt' },
  workoutComplete: { tr: 'Antrenman Tamamlandı!', en: 'Workout Complete!', fr: 'Entraînement terminé !', de: 'Training abgeschlossen!' },
  bonusEarned: { tr: '+100 XP bonus kazanıldı', en: '+100 XP bonus earned', fr: '+100 XP bonus gagné', de: '+100 XP Bonus verdient' },
  exercises: { tr: 'egzersiz', en: 'exercises', fr: 'exercices', de: 'Übungen' },
  xpPossible: { tr: 'XP kazanılabilir', en: 'XP possible', fr: 'XP possibles', de: 'XP möglich' },
  set: { tr: 'set', en: 'set', fr: 'série', de: 'Satz' },
  rest: { tr: 'dinlenme', en: 'rest', fr: 'repos', de: 'Pause' },

  // Progress
  progress: { tr: 'Gelişim', en: 'Progress', fr: 'Progrès', de: 'Fortschritt' },
  goalProgress: { tr: 'Hedef İlerlemesi', en: 'Goal Progress', fr: 'Progression de l\'objectif', de: 'Zielfortschritt' },
  start: { tr: 'Başlangıç', en: 'Start', fr: 'Début', de: 'Start' },
  target: { tr: 'Hedef', en: 'Target', fr: 'Objectif', de: 'Ziel' },
  bestStreak: { tr: 'En İyi Seri', en: 'Best Streak', fr: 'Meilleure série', de: 'Beste Serie' },
  totalXP: { tr: 'Toplam XP', en: 'Total XP', fr: 'XP total', de: 'Gesamt-XP' },
  weightTrend: { tr: 'Kilo Takibi', en: 'Weight Trend', fr: 'Suivi du poids', de: 'Gewichtsverlauf' },
  logWeight: { tr: 'Kilo Kaydet', en: 'Log Weight', fr: 'Enregistrer le poids', de: 'Gewicht eintragen' },
  bodyInfo: { tr: 'Vücut Bilgileri', en: 'Body Info', fr: 'Infos corporelles', de: 'Körperdaten' },
  addMoreEntries: {
    tr: 'Grafiğinizi görmek için daha fazla kilo girişi yapın',
    en: 'Add more weight entries to see your chart',
    fr: 'Ajoutez plus d\'entrées de poids pour voir votre graphique',
    de: 'Trage mehr Gewichtseinträge ein, um dein Diagramm zu sehen',
  },

  // Profile
  profile: { tr: 'Profil', en: 'Profile', fr: 'Profil', de: 'Profil' },
  personalInfo: { tr: 'Kişisel Bilgiler', en: 'Personal Info', fr: 'Infos personnelles', de: 'Persönliche Daten' },
  program: { tr: 'Program', en: 'Program', fr: 'Programme', de: 'Programm' },
  type: { tr: 'Tür', en: 'Type', fr: 'Type', de: 'Typ' },
  resetAllData: { tr: 'Tüm Verileri Sıfırla', en: 'Reset All Data', fr: 'Réinitialiser toutes les données', de: 'Alle Daten zurücksetzen' },
  resetConfirmTitle: { tr: 'İlerlemeyi Sıfırla', en: 'Reset Progress', fr: 'Réinitialiser la progression', de: 'Fortschritt zurücksetzen' },
  resetConfirmMessage: {
    tr: 'Tüm verileriniz silinecek ve başlangıç ekranına döneceksiniz. Emin misiniz?',
    en: 'This will delete all your data and restart onboarding. Are you sure?',
    fr: 'Toutes vos données seront supprimées et vous recommencerez l\'intégration. Êtes-vous sûr ?',
    de: 'Alle Daten werden gelöscht und die Einrichtung beginnt von vorne. Bist du sicher?',
  },
  bmr: { tr: 'BMR', en: 'BMR', fr: 'MB', de: 'GU' },
  tdee: { tr: 'TDEE', en: 'TDEE', fr: 'DETE', de: 'TDEE' },

  // Level Titles
  levelBeginner: { tr: 'Acemi', en: 'Beginner', fr: 'Débutant', de: 'Anfänger' },
  levelRegular: { tr: 'Düzenli', en: 'Regular', fr: 'Régulier', de: 'Regelmäßig' },
  levelAthlete: { tr: 'Atlet', en: 'Athlete', fr: 'Athlète', de: 'Athlet' },
  levelWarrior: { tr: 'Savaşçı', en: 'Warrior', fr: 'Guerrier', de: 'Krieger' },
  levelChampion: { tr: 'Şampiyon', en: 'Champion', fr: 'Champion', de: 'Champion' },
  levelLegend: { tr: 'Efsane', en: 'Legend', fr: 'Légende', de: 'Legende' },

  // Tabs
  tabHome: { tr: 'Ana Sayfa', en: 'Home', fr: 'Accueil', de: 'Start' },
  tabWorkout: { tr: 'Antrenman', en: 'Workout', fr: 'Entraînement', de: 'Training' },
  tabProgress: { tr: 'Gelişim', en: 'Progress', fr: 'Progrès', de: 'Fortschritt' },
  tabProfile: { tr: 'Profil', en: 'Profile', fr: 'Profil', de: 'Profil' },

  // Days
  monday: { tr: 'Pazartesi', en: 'Monday', fr: 'Lundi', de: 'Montag' },
  tuesday: { tr: 'Salı', en: 'Tuesday', fr: 'Mardi', de: 'Dienstag' },
  wednesday: { tr: 'Çarşamba', en: 'Wednesday', fr: 'Mercredi', de: 'Mittwoch' },
  thursday: { tr: 'Perşembe', en: 'Thursday', fr: 'Jeudi', de: 'Donnerstag' },
  friday: { tr: 'Cuma', en: 'Friday', fr: 'Vendredi', de: 'Freitag' },
  saturday: { tr: 'Cumartesi', en: 'Saturday', fr: 'Samedi', de: 'Samstag' },
  sunday: { tr: 'Pazar', en: 'Sunday', fr: 'Dimanche', de: 'Sonntag' },

  // Program types
  fullBody: { tr: 'Tam Vücut', en: 'Full Body', fr: 'Corps entier', de: 'Ganzkörper' },
  upperBody: { tr: 'Üst Vücut', en: 'Upper Body', fr: 'Haut du corps', de: 'Oberkörper' },
  lowerBody: { tr: 'Alt Vücut', en: 'Lower Body', fr: 'Bas du corps', de: 'Unterkörper' },
  push: { tr: 'İtme', en: 'Push', fr: 'Poussée', de: 'Drücken' },
  pull: { tr: 'Çekme', en: 'Pull', fr: 'Tirage', de: 'Ziehen' },
  legs: { tr: 'Bacak', en: 'Legs', fr: 'Jambes', de: 'Beine' },

  // Road Map
  roadMap: { tr: 'Yol Haritası', en: 'Road Map', fr: 'Feuille de route', de: 'Trainingsplan' },
  tabRoadMap: { tr: 'Yol Haritası', en: 'Road Map', fr: 'Feuille de route', de: 'Trainingsplan' },

  // Disclaimer & Citations
  nutritionDisclaimer: {
    tr: 'Beslenme değerleri genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz. Herhangi bir diyet veya egzersiz programına başlamadan önce doktorunuza danışın.',
    en: 'Nutrition values are for general informational purposes only and do not constitute medical advice. Consult your physician before starting any diet or exercise program.',
    fr: 'Les valeurs nutritionnelles sont fournies à titre informatif uniquement et ne constituent pas un avis médical. Consultez votre médecin avant de commencer tout régime ou programme d\'exercice.',
    de: 'Die Nährwerte dienen nur der allgemeinen Information und stellen keine medizinische Beratung dar. Konsultieren Sie Ihren Arzt, bevor Sie mit einer Diät oder einem Trainingsprogramm beginnen.',
  },
  nutritionSources: {
    tr: 'Kaynaklar: BMR hesaplaması Mifflin-St Jeor denklemine dayanmaktadır (Mifflin et al., 1990). Makro besin önerileri ISSN pozisyon bildirgesine dayanmaktadır (Jäger et al., 2017).',
    en: 'Sources: BMR calculation is based on the Mifflin-St Jeor equation (Mifflin et al., 1990, The American Journal of Clinical Nutrition). Macronutrient recommendations are based on the ISSN position stand (Jäger et al., 2017, Journal of the International Society of Sports Nutrition).',
    fr: 'Sources : Le calcul du MB est basé sur l\'équation de Mifflin-St Jeor (Mifflin et al., 1990, The American Journal of Clinical Nutrition). Les recommandations en macronutriments sont basées sur la position de l\'ISSN (Jäger et al., 2017, Journal of the International Society of Sports Nutrition).',
    de: 'Quellen: Die GU-Berechnung basiert auf der Mifflin-St-Jeor-Gleichung (Mifflin et al., 1990, The American Journal of Clinical Nutrition). Die Makronährstoffempfehlungen basieren auf dem ISSN-Positionspapier (Jäger et al., 2017, Journal of the International Society of Sports Nutrition).',
  },

  // Language
  language: { tr: 'Dil', en: 'Language', fr: 'Langue', de: 'Sprache' },
  turkish: { tr: 'Türkçe', en: 'Turkish', fr: 'Turc', de: 'Türkisch' },
  english: { tr: 'İngilizce', en: 'English', fr: 'Anglais', de: 'Englisch' },
  french: { tr: 'Fransızca', en: 'French', fr: 'Français', de: 'Französisch' },
  german: { tr: 'Almanca', en: 'German', fr: 'Allemand', de: 'Deutsch' },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Language): string {
  return translations[key]?.[lang] ?? key;
}

export const DAY_NAMES: Record<string, Record<Language, string>> = {
  Sunday: { tr: 'Pazar', en: 'Sunday', fr: 'Dimanche', de: 'Sonntag' },
  Monday: { tr: 'Pazartesi', en: 'Monday', fr: 'Lundi', de: 'Montag' },
  Tuesday: { tr: 'Salı', en: 'Tuesday', fr: 'Mardi', de: 'Dienstag' },
  Wednesday: { tr: 'Çarşamba', en: 'Wednesday', fr: 'Mercredi', de: 'Mittwoch' },
  Thursday: { tr: 'Perşembe', en: 'Thursday', fr: 'Jeudi', de: 'Donnerstag' },
  Friday: { tr: 'Cuma', en: 'Friday', fr: 'Vendredi', de: 'Freitag' },
  Saturday: { tr: 'Cumartesi', en: 'Saturday', fr: 'Samedi', de: 'Samstag' },
};

export const DAY_SHORT: Record<string, Record<Language, string>> = {
  Monday: { tr: 'Pzt', en: 'Mon', fr: 'Lun', de: 'Mo' },
  Tuesday: { tr: 'Sal', en: 'Tue', fr: 'Mar', de: 'Di' },
  Wednesday: { tr: 'Çar', en: 'Wed', fr: 'Mer', de: 'Mi' },
  Thursday: { tr: 'Per', en: 'Thu', fr: 'Jeu', de: 'Do' },
  Friday: { tr: 'Cum', en: 'Fri', fr: 'Ven', de: 'Fr' },
  Saturday: { tr: 'Cmt', en: 'Sat', fr: 'Sam', de: 'Sa' },
  Sunday: { tr: 'Paz', en: 'Sun', fr: 'Dim', de: 'So' },
};

export default translations;