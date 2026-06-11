import type { Language } from '@/constants/translations';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface ExerciseMedia {
  /** Start position image (local require or {uri}) */
  startImage?: any;
  /** End position image (local require or {uri}) */
  endImage?: any;
  /** Remote video URL (mp4, short demo clip) */
  videoUrl?: string;
}

export interface ExerciseDetail {
  steps: { tr: string; en: string; fr: string; de: string }[];
  tips: { tr: string; en: string; fr: string; de: string }[];
  mistakes: { tr: string; en: string; fr: string; de: string }[];
  difficulty: Difficulty;
  targetMuscles: { tr: string; en: string; fr: string; de: string }[];
  media?: ExerciseMedia;
}

// Pre-loaded exercise images (start + end positions)
const IMG = {
  push_up: [require('@/assets/ex_push_up_0.jpg'), require('@/assets/ex_push_up_1.jpg')],
  diamond_push_up: [require('@/assets/ex_diamond_push_up_0.jpg'), require('@/assets/ex_diamond_push_up_1.jpg')],
  dips: [require('@/assets/ex_dips_0.jpg'), require('@/assets/ex_dips_1.jpg')],
  pull_up: [require('@/assets/ex_pull_up_0.jpg'), require('@/assets/ex_pull_up_1.jpg')],
  chin_up: [require('@/assets/ex_chin_up_0.jpg'), require('@/assets/ex_chin_up_1.jpg')],
  superman: [require('@/assets/ex_superman_0.jpg'), require('@/assets/ex_superman_1.jpg')],
  squat: [require('@/assets/ex_squat_0.jpg'), require('@/assets/ex_squat_1.jpg')],
  jump_squat: [require('@/assets/ex_jump_squat_0.jpg'), require('@/assets/ex_jump_squat_1.jpg')],
  lunge: [require('@/assets/ex_lunge_0.jpg'), require('@/assets/ex_lunge_1.jpg')],
  bulgarian_split: [require('@/assets/ex_bulgarian_split_0.jpg'), require('@/assets/ex_bulgarian_split_1.jpg')],
  glute_bridge: [require('@/assets/ex_glute_bridge_0.jpg'), require('@/assets/ex_glute_bridge_1.jpg')],
  calf_raise: [require('@/assets/ex_calf_raise_0.jpg'), require('@/assets/ex_calf_raise_1.jpg')],
  plank: [require('@/assets/ex_plank_0.jpg'), require('@/assets/ex_plank_1.jpg')],
  crunch: [require('@/assets/ex_crunch_0.jpg'), require('@/assets/ex_crunch_1.jpg')],
  mountain_climber: [require('@/assets/ex_mountain_climber_0.jpg'), require('@/assets/ex_mountain_climber_1.jpg')],
  leg_raise: [require('@/assets/ex_leg_raise_0.jpg'), require('@/assets/ex_leg_raise_1.jpg')],
  russian_twist: [require('@/assets/ex_russian_twist_0.jpg'), require('@/assets/ex_russian_twist_1.jpg')],
  wide_push_up: [require('@/assets/ex_wide_push_up_0.jpg'), require('@/assets/ex_wide_push_up_1.jpg')],
  pike_push_up: [require('@/assets/ex_pike_push_up_0.jpg'), require('@/assets/ex_pike_push_up_1.jpg')],
  inverted_row: [require('@/assets/ex_inverted_row_0.jpg'), require('@/assets/ex_inverted_row_1.jpg')],
  wall_sit: [require('@/assets/ex_wall_sit_0.jpg'), require('@/assets/ex_wall_sit_1.jpg')],
  burpee: [require('@/assets/ex_burpee_0.jpg'), require('@/assets/ex_burpee_1.jpg')],
  high_knees: [require('@/assets/ex_high_knees_0.jpg'), require('@/assets/ex_high_knees_1.jpg')],
  jumping_jack: [require('@/assets/ex_jumping_jack_0.jpg'), require('@/assets/ex_jumping_jack_1.jpg')],
} as const;

export const EXERCISE_DETAILS: Record<string, ExerciseDetail> = {
  push_up: {
    difficulty: 'easy',
    media: { startImage: IMG.push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [
      { tr: 'Gogus', en: 'Chest', fr: 'Poitrine', de: 'Brust' },
      { tr: 'Triceps', en: 'Triceps', fr: 'Triceps', de: 'Trizeps' },
      { tr: 'On Omuz', en: 'Front Shoulders', fr: 'Épaules avant', de: 'Vordere Schultern' },
    ],
    steps: [
      { tr: 'Yere yuzustu uzanin, ellerinizi omuz genisliginde yere koyun', en: 'Get face down on the floor, place hands shoulder-width apart', fr: 'Allongez-vous face au sol, placez les mains à la largeur des épaules', de: 'Lege dich mit dem Gesicht nach unten auf den Boden, Hände schulterbreit aufstellen' },
      { tr: 'Ayak parmaklariniz ve elleriniz uzerinde vucudunuzu yukari kaldirin', en: 'Raise your body on your toes and hands', fr: 'Soulevez votre corps sur vos orteils et vos mains', de: 'Hebe deinen Körper auf Zehenspitzen und Händen an' },
      { tr: 'Vucudunuz basinizdan topuklariniza duz bir cizgi olmali', en: 'Your body should form a straight line from head to heels', fr: 'Votre corps doit former une ligne droite de la tête aux talons', de: 'Dein Körper sollte eine gerade Linie von Kopf bis Ferse bilden' },
      { tr: 'Dirseklerinizi bukerek gogsunuzu yere yaklastirin', en: 'Bend elbows to lower your chest toward the floor', fr: 'Pliez les coudes pour abaisser votre poitrine vers le sol', de: 'Beuge die Ellbogen, um die Brust zum Boden zu senken' },
      { tr: 'Gogsunuz neredeyse yere degdiginde kendinizi yukari itin', en: 'Push yourself back up when chest nearly touches the floor', fr: 'Poussez-vous vers le haut quand la poitrine touche presque le sol', de: 'Drücke dich wieder hoch, wenn die Brust fast den Boden berührt' },
    ],
    tips: [
      { tr: 'Core kaslarinizi siki tutun, beliniz dusmesin', en: 'Keep your core tight, don\'t let your back sag', fr: 'Keep your core tight, don\'t let your back sag', de: 'Halte die Körpermitte angespannt, lass den Rücken nicht durchhängen' },
      { tr: 'Nefes alin inerken, verin cikarken', en: 'Breathe in going down, breathe out pushing up', fr: 'Inspirez en descendant, expirez en poussant', de: 'Einatmen beim Absenken, ausatmen beim Hochdrücken' },
      { tr: 'Baslayanlar dizlerini yere koyarak yapabilir', en: 'Beginners can do knee push-ups', fr: 'Les débutants peuvent faire des pompes sur les genoux', de: 'Anfänger können Knie-Liegestütze machen' },
    ],
    mistakes: [
      { tr: 'Beli asagi dusurme', en: 'Letting your lower back sag', fr: 'Letting your lower back sag', de: 'Letting your lower back sag' },
      { tr: 'Dirsekleri cok yana acma', en: 'Flaring elbows too wide', fr: 'Écarter les coudes trop largement', de: 'Ellbogen zu weit abspreizen' },
      { tr: 'Tam inmeme, yarim hareket yapma', en: 'Not going down enough, doing half reps', fr: 'Ne pas descendre assez, faire des demi-répétitions', de: 'Nicht tief genug gehen, halbe Wiederholungen machen' },
    ],
  },
  diamond_push_up: {
    difficulty: 'medium',
    media: { startImage: IMG.diamond_push_up[0], endImage: IMG.diamond_push_up[1] },
    targetMuscles: [
      { tr: 'Triceps', en: 'Triceps', fr: 'Triceps', de: 'Trizeps' },
      { tr: 'Ic Gogus', en: 'Inner Chest', fr: 'Poitrine interne', de: 'Innere Brust' },
    ],
    steps: [
      { tr: 'Push-up pozisyonuna gecin', en: 'Get into push-up position', fr: 'Mettez-vous en position de pompe', de: 'Gehe in die Liegestützposition' },
      { tr: 'Ellerinizi birbirine yaklastirin, bas ve isaret parmaklarinizla elmas sekli yapin', en: 'Bring hands together, form a diamond with thumbs and index fingers', fr: 'Rapprochez les mains, formez un losange avec les pouces et index', de: 'Bringe die Hände zusammen, forme eine Raute mit Daumen und Zeigefingern' },
      { tr: 'Dirsekleri bukerek gogsunuzu ellerinize dogru indirin', en: 'Bend elbows to lower chest toward your hands', fr: 'Pliez les coudes pour abaisser la poitrine vers vos mains', de: 'Beuge die Ellbogen, um die Brust zu den Händen zu senken' },
      { tr: 'Kontrol ile kendinizi yukari itin', en: 'Push yourself back up with control', fr: 'Poussez-vous vers le haut avec contrôle', de: 'Drücke dich kontrolliert wieder hoch' },
    ],
    tips: [
      { tr: 'Dirsekler vucut yanindan ayrilmasin', en: 'Keep elbows close to your body', fr: 'Gardez les coudes près du corps', de: 'Halte die Ellbogen nah am Körper' },
      { tr: 'Hareketi yavas ve kontrol ile yapin', en: 'Perform the movement slow and controlled', fr: 'Effectuez le mouvement lentement et avec contrôle', de: 'Führe die Bewegung langsam und kontrolliert aus' },
    ],
    mistakes: [
      { tr: 'Dirsekleri yana acmak', en: 'Flaring elbows out', fr: 'Écarter les coudes', de: 'Ellbogen abspreizen' },
      { tr: 'Beli dusurme', en: 'Dropping the lower back', fr: 'Laisser tomber le bas du dos', de: 'Den unteren Rücken durchhängen lassen' },
    ],
  },
  wide_push_up: {
    difficulty: 'easy',
    media: { startImage: IMG.wide_push_up[0], endImage: IMG.wide_push_up[1] },
    targetMuscles: [
      { tr: 'Dis Gogus', en: 'Outer Chest', fr: 'Poitrine externe', de: 'Äußere Brust' },
      { tr: 'Omuzlar', en: 'Shoulders', fr: 'Épaules', de: 'Schultern' },
    ],
    steps: [
      { tr: 'Push-up pozisyonuna gecin', en: 'Get into push-up position', fr: 'Mettez-vous en position de pompe', de: 'Gehe in die Liegestützposition' },
      { tr: 'Ellerinizi omuz genisliginizden daha genise acin', en: 'Place hands wider than shoulder-width', fr: 'Placez les mains plus larges que les épaules', de: 'Hände breiter als schulterbreit aufstellen' },
      { tr: 'Gogsunuzu yere dogru indirin', en: 'Lower your chest toward the floor', fr: 'Abaissez votre poitrine vers le sol', de: 'Senke die Brust zum Boden' },
      { tr: 'Yukari itin', en: 'Push back up', fr: 'Poussez vers le haut', de: 'Drücke dich wieder hoch' },
    ],
    tips: [
      { tr: 'Genis tutus daha cok dis gogsu calistirir', en: 'Wide grip targets outer chest more', fr: 'La prise large cible davantage la poitrine externe', de: 'Weiter Griff trainiert die äußere Brust stärker' },
    ],
    mistakes: [
      { tr: 'Elleri cok genise acmak omuz yaralanmasina yol acabilir', en: 'Going too wide can cause shoulder injury', fr: 'Going too wide can cause shoulder injury', de: 'Going too wide can cause shoulder injury' },
    ],
  },
  pike_push_up: {
    difficulty: 'hard',
    media: { startImage: IMG.pike_push_up[0], endImage: IMG.pike_push_up[1] },
    targetMuscles: [
      { tr: 'On Omuz', en: 'Front Shoulders', fr: 'Épaules avant', de: 'Vordere Schultern' },
      { tr: 'Ust Gogus', en: 'Upper Chest', fr: 'Poitrine supérieure', de: 'Obere Brust' },
      { tr: 'Triceps', en: 'Triceps', fr: 'Triceps', de: 'Trizeps' },
    ],
    steps: [
      { tr: 'Push-up pozisyonuna gecin', en: 'Start in push-up position', fr: 'Commencez en position de pompe', de: 'Starte in der Liegestützposition' },
      { tr: 'Kalcanizi havaya kaldirarak ters V pozisyonuna gelin', en: 'Raise hips up into an inverted V position', fr: 'Levez les hanches en position de V inversé', de: 'Hebe die Hüfte in eine umgekehrte V-Position' },
      { tr: 'Basinizi ellerinizin arasina dogru indirin', en: 'Lower your head between your hands', fr: 'Abaissez votre tête entre vos mains', de: 'Senke den Kopf zwischen die Hände' },
      { tr: 'Yukari itin', en: 'Push back up', fr: 'Poussez vers le haut', de: 'Drücke dich wieder hoch' },
    ],
    tips: [
      { tr: 'Ayaklari bir basamaga koyarak zorlastirabilirsiniz', en: 'Elevate feet on a step to increase difficulty', fr: 'Surélevez les pieds sur une marche pour augmenter la difficulté', de: 'Stelle die Füße auf eine Stufe, um den Schwierigkeitsgrad zu erhöhen' },
      { tr: 'Handstand push-up icin harika hazirlik', en: 'Great preparation for handstand push-ups', fr: 'Excellente préparation pour les pompes en appui renversé', de: 'Hervorragende Vorbereitung für Handstand-Liegestütze' },
    ],
    mistakes: [
      { tr: 'Kalcayi yeterince kaldirmamak', en: 'Not raising hips high enough', fr: 'Ne pas lever les hanches assez haut', de: 'Die Hüfte nicht hoch genug anheben' },
    ],
  },
  dips: {
    difficulty: 'easy',
    media: { startImage: IMG.dips[0], endImage: IMG.dips[1] },
    targetMuscles: [
      { tr: 'Triceps', en: 'Triceps', fr: 'Triceps', de: 'Trizeps' },
      { tr: 'Gogus', en: 'Chest', fr: 'Poitrine', de: 'Brust' },
      { tr: 'On Omuz', en: 'Front Shoulders', fr: 'Épaules avant', de: 'Vordere Schultern' },
    ],
    steps: [
      { tr: 'Bir sandalye veya bankin kenarinda arkaniz donerek oturun', en: 'Sit on edge of a bench or chair facing away', fr: 'Sit on edge of a bench or chair facing away', de: 'Sit on edge of a bench or chair facing away' },
      { tr: 'Ellerinizi bankin kenarinda omuz genisliginde tutun', en: 'Place hands on edge, shoulder-width apart', fr: 'Placez les mains sur le bord, à la largeur des épaules', de: 'Platziere die Hände schulterbreit auf der Kante' },
      { tr: 'Kalcanizi banktan ayirin, bacaklarinizi one uzatin', en: 'Lift hips off the bench, extend legs forward', fr: 'Levez les hanches du banc, tendez les jambes en avant', de: 'Hebe die Hüfte von der Bank, strecke die Beine nach vorne' },
      { tr: 'Dirseklerinizi bukerek vucudunuzu asagi indirin', en: 'Bend elbows to lower your body down', fr: 'Pliez les coudes pour descendre le corps', de: 'Beuge die Ellbogen, um den Körper abzusenken' },
      { tr: 'Kollariniz 90 derece olunca yukari itin', en: 'Push back up when arms reach 90 degrees', fr: 'Poussez vers le haut quand les bras atteignent 90 degrés', de: 'Drücke dich hoch, wenn die Arme 90 Grad erreichen' },
    ],
    tips: [
      { tr: 'Kolaylastirmak icin dizlerinizi bukerek yapin', en: 'Bend knees to make it easier', fr: 'Pliez les genoux pour faciliter', de: 'Beuge die Knie, um es leichter zu machen' },
    ],
    mistakes: [
      { tr: 'Dirsekleri yana acmak', en: 'Flaring elbows out to the sides', fr: 'Écarter les coudes sur les côtés', de: 'Ellbogen zu den Seiten abspreizen' },
      { tr: 'Omuzlari kulaklara yaklastirmak', en: 'Shrugging shoulders up to ears', fr: 'Hausser les épaules vers les oreilles', de: 'Schultern zu den Ohren hochziehen' },
    ],
  },
  pull_up: {
    difficulty: 'hard',
    media: { startImage: IMG.pull_up[0], endImage: IMG.pull_up[1] },
    targetMuscles: [
      { tr: 'Sirt (Latissimus)', en: 'Back (Lats)', fr: 'Back (Lats)', de: 'Rücken (Latissimus)' },
      { tr: 'Biceps', en: 'Biceps', fr: 'Biceps', de: 'Bizeps' },
      { tr: 'Arka Omuz', en: 'Rear Shoulders', fr: 'Épaules arrière', de: 'Hintere Schultern' },
    ],
    steps: [
      { tr: 'Bara omuz genisliginizden biraz genis ust tutusu ile tutunun', en: 'Grip bar slightly wider than shoulder-width, overhand grip', fr: 'Saisissez la barre légèrement plus large que les épaules, prise pronation', de: 'Greife die Stange etwas breiter als schulterbreit im Obergriff' },
      { tr: 'Kollar tam uzanmis sekilde asili kalin', en: 'Hang with arms fully extended', fr: 'Suspendez-vous bras complètement tendus', de: 'Hänge mit vollständig gestreckten Armen' },
      { tr: 'Kurek kemiklerinizi birbirine yaklastirarak kendinizi yukari cekin', en: 'Pull yourself up by squeezing shoulder blades together', fr: 'Tirez-vous vers le haut en serrant les omoplates', de: 'Ziehe dich hoch, indem du die Schulterblätter zusammendrückst' },
      { tr: 'Ceneniz barin uzerinden gecene kadar cekin', en: 'Pull until your chin is over the bar', fr: 'Pull until your chin is over the bar', de: 'Pull until your chin is over the bar' },
      { tr: 'Yavasca kontrol ile inin', en: 'Lower yourself down slowly with control', fr: 'Redescendez lentement avec contrôle', de: 'Lasse dich langsam und kontrolliert herunter' },
    ],
    tips: [
      { tr: 'Yapamiyorsaniz negatif pull-up ile baslayin (yukarda basla, yavas in)', en: 'If you can\'t do it, start with negatives (start at top, lower slowly)', fr: 'If you can\'t do it, start with negatives (start at top, lower slowly)', de: 'Wenn du es nicht schaffst, beginne mit Negativen (oben starten, langsam ablassen)' },
      { tr: 'Lastik bant ile destek alin', en: 'Use a resistance band for assistance', fr: 'Utilisez une bande élastique pour vous aider', de: 'Verwende ein Widerstandsband zur Unterstützung' },
    ],
    mistakes: [
      { tr: 'Vucudu sallamak (kipping)', en: 'Swinging/kipping the body', fr: 'Balancer/faire du kipping avec le corps', de: 'Den Körper schwingen' },
      { tr: 'Tam inmemek', en: 'Not going to full extension at bottom', fr: 'Not going to full extension at bottom', de: 'Not going to full extension at bottom' },
    ],
  },
  chin_up: {
    difficulty: 'hard',
    media: { startImage: IMG.chin_up[0], endImage: IMG.chin_up[1] },
    targetMuscles: [
      { tr: 'Biceps', en: 'Biceps', fr: 'Biceps', de: 'Bizeps' },
      { tr: 'Sirt (Latissimus)', en: 'Back (Lats)', fr: 'Back (Lats)', de: 'Rücken (Latissimus)' },
    ],
    steps: [
      { tr: 'Bara omuz genisliginde alt tutus ile tutunun (avuclar size baksin)', en: 'Grip bar shoulder-width, underhand grip (palms facing you)', fr: 'Grip bar shoulder-width, underhand grip (palms facing you)', de: 'Greife die Stange schulterbreit im Untergriff (Handflächen zu dir)' },
      { tr: 'Kollar tam uzanmis asili kalin', en: 'Hang with arms fully extended', fr: 'Suspendez-vous bras complètement tendus', de: 'Hänge mit vollständig gestreckten Armen' },
      { tr: 'Ceneniz bar uzerine gelene kadar cekin', en: 'Pull until chin is over the bar', fr: 'Pull until chin is over the bar', de: 'Pull until chin is over the bar' },
      { tr: 'Yavasca inin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [
      { tr: 'Pull-up\'tan genelde daha kolaydir', en: 'Generally easier than pull-ups', fr: 'Généralement plus facile que les tractions en pronation', de: 'In der Regel leichter als Klimmzüge im Obergriff' },
    ],
    mistakes: [
      { tr: 'Vucudu sallamak', en: 'Swinging the body', fr: 'Balancer le corps', de: 'Den Körper schwingen' },
    ],
  },
  inverted_row: {
    difficulty: 'medium',
    media: { startImage: IMG.inverted_row[0], endImage: IMG.inverted_row[1] },
    targetMuscles: [
      { tr: 'Ust Sirt', en: 'Upper Back', fr: 'Haut du dos', de: 'Oberer Rücken' },
      { tr: 'Biceps', en: 'Biceps', fr: 'Biceps', de: 'Bizeps' },
      { tr: 'Arka Omuz', en: 'Rear Shoulders', fr: 'Épaules arrière', de: 'Hintere Schultern' },
    ],
    steps: [
      { tr: 'Bir barin altina sirt ustu yatin', en: 'Lie under a bar on your back', fr: 'Allongez-vous sous une barre sur le dos', de: 'Lege dich unter eine Stange auf den Rücken' },
      { tr: 'Bara omuz genisliginde tutunun', en: 'Grip bar at shoulder width', fr: 'Saisissez la barre à la largeur des épaules', de: 'Greife die Stange schulterbreit' },
      { tr: 'Vucudu duz tutarak gogsunuzu bara cekin', en: 'Keep body straight, pull chest to bar', fr: 'Gardez le corps droit, tirez la poitrine vers la barre', de: 'Körper gerade halten, Brust zur Stange ziehen' },
      { tr: 'Kontrol ile inin', en: 'Lower with control', fr: 'Redescendez avec contrôle', de: 'Kontrolliert ablassen' },
    ],
    tips: [
      { tr: 'Masanin alti ile de yapabilirsiniz', en: 'Can also be done under a sturdy table', fr: 'Peut aussi se faire sous une table solide', de: 'Kann auch unter einem stabilen Tisch durchgeführt werden' },
    ],
    mistakes: [
      { tr: 'Kalcayi dusurme', en: 'Letting hips sag', fr: 'Letting hips sag', de: 'Letting hips sag' },
    ],
  },
  superman: {
    difficulty: 'easy',
    media: { startImage: IMG.superman[0], endImage: IMG.superman[1] },
    targetMuscles: [
      { tr: 'Alt Sirt', en: 'Lower Back', fr: 'Bas du dos', de: 'Unterer Rücken' },
      { tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' },
    ],
    steps: [
      { tr: 'Yere yuzustu uzanin', en: 'Lie face down on the floor', fr: 'Allongez-vous face au sol', de: 'Lege dich mit dem Gesicht nach unten auf den Boden' },
      { tr: 'Kollarinizi one dogru uzatin', en: 'Extend arms forward', fr: 'Extend arms forward', de: 'Extend arms forward' },
      { tr: 'Ayni anda kollarinizi ve bacaklarinizi yerden kaldirin', en: 'Simultaneously lift arms and legs off the floor', fr: 'Soulevez simultanément les bras et les jambes du sol', de: 'Hebe gleichzeitig Arme und Beine vom Boden ab' },
      { tr: 'Pozisyonu sure boyunca tutun', en: 'Hold the position for the duration', fr: 'Maintenez la position pendant la durée prescrite', de: 'Halte die Position für die vorgegebene Dauer' },
    ],
    tips: [
      { tr: 'Ani hareket yapmayin, yavas ve kontrollü', en: 'No jerky movements, slow and controlled', fr: 'Pas de mouvements brusques, lent et contrôlé', de: 'Keine ruckartigen Bewegungen, langsam und kontrolliert' },
    ],
    mistakes: [
      { tr: 'Boynu asiri uzatma', en: 'Over-extending the neck', fr: 'Hyperextension du cou', de: 'Den Nacken überstrecken' },
    ],
  },
  squat: {
    difficulty: 'easy',
    media: { startImage: IMG.squat[0], endImage: IMG.squat[1] },
    targetMuscles: [
      { tr: 'On Bacak (Quadriceps)', en: 'Quads', fr: 'Quadriceps', de: 'Quadrizeps' },
      { tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' },
      { tr: 'Arka Bacak', en: 'Hamstrings', fr: 'Ischio-jambiers', de: 'Beinbeuger' },
    ],
    steps: [
      { tr: 'Ayaklarinizi omuz genisliginde acin, ayak uclarini hafif disa dondurun', en: 'Stand with feet shoulder-width apart, toes slightly out', fr: 'Debout, pieds à la largeur des épaules, orteils légèrement tournés', de: 'Stelle dich schulterbreit hin, Zehenspitzen leicht nach außen' },
      { tr: 'Gogus dik, sirt duz kalsin', en: 'Keep chest up, back straight', fr: 'Gardez la poitrine haute, le dos droit', de: 'Brust hoch, Rücken gerade halten' },
      { tr: 'Sandalyeye oturur gibi kalcanizi geri itin', en: 'Push hips back as if sitting in a chair', fr: 'Push hips back as if sitting in a chair', de: 'Push hips back as if sitting in a chair' },
      { tr: 'Uyluklariniz yere paralel olana kadar inin', en: 'Lower until thighs are parallel to the floor', fr: 'Lower until thighs are parallel to the floor', de: 'Lower until thighs are parallel to the floor' },
      { tr: 'Topuklarinizdan iterek yukari kalkIn', en: 'Drive through heels to stand back up', fr: 'Poussez à travers les talons pour remonter', de: 'Drücke dich über die Fersen wieder nach oben' },
    ],
    tips: [
      { tr: 'Dizleriniz ayak uclarinizin uzerinden gecmemeli', en: 'Knees should track over toes, not cave in', fr: 'Les genoux doivent suivre la direction des orteils', de: 'Knie sollten über den Zehenspitzen bleiben, nicht nach innen fallen' },
      { tr: 'Topuklariniz yerden kalkmasin', en: 'Keep heels on the ground', fr: 'Gardez les talons au sol', de: 'Fersen am Boden halten' },
    ],
    mistakes: [
      { tr: 'Dizleri ice dogru bukmek', en: 'Letting knees cave inward', fr: 'Letting knees cave inward', de: 'Letting knees cave inward' },
      { tr: 'Sirti yuvarlak tutmak', en: 'Rounding the back', fr: 'Arrondir le dos', de: 'Den Rücken runden' },
      { tr: 'Yeterince inmemek', en: 'Not going deep enough', fr: 'Ne pas descendre assez profondément', de: 'Nicht tief genug gehen' },
    ],
  },
  jump_squat: {
    difficulty: 'medium',
    media: { startImage: IMG.jump_squat[0], endImage: IMG.jump_squat[1] },
    targetMuscles: [
      { tr: 'On Bacak', en: 'Quads', fr: 'Quadriceps', de: 'Quadrizeps' },
      { tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' },
      { tr: 'Baldirlar', en: 'Calves', fr: 'Mollets', de: 'Waden' },
    ],
    steps: [
      { tr: 'Normal squat pozisyonunda baslatin', en: 'Start in normal squat position', fr: 'Commencez en position de squat normal', de: 'Starte in normaler Kniebeugen-Position' },
      { tr: 'Squat yaparak asagi inin', en: 'Lower into a squat', fr: 'Descendez en squat', de: 'Gehe in die Kniebeuge' },
      { tr: 'Patlayici sekilde ziplayin', en: 'Explosively jump up', fr: 'Sautez explosivément', de: 'Springe explosiv hoch' },
      { tr: 'Yumusak bir sekilde inin ve hemen tekrar squat yapin', en: 'Land softly and immediately squat again', fr: 'Atterrissez en douceur et reprenez le squat immédiatement', de: 'Lande sanft und gehe sofort wieder in die Kniebeuge' },
    ],
    tips: [
      { tr: 'Yumusak inis yapin, dizleri koruyun', en: 'Land softly to protect your knees', fr: 'Atterrissez en douceur pour protéger vos genoux', de: 'Lande sanft, um die Knie zu schonen' },
    ],
    mistakes: [
      { tr: 'Sert inis yapmak', en: 'Landing hard on your joints', fr: 'Atterrir lourdement sur les articulations', de: 'Hart auf die Gelenke landen' },
    ],
  },
  lunge: {
    difficulty: 'easy',
    media: { startImage: IMG.lunge[0], endImage: IMG.lunge[1] },
    targetMuscles: [
      { tr: 'On Bacak', en: 'Quads', fr: 'Quadriceps', de: 'Quadrizeps' },
      { tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' },
      { tr: 'Arka Bacak', en: 'Hamstrings', fr: 'Ischio-jambiers', de: 'Beinbeuger' },
    ],
    steps: [
      { tr: 'Dik durun, ellerinizi belde tutun', en: 'Stand tall, hands on hips', fr: 'Tenez-vous droit, mains sur les hanches', de: 'Stehe aufrecht, Hände an den Hüften' },
      { tr: 'Bir adim one atin', en: 'Take a big step forward', fr: 'Faites un grand pas en avant', de: 'Mache einen großen Schritt nach vorne' },
      { tr: 'Her iki diz 90 derece olana kadar inin', en: 'Lower until both knees are at 90 degrees', fr: 'Lower until both knees are at 90 degrees', de: 'Lower until both knees are at 90 degrees' },
      { tr: 'On ayaktan iterek baslangic pozisyonuna donun', en: 'Push off front foot to return to start', fr: 'Poussez sur le pied avant pour revenir au départ', de: 'Drücke dich vom vorderen Fuß ab zurück zum Start' },
      { tr: 'Diger bacakla tekrarlayin', en: 'Repeat with the other leg', fr: 'Repeat with the other leg', de: 'Repeat with the other leg' },
    ],
    tips: [
      { tr: 'On diz ayak ucunun otesinle gecmesin', en: 'Front knee shouldn\'t go past toes', fr: 'Front knee shouldn\'t go past toes', de: 'Das vordere Knie sollte nicht über die Zehenspitzen hinausgehen' },
    ],
    mistakes: [
      { tr: 'Adimi cok kisa atmak', en: 'Taking too short a step', fr: 'Faire un pas trop court', de: 'Zu kurzer Schritt' },
      { tr: 'Govdeyi one egmek', en: 'Leaning the torso forward', fr: 'Pencher le torse en avant', de: 'Den Oberkörper nach vorne lehnen' },
    ],
  },
  bulgarian_split: {
    difficulty: 'hard',
    media: { startImage: IMG.bulgarian_split[0], endImage: IMG.bulgarian_split[1] },
    targetMuscles: [
      { tr: 'On Bacak', en: 'Quads', fr: 'Quadriceps', de: 'Quadrizeps' },
      { tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' },
    ],
    steps: [
      { tr: 'Arkanizda bir bank veya sandalye olsun', en: 'Stand with a bench behind you', fr: 'Placez-vous devant un banc', de: 'Stelle dich mit einer Bank hinter dir hin' },
      { tr: 'Bir ayaginizi bankin uzerine koyun', en: 'Place one foot on the bench behind you', fr: 'Placez un pied sur le banc derrière vous', de: 'Lege einen Fuß auf die Bank hinter dir' },
      { tr: 'On bacak 90 derece olana kadar inin', en: 'Lower until front knee is at 90 degrees', fr: 'Lower until front knee is at 90 degrees', de: 'Lower until front knee is at 90 degrees' },
      { tr: 'On bacaktan iterek kalkIn', en: 'Push through front leg to stand up', fr: 'Poussez sur la jambe avant pour remonter', de: 'Drücke dich über das vordere Bein hoch' },
    ],
    tips: [
      { tr: 'Denge icin bir noktaya odaklanin', en: 'Focus on a point for balance', fr: 'Focus on a point for balance', de: 'Focus on a point for balance' },
    ],
    mistakes: [
      { tr: 'On dizi cok one itmek', en: 'Pushing front knee too far forward', fr: 'Pousser le genou avant trop en avant', de: 'Das vordere Knie zu weit nach vorne schieben' },
    ],
  },
  glute_bridge: {
    difficulty: 'easy',
    media: { startImage: IMG.glute_bridge[0], endImage: IMG.glute_bridge[1] },
    targetMuscles: [
      { tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' },
      { tr: 'Arka Bacak', en: 'Hamstrings', fr: 'Ischio-jambiers', de: 'Beinbeuger' },
    ],
    steps: [
      { tr: 'Sirt ustu yatin, dizlerinizi bukun', en: 'Lie on your back, bend your knees', fr: 'Allongez-vous sur le dos, pliez les genoux', de: 'Lege dich auf den Rücken, beuge die Knie' },
      { tr: 'Ayak tabanlariniz yerde, omuz genisliginde', en: 'Feet flat on floor, shoulder-width apart', fr: 'Pieds à plat au sol, à la largeur des épaules', de: 'Füße flach auf dem Boden, schulterbreit' },
      { tr: 'Kalcanizi gluteus kaslarini sikarak yukari kaldirin', en: 'Drive hips up by squeezing glutes', fr: 'Levez les hanches en serrant les fessiers', de: 'Hebe die Hüfte, indem du das Gesäß anspannst' },
      { tr: 'Tepede 2 saniye tutun', en: 'Hold at the top for 2 seconds', fr: 'Maintenez en haut pendant 2 secondes', de: 'Halte oben für 2 Sekunden' },
      { tr: 'Yavasca inin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [
      { tr: 'Tepede gluteusu maksimum sikin', en: 'Squeeze glutes hard at the top', fr: 'Serrez fort les fessiers en haut', de: 'Spanne das Gesäß oben fest an' },
    ],
    mistakes: [
      { tr: 'Bel ile degil kalca ile kaldirin', en: 'Drive with hips not lower back', fr: 'Poussez avec les hanches, pas le bas du dos', de: 'Mit der Hüfte drücken, nicht mit dem unteren Rücken' },
    ],
  },
  calf_raise: {
    difficulty: 'easy',
    media: { startImage: IMG.calf_raise[0], endImage: IMG.calf_raise[1] },
    targetMuscles: [
      { tr: 'Baldirlar', en: 'Calves', fr: 'Mollets', de: 'Waden' },
    ],
    steps: [
      { tr: 'Bir basamagin kenarinda durun', en: 'Stand on the edge of a step', fr: 'Stand on the edge of a step', de: 'Stand on the edge of a step' },
      { tr: 'Topuklarinizi asagi sarkitin', en: 'Let heels hang off the edge', fr: 'Laissez les talons dépasser du bord', de: 'Lass die Fersen über die Kante hängen' },
      { tr: 'Ayak parmaklarinizin uzerinde yukari kalkIn', en: 'Rise up on your toes', fr: 'Montez sur la pointe des pieds', de: 'Stelle dich auf die Zehenspitzen' },
      { tr: 'Tepede 1 saniye tutun', en: 'Hold at top for 1 second', fr: 'Maintenez en haut 1 seconde', de: 'Halte oben für 1 Sekunde' },
      { tr: 'Yavasca inin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [
      { tr: 'Tam acilim ve tam kasilma yapin', en: 'Full stretch and full contraction', fr: 'Étirement complet et contraction complète', de: 'Volle Dehnung und volle Kontraktion' },
    ],
    mistakes: [
      { tr: 'Hareketi cok hizli yapmak', en: 'Moving too fast', fr: 'Bouger trop vite', de: 'Zu schnell bewegen' },
    ],
  },
  wall_sit: {
    difficulty: 'medium',
    media: { startImage: IMG.wall_sit[0], endImage: IMG.wall_sit[1] },
    targetMuscles: [
      { tr: 'On Bacak', en: 'Quads', fr: 'Quadriceps', de: 'Quadrizeps' },
      { tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' },
    ],
    steps: [
      { tr: 'Sirtiinizi duvara yaslayin', en: 'Lean your back against a wall', fr: 'Appuyez votre dos contre un mur', de: 'Lehne den Rücken an eine Wand' },
      { tr: 'Ayaklarinizi bir adim one atin', en: 'Walk feet out about one step', fr: 'Walk feet out about one step', de: 'Walk feet out about one step' },
      { tr: 'Uyluklariniz yere paralel olana kadar kayarak inin', en: 'Slide down until thighs are parallel to floor', fr: 'Slide down until thighs are parallel to floor', de: 'Slide down until thighs are parallel to floor' },
      { tr: 'Bu pozisyonu sure boyunca tutun', en: 'Hold this position for the duration', fr: 'Hold this position for the duration', de: 'Halte diese Position für die vorgegebene Dauer' },
    ],
    tips: [
      { tr: 'Nefes almaya devam edin, nefesimizi tutmayin', en: 'Keep breathing, don\'t hold your breath', fr: 'Keep breathing, don\'t hold your breath', de: 'Weiteratmen, nicht die Luft anhalten' },
    ],
    mistakes: [
      { tr: 'Dizleri 90 dereceden asagi indirmek', en: 'Going lower than 90 degrees at knees', fr: 'Descendre plus bas que 90 degrés aux genoux', de: 'Tiefer als 90 Grad in den Knien gehen' },
    ],
  },
  plank: {
    difficulty: 'easy',
    media: { startImage: IMG.plank[0], endImage: IMG.plank[1] },
    targetMuscles: [
      { tr: 'Karin (Core)', en: 'Core / Abs', fr: 'Abdominaux', de: 'Rumpf / Bauchmuskeln' },
      { tr: 'Omuzlar', en: 'Shoulders', fr: 'Épaules', de: 'Schultern' },
      { tr: 'Alt Sirt', en: 'Lower Back', fr: 'Bas du dos', de: 'Unterer Rücken' },
    ],
    steps: [
      { tr: 'Dirsekleriniz ve ayak parmaklariniz uzerinde pozisyon alin', en: 'Get on forearms and toes', fr: 'Mettez-vous sur les avant-bras et les orteils', de: 'Gehe auf Unterarme und Zehenspitzen' },
      { tr: 'Dirsekleriniz omuzlarinizin tam altinda olsun', en: 'Elbows directly under shoulders', fr: 'Coudes directement sous les épaules', de: 'Ellbogen direkt unter den Schultern' },
      { tr: 'Vucudunuz bastan topuga duz bir cizgi olmali', en: 'Body forms a straight line from head to heels', fr: 'Le corps forme une ligne droite de la tête aux talons', de: 'Der Körper bildet eine gerade Linie von Kopf bis Ferse' },
      { tr: 'Core kaslarinizi sikin ve pozisyonu tutun', en: 'Engage core and hold the position', fr: 'Engagez les abdominaux et maintenez la position', de: 'Spanne den Rumpf an und halte die Position' },
    ],
    tips: [
      { tr: 'Kalcanizi ne cok yukari ne cok asagi birakmayin', en: 'Don\'t let hips pike up or sag down', fr: 'Don\'t let hips pike up or sag down', de: 'Lass die Hüfte weder hochkommen noch durchhängen' },
      { tr: 'Duz bir tahtaymissiniz gibi dusunun', en: 'Think of yourself as a flat board', fr: 'Imaginez-vous comme une planche rigide', de: 'Stelle dir vor, du bist ein flaches Brett' },
    ],
    mistakes: [
      { tr: 'Kalcayi yukari cikarmak', en: 'Piking hips up too high', fr: 'Lever les hanches trop haut', de: 'Hüfte zu hoch anheben' },
      { tr: 'Beli dusurme', en: 'Letting back sag', fr: 'Letting back sag', de: 'Letting back sag' },
      { tr: 'Nefes tutmak', en: 'Holding your breath', fr: 'Retenir son souffle', de: 'Die Luft anhalten' },
    ],
  },
  crunch: {
    difficulty: 'easy',
    media: { startImage: IMG.crunch[0], endImage: IMG.crunch[1] },
    targetMuscles: [
      { tr: 'Ust Karin', en: 'Upper Abs', fr: 'Abdominaux supérieurs', de: 'Obere Bauchmuskeln' },
    ],
    steps: [
      { tr: 'Sirt ustu yatin, dizlerinizi bukun', en: 'Lie on back, bend knees', fr: 'Lie on back, bend knees', de: 'Lie on back, bend knees' },
      { tr: 'Ellerinizi basinizin arkasina veya gogsunuzde capraz koyun', en: 'Hands behind head or crossed on chest', fr: 'Mains derrière la tête ou croisées sur la poitrine', de: 'Hände hinter dem Kopf oder gekreuzt auf der Brust' },
      { tr: 'Omuzlarinizi yerden kaldirin, karin kaslarinizi sikin', en: 'Curl shoulders off floor, squeeze abs', fr: 'Curl shoulders off floor, squeeze abs', de: 'Curl shoulders off floor, squeeze abs' },
      { tr: 'Yavasca inin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [
      { tr: 'Boyununuzla degil karninizla cekin', en: 'Pull with abs, not your neck', fr: 'Pull with abs, not your neck', de: 'Pull with abs, not your neck' },
    ],
    mistakes: [
      { tr: 'Boyundan cekmek', en: 'Pulling on the neck', fr: 'Tirer sur le cou', de: 'Am Nacken ziehen' },
      { tr: 'Momentum kullanmak', en: 'Using momentum', fr: 'Using momentum', de: 'Using momentum' },
    ],
  },
  mountain_climber: {
    difficulty: 'medium',
    media: { startImage: IMG.mountain_climber[0], endImage: IMG.mountain_climber[1] },
    targetMuscles: [
      { tr: 'Karin (Core)', en: 'Core / Abs', fr: 'Abdominaux', de: 'Rumpf / Bauchmuskeln' },
      { tr: 'Omuzlar', en: 'Shoulders', fr: 'Épaules', de: 'Schultern' },
      { tr: 'Kardiyovaskuler', en: 'Cardiovascular', fr: 'Cardiovascular', de: 'Cardiovascular' },
    ],
    steps: [
      { tr: 'Push-up pozisyonunda baslayin', en: 'Start in push-up position', fr: 'Commencez en position de pompe', de: 'Starte in der Liegestützposition' },
      { tr: 'Bir dizinizi gogsunuze dogru cekin', en: 'Drive one knee toward your chest', fr: 'Amenez un genou vers la poitrine', de: 'Ziehe ein Knie zur Brust' },
      { tr: 'Hizla diger bacakla degistirin', en: 'Quickly switch to the other leg', fr: 'Quickly switch to the other leg', de: 'Quickly switch to the other leg' },
      { tr: 'Yerinde kosuyormus gibi sirayla devam edin', en: 'Continue alternating like running in place', fr: 'Continue alternating like running in place', de: 'Continue alternating like running in place' },
    ],
    tips: [
      { tr: 'Kalcanizi asagi tutun, ziplama', en: 'Keep hips down, don\'t bounce', fr: 'Keep hips down, don\'t bounce', de: 'Hüfte unten halten, nicht federn' },
    ],
    mistakes: [
      { tr: 'Kalcayi yukari cikarmak', en: 'Raising hips too high', fr: 'Raising hips too high', de: 'Raising hips too high' },
    ],
  },
  leg_raise: {
    difficulty: 'medium',
    media: { startImage: IMG.leg_raise[0], endImage: IMG.leg_raise[1] },
    targetMuscles: [
      { tr: 'Alt Karin', en: 'Lower Abs', fr: 'Abdominaux inférieurs', de: 'Untere Bauchmuskeln' },
      { tr: 'Kalca Flexorleri', en: 'Hip Flexors', fr: 'Fléchisseurs de hanche', de: 'Hüftbeuger' },
    ],
    steps: [
      { tr: 'Sirt ustu yatin, bacaklarinizi uzatin', en: 'Lie on back, legs extended', fr: 'Lie on back, legs extended', de: 'Lie on back, legs extended' },
      { tr: 'Ellerinizi kalcanizin altina veya yanlara koyun', en: 'Place hands under hips or at sides', fr: 'Place hands under hips or at sides', de: 'Place hands under hips or at sides' },
      { tr: 'Bacaklarinizi duz tutarak 90 dereceye kaldirin', en: 'Raise straight legs to 90 degrees', fr: 'Raise straight legs to 90 degrees', de: 'Raise straight legs to 90 degrees' },
      { tr: 'Yavasca indirin ama yere degdirmeyin', en: 'Lower slowly but don\'t touch the floor', fr: 'Lower slowly but don\'t touch the floor', de: 'Senke langsam, aber berühre nicht den Boden' },
    ],
    tips: [
      { tr: 'Alt siirtiniz yerden kalkmasin', en: 'Keep lower back pressed to the floor', fr: 'Gardez le bas du dos collé au sol', de: 'Halte den unteren Rücken am Boden gedrückt' },
    ],
    mistakes: [
      { tr: 'Beli yerden kaldirmak', en: 'Arching lower back off floor', fr: 'Arching lower back off floor', de: 'Arching lower back off floor' },
    ],
  },
  russian_twist: {
    difficulty: 'medium',
    media: { startImage: IMG.russian_twist[0], endImage: IMG.russian_twist[1] },
    targetMuscles: [
      { tr: 'Oblik Kaslar', en: 'Obliques', fr: 'Obliques', de: 'Schräge Bauchmuskeln' },
      { tr: 'Core', en: 'Core', fr: 'Abdominaux', de: 'Rumpf' },
    ],
    steps: [
      { tr: 'Yere oturun, dizlerinizi bukun', en: 'Sit on floor, bend knees', fr: 'Sit on floor, bend knees', de: 'Sit on floor, bend knees' },
      { tr: 'Govdenizi hafif geriye yaslatin', en: 'Lean torso slightly back', fr: 'Lean torso slightly back', de: 'Lean torso slightly back' },
      { tr: 'Ellerinizi birlestirin veya bir agirlik tutun', en: 'Clasp hands or hold a weight', fr: 'Clasp hands or hold a weight', de: 'Clasp hands or hold a weight' },
      { tr: 'Govdenizi saga ve sola cevirIn', en: 'Twist torso to the right and left', fr: 'Twist torso to the right and left', de: 'Twist torso to the right and left' },
    ],
    tips: [
      { tr: 'Ayaklarinizi yerden kaldirarak zorlastirin', en: 'Lift feet off floor to increase difficulty', fr: 'Lift feet off floor to increase difficulty', de: 'Lift feet off floor to increase difficulty' },
    ],
    mistakes: [
      { tr: 'Sadece kollarla donmek, govde donmeli', en: 'Only twisting arms, torso should rotate', fr: 'Only twisting arms, torso should rotate', de: 'Only twisting arms, torso should rotate' },
    ],
  },
  burpee: {
    difficulty: 'hard',
    media: { startImage: IMG.burpee[0], endImage: IMG.burpee[1] },
    targetMuscles: [
      { tr: 'Tam Vucut', en: 'Full Body', fr: 'Corps entier', de: 'Ganzkörper' },
      { tr: 'Kardiyovaskuler', en: 'Cardiovascular', fr: 'Cardiovascular', de: 'Cardiovascular' },
    ],
    steps: [
      { tr: 'Dik durun', en: 'Stand upright', fr: 'Stand upright', de: 'Stand upright' },
      { tr: 'Squat pozisyonuna inin, ellerinizi yere koyun', en: 'Drop into a squat, place hands on floor', fr: 'Drop into a squat, place hands on floor', de: 'Drop into a squat, place hands on floor' },
      { tr: 'Ayaklarinizi geriye atarak plank pozisyonuna gecin', en: 'Jump feet back into plank position', fr: 'Jump feet back into plank position', de: 'Jump feet back into plank position' },
      { tr: 'Bir push-up yapin', en: 'Perform a push-up', fr: 'Perform a push-up', de: 'Perform a push-up' },
      { tr: 'Ayaklarinizi tekrar ellerinize cekin', en: 'Jump feet back to hands', fr: 'Jump feet back to hands', de: 'Jump feet back to hands' },
      { tr: 'Patlayici bir sekilde ziplayin, elleri yukari uzatin', en: 'Explosively jump up, reaching arms overhead', fr: 'Explosively jump up, reaching arms overhead', de: 'Explosively jump up, reaching arms overhead' },
    ],
    tips: [
      { tr: 'Baslayanlar push-up kismi atlayabilir', en: 'Beginners can skip the push-up part', fr: 'Beginners can skip the push-up part', de: 'Beginners can skip the push-up part' },
    ],
    mistakes: [
      { tr: 'Push-up kismini atlamak (ileri seviye icin)', en: 'Skipping the push-up (for advanced)', fr: 'Skipping the push-up (for advanced)', de: 'Skipping the push-up (for advanced)' },
      { tr: 'Beli dusurme plank kisminda', en: 'Letting back sag during plank', fr: 'Letting back sag during plank', de: 'Letting back sag during plank' },
    ],
  },
  high_knees: {
    difficulty: 'easy',
    media: { startImage: IMG.high_knees[0], endImage: IMG.high_knees[1] },
    targetMuscles: [
      { tr: 'Kardiyovaskuler', en: 'Cardiovascular', fr: 'Cardiovascular', de: 'Cardiovascular' },
      { tr: 'Kalca Flexorleri', en: 'Hip Flexors', fr: 'Fléchisseurs de hanche', de: 'Hüftbeuger' },
      { tr: 'Core', en: 'Core', fr: 'Abdominaux', de: 'Rumpf' },
    ],
    steps: [
      { tr: 'Dik durun', en: 'Stand tall', fr: 'Stand tall', de: 'Stand tall' },
      { tr: 'Yerinde kosarak dizlerinizi mumkun oldugunca yukari kaldirin', en: 'Run in place, driving knees as high as possible', fr: 'Run in place, driving knees as high as possible', de: 'Run in place, driving knees as high as possible' },
      { tr: 'Her diz kaldirisinda kollarinizi da sallayIn', en: 'Pump arms with each knee drive', fr: 'Pump arms with each knee drive', de: 'Pump arms with each knee drive' },
      { tr: 'Hizli ve ritmik devam edin', en: 'Keep a fast, rhythmic pace', fr: 'Keep a fast, rhythmic pace', de: 'Keep a fast, rhythmic pace' },
    ],
    tips: [
      { tr: 'Dizler kalca hizasina gelsin', en: 'Get knees to hip height', fr: 'Get knees to hip height', de: 'Get knees to hip height' },
    ],
    mistakes: [
      { tr: 'One egirmemek, dik kalmak lazim', en: 'Leaning forward, stay upright', fr: 'Leaning forward, stay upright', de: 'Leaning forward, stay upright' },
    ],
  },
  jumping_jack: {
    difficulty: 'easy',
    media: { startImage: IMG.jumping_jack[0], endImage: IMG.jumping_jack[1] },
    targetMuscles: [
      { tr: 'Kardiyovaskuler', en: 'Cardiovascular', fr: 'Cardiovascular', de: 'Cardiovascular' },
      { tr: 'Tam Vucut', en: 'Full Body', fr: 'Corps entier', de: 'Ganzkörper' },
    ],
    steps: [
      { tr: 'Ayaklar bitisik, kollar yanda dik durun', en: 'Stand with feet together, arms at sides', fr: 'Debout, pieds joints, bras le long du corps', de: 'Stehe mit geschlossenen Füßen, Arme seitlich' },
      { tr: 'Ziplayarak ayaklarinizi yana acin ve kollarinizi yukariya kaldirin', en: 'Jump, spreading legs wide while raising arms overhead', fr: 'Jump, spreading legs wide while raising arms overhead', de: 'Jump, spreading legs wide while raising arms overhead' },
      { tr: 'Ziplayarak baslangic pozisyonuna donun', en: 'Jump back to starting position', fr: 'Jump back to starting position', de: 'Jump back to starting position' },
      { tr: 'Ritmik sekilde tekrarlayin', en: 'Repeat rhythmically', fr: 'Repeat rhythmically', de: 'Repeat rhythmically' },
    ],
    tips: [
      { tr: 'Yumusak inis yapin', en: 'Land softly', fr: 'Land softly', de: 'Land softly' },
    ],
    mistakes: [
      { tr: 'Kollari tam yukari kaldirmamak', en: 'Not fully extending arms overhead', fr: 'Not fully extending arms overhead', de: 'Not fully extending arms overhead' },
    ],
  },

  // ====== NEW PUSH EXERCISES ======
  decline_push_up: {
    difficulty: 'medium',
    media: { startImage: IMG.push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [{ tr: 'Ust Gogus', en: 'Upper Chest', fr: 'Upper Chest', de: 'Schultern' }],
    steps: [
      { tr: 'Ayaklarinizi bir bank veya basamaga koyun', en: 'Place feet on a bench or step', fr: 'Place feet on a bench or step', de: 'Place feet on a bench or step' },
      { tr: 'Ellerinizi omuz genisliginde yere koyun', en: 'Place hands shoulder-width on the floor', fr: 'Place hands shoulder-width on the floor', de: 'Place hands shoulder-width on the floor' },
      { tr: 'Gogsunuzu yere dogru indirin', en: 'Lower chest toward the floor', fr: 'Lower chest toward the floor', de: 'Lower chest toward the floor' },
      { tr: 'Yukari itin', en: 'Push back up', fr: 'Poussez vers le haut', de: 'Drücke dich wieder hoch' },
    ],
    tips: [{ tr: 'Yukseklik arttikca zorluk artar', en: 'Higher elevation increases difficulty', fr: 'Higher elevation increases difficulty', de: 'Higher elevation increases difficulty' }],
    mistakes: [{ tr: 'Beli dusurme', en: 'Letting back sag', fr: 'Letting back sag', de: 'Letting back sag' }],
  },
  archer_push_up: {
    difficulty: 'hard',
    media: { startImage: IMG.wide_push_up[0], endImage: IMG.wide_push_up[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Trizeps' }],
    steps: [
      { tr: 'Cok genis push-up pozisyonuna gecin', en: 'Get into a very wide push-up position', fr: 'Get into a very wide push-up position', de: 'Get into a very wide push-up position' },
      { tr: 'Bir tarafa dogru inin, o kolu bukun', en: 'Lower toward one side, bending that arm', fr: 'Lower toward one side, bending that arm', de: 'Lower toward one side, bending that arm' },
      { tr: 'Diger kol duz kalir', en: 'Other arm stays straight', fr: 'Other arm stays straight', de: 'Other arm stays straight' },
      { tr: 'Yukari itin ve diger tarafa tekrarlayin', en: 'Push up and repeat on other side', fr: 'Push up and repeat on other side', de: 'Push up and repeat on other side' },
    ],
    tips: [{ tr: 'Tek kol push-up icin harika hazirlik', en: 'Great preparation for one-arm push-up', fr: 'Great preparation for one-arm push-up', de: 'Great preparation for one-arm push-up' }],
    mistakes: [{ tr: 'Duz kolu bukmek', en: 'Bending the straight arm', fr: 'Bending the straight arm', de: 'Bending the straight arm' }],
  },
  tricep_kickback: {
    difficulty: 'easy',
    media: { startImage: IMG.dips[0], endImage: IMG.dips[1] },
    targetMuscles: [{ tr: 'Triceps', en: 'Triceps', fr: 'Triceps', de: 'Trizeps' }],
    steps: [
      { tr: 'One dogru egilin, bir elinizi dizinize koyun', en: 'Bend forward, one hand on knee', fr: 'Bend forward, one hand on knee', de: 'Bend forward, one hand on knee' },
      { tr: 'Dirseginizi 90 derece bukun', en: 'Bend elbow to 90 degrees', fr: 'Bend elbow to 90 degrees', de: 'Bend elbow to 90 degrees' },
      { tr: 'Kolunuzu arkaya dogru duzlestirin', en: 'Extend arm straight back', fr: 'Extend arm straight back', de: 'Extend arm straight back' },
      { tr: 'Yavasca geri getirin', en: 'Slowly return', fr: 'Slowly return', de: 'Slowly return' },
    ],
    tips: [{ tr: 'Ust kol sabit kalmali', en: 'Upper arm should stay still', fr: 'Upper arm should stay still', de: 'Upper arm should stay still' }],
    mistakes: [{ tr: 'Kolun tamami ile sallamak', en: 'Swinging the whole arm', fr: 'Swinging the whole arm', de: 'Swinging the whole arm' }],
  },
  shoulder_tap: {
    difficulty: 'medium',
    media: { startImage: IMG.push_up[0], endImage: IMG.plank[0] },
    targetMuscles: [{ tr: 'Omuzlar', en: 'Shoulders', fr: 'Shoulders', de: 'Rumpf' }],
    steps: [
      { tr: 'Push-up pozisyonunda baslayin', en: 'Start in push-up position', fr: 'Commencez en position de pompe', de: 'Starte in der Liegestützposition' },
      { tr: 'Bir elinizi kaldirip karsi omuza dokunun', en: 'Lift one hand and tap opposite shoulder', fr: 'Lift one hand and tap opposite shoulder', de: 'Lift one hand and tap opposite shoulder' },
      { tr: 'Eliniizi geri koyun', en: 'Place hand back down', fr: 'Place hand back down', de: 'Place hand back down' },
      { tr: 'Diger elle tekrarlayin', en: 'Repeat with other hand', fr: 'Repeat with other hand', de: 'Repeat with other hand' },
    ],
    tips: [{ tr: 'Kalcanizi sallamadan yapin', en: 'Keep hips still, no rocking', fr: 'Keep hips still, no rocking', de: 'Keep hips still, no rocking' }],
    mistakes: [{ tr: 'Kalcayi saga sola sallamak', en: 'Rocking hips side to side', fr: 'Rocking hips side to side', de: 'Rocking hips side to side' }],
  },
  pseudo_planche: {
    difficulty: 'hard',
    media: { startImage: IMG.push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Vordere Schultern' }],
    steps: [
      { tr: 'Push-up pozisyonuna gecin', en: 'Get into push-up position', fr: 'Mettez-vous en position de pompe', de: 'Gehe in die Liegestützposition' },
      { tr: 'Ellerinizi bel hizasina getirin, parmaklar yana baksIn', en: 'Place hands by waist, fingers pointing out', fr: 'Place hands by waist, fingers pointing out', de: 'Place hands by waist, fingers pointing out' },
      { tr: 'Vucudu one yaslayarak inin', en: 'Lean forward and lower', fr: 'Lean forward and lower', de: 'Lean forward and lower' },
      { tr: 'Yukari itin', en: 'Push back up', fr: 'Poussez vers le haut', de: 'Drücke dich wieder hoch' },
    ],
    tips: [{ tr: 'Planche icin en iyi hazirlik hareketi', en: 'Best preparation for planche', fr: 'Best preparation for planche', de: 'Best preparation for planche' }],
    mistakes: [{ tr: 'Bileklere cok yuk bindirebilir, yavas arttirin', en: 'Can stress wrists, progress slowly', fr: 'Can stress wrists, progress slowly', de: 'Can stress wrists, progress slowly' }],
  },
  hindu_push_up: {
    difficulty: 'medium',
    media: { startImage: IMG.pike_push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [{ tr: 'Omuzlar', en: 'Shoulders', fr: 'Shoulders', de: 'Brust\' }, { tr: \'Sirt\', en: \'Back\', fr: \'Dos\', de: \'Rücken' }],
    steps: [
      { tr: 'Ters V pozisyonunda baslayin (downward dog)', en: 'Start in downward dog position', fr: 'Start in downward dog position', de: 'Start in downward dog position' },
      { tr: 'Gogsunuzu yere dogru dalarak one kaydin', en: 'Dive chest toward floor, swooping forward', fr: 'Dive chest toward floor, swooping forward', de: 'Dive chest toward floor, swooping forward' },
      { tr: 'Kollarinizi duzlestirip gogsunuzu yukari kaldirin (cobra)', en: 'Extend arms, lift chest up (cobra)', fr: 'Extend arms, lift chest up (cobra)', de: 'Extend arms, lift chest up (cobra)' },
      { tr: 'Geri ters V pozisyonuna donun', en: 'Push back to downward dog', fr: 'Push back to downward dog', de: 'Push back to downward dog' },
    ],
    tips: [{ tr: 'Akici bir hareket olmali', en: 'Should be one fluid motion', fr: 'Should be one fluid motion', de: 'Should be one fluid motion' }],
    mistakes: [{ tr: 'Hareketi parcalara bolmek', en: 'Breaking the movement into separate parts', fr: 'Breaking the movement into separate parts', de: 'Breaking the movement into separate parts' }],
  },
  clap_push_up: {
    difficulty: 'hard',
    media: { startImage: IMG.push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Trizeps' }],
    steps: [
      { tr: 'Push-up pozisyonunda baslayin', en: 'Start in push-up position', fr: 'Commencez en position de pompe', de: 'Starte in der Liegestützposition' },
      { tr: 'Gogsunuzu yere indirin', en: 'Lower chest to floor', fr: 'Lower chest to floor', de: 'Lower chest to floor' },
      { tr: 'Patlayici sekilde yukari itin ve havada el cirpin', en: 'Explosively push up and clap in the air', fr: 'Explosively push up and clap in the air', de: 'Explosively push up and clap in the air' },
      { tr: 'Yumusak inis yapin', en: 'Land softly', fr: 'Land softly', de: 'Land softly' },
    ],
    tips: [{ tr: 'Once normal push-up da guclenin', en: 'Build strength with regular push-ups first', fr: 'Build strength with regular push-ups first', de: 'Build strength with regular push-ups first' }],
    mistakes: [{ tr: 'Sert inis yapmak', en: 'Landing hard on wrists', fr: 'Landing hard on wrists', de: 'Landing hard on wrists' }],
  },

  // ====== NEW PULL EXERCISES ======
  doorway_curl: {
    difficulty: 'easy',
    media: { startImage: IMG.chin_up[0], endImage: IMG.chin_up[1] },
    targetMuscles: [{ tr: 'Biceps', en: 'Biceps', fr: 'Biceps', de: 'Bizeps' }],
    steps: [
      { tr: 'Bir kapi pervazinin kenarini tutun', en: 'Grip the edge of a doorframe', fr: 'Grip the edge of a doorframe', de: 'Grip the edge of a doorframe' },
      { tr: 'Ayaklarinizi pervazenin dibine koyun', en: 'Place feet at the base of the frame', fr: 'Place feet at the base of the frame', de: 'Place feet at the base of the frame' },
      { tr: 'Geriye yaslarin ve kolunuzu bukun', en: 'Lean back and curl yourself toward the frame', fr: 'Lean back and curl yourself toward the frame', de: 'Lean back and curl yourself toward the frame' },
      { tr: 'Yavasca geri donun', en: 'Slowly return', fr: 'Slowly return', de: 'Slowly return' },
    ],
    tips: [{ tr: 'Aciya gore zorlugu ayarlayabilirsiniz', en: 'Adjust difficulty by changing your angle', fr: 'Adjust difficulty by changing your angle', de: 'Adjust difficulty by changing your angle' }],
    mistakes: [{ tr: 'Vucudu sallamak', en: 'Swinging the body', fr: 'Balancer le corps', de: 'Den Körper schwingen' }],
  },
  towel_row: {
    difficulty: 'medium',
    media: { startImage: IMG.inverted_row[0], endImage: IMG.inverted_row[1] },
    targetMuscles: [{ tr: 'Ust Sirt', en: 'Upper Back', fr: 'Upper Back', de: 'Bizeps' }],
    steps: [
      { tr: 'Havluyu saglam bir yere sarin', en: 'Loop towel around a sturdy object', fr: 'Loop towel around a sturdy object', de: 'Loop towel around a sturdy object' },
      { tr: 'Havlunun iki ucunu tutun', en: 'Hold both ends of the towel', fr: 'Hold both ends of the towel', de: 'Hold both ends of the towel' },
      { tr: 'Geriye yaslarin ve kendinizi cekin', en: 'Lean back and row yourself up', fr: 'Lean back and row yourself up', de: 'Lean back and row yourself up' },
      { tr: 'Kontrol ile geri donun', en: 'Return with control', fr: 'Return with control', de: 'Return with control' },
    ],
    tips: [{ tr: 'Kavrama gucu de calisir', en: 'Also works grip strength', fr: 'Also works grip strength', de: 'Also works grip strength' }],
    mistakes: [{ tr: 'Kalcayi bukmek', en: 'Bending at the hips', fr: 'Bending at the hips', de: 'Bending at the hips' }],
  },
  negative_pull_up: {
    difficulty: 'medium',
    media: { startImage: IMG.pull_up[0], endImage: IMG.pull_up[1] },
    targetMuscles: [{ tr: 'Sirt', en: 'Back', fr: 'Back', de: 'Bizeps' }],
    steps: [
      { tr: 'Barin uzerine ziplayin veya bir basamak kullanin', en: 'Jump or step up to top of pull-up position', fr: 'Jump or step up to top of pull-up position', de: 'Jump or step up to top of pull-up position' },
      { tr: 'Cene barin uzerinde olsun', en: 'Chin should be over the bar', fr: 'Chin should be over the bar', de: 'Chin should be over the bar' },
      { tr: '5 saniyede yavasca inin', en: 'Lower yourself slowly over 5 seconds', fr: 'Lower yourself slowly over 5 seconds', de: 'Lower yourself slowly over 5 seconds' },
      { tr: 'Tekrarlayin', en: 'Repeat', fr: 'Repeat', de: 'Repeat' },
    ],
    tips: [{ tr: 'Pull-up yapamayan icin en iyi baslangic', en: 'Best starting exercise if you can\'t do pull-ups', fr: 'Best starting exercise if you can\'t do pull-ups', de: 'Beste Einstiegsübung, wenn du keine Klimmzüge schaffst' }],
    mistakes: [{ tr: 'Cok hizli inmek', en: 'Lowering too quickly', fr: 'Lowering too quickly', de: 'Lowering too quickly' }],
  },
  face_pull: {
    difficulty: 'easy',
    media: { startImage: IMG.inverted_row[0], endImage: IMG.inverted_row[1] },
    targetMuscles: [{ tr: 'Arka Omuz', en: 'Rear Delts', fr: 'Rear Delts', de: 'Oberer Rücken' }],
    steps: [
      { tr: 'Elastik banti goz hizasina baglatin', en: 'Attach resistance band at eye level', fr: 'Attach resistance band at eye level', de: 'Attach resistance band at eye level' },
      { tr: 'Banti iki elle tutun', en: 'Hold band with both hands', fr: 'Hold band with both hands', de: 'Hold band with both hands' },
      { tr: 'Dirsekler yukarda, banti yuzunuze dogru cekin', en: 'Pull band toward face with elbows high', fr: 'Pull band toward face with elbows high', de: 'Pull band toward face with elbows high' },
      { tr: 'Yavasca geri birakIn', en: 'Slowly release', fr: 'Slowly release', de: 'Slowly release' },
    ],
    tips: [{ tr: 'Durus ve omuz sagligi icin mukemmel', en: 'Great for posture and shoulder health', fr: 'Great for posture and shoulder health', de: 'Great for posture and shoulder health' }],
    mistakes: [{ tr: 'Dirsekleri asagi dusurme', en: 'Letting elbows drop', fr: 'Letting elbows drop', de: 'Letting elbows drop' }],
  },
  reverse_snow_angel: {
    difficulty: 'easy',
    media: { startImage: IMG.superman[0], endImage: IMG.superman[1] },
    targetMuscles: [{ tr: 'Ust Sirt', en: 'Upper Back', fr: 'Upper Back', de: 'Rear Delts' }],
    steps: [
      { tr: 'Yere yuzustu uzanin', en: 'Lie face down', fr: 'Lie face down', de: 'Lie face down' },
      { tr: 'Kollarinizi yanlarda tutun, yerden hafif kaldirim', en: 'Arms at sides, slightly off the ground', fr: 'Arms at sides, slightly off the ground', de: 'Arms at sides, slightly off the ground' },
      { tr: 'Kollarinizi yanindan basinizin ustune dogru kaydirim', en: 'Sweep arms from sides to overhead', fr: 'Sweep arms from sides to overhead', de: 'Sweep arms from sides to overhead' },
      { tr: 'Ayni yoldan geri getirin', en: 'Return the same way', fr: 'Return the same way', de: 'Return the same way' },
    ],
    tips: [{ tr: 'Kollar surekli yerden kalkmis olmali', en: 'Arms should stay off the ground throughout', fr: 'Arms should stay off the ground throughout', de: 'Arms should stay off the ground throughout' }],
    mistakes: [{ tr: 'Kollari yere birakma', en: 'Letting arms touch the ground', fr: 'Letting arms touch the ground', de: 'Letting arms touch the ground' }],
  },
  wide_pull_up: {
    difficulty: 'hard',
    media: { startImage: IMG.pull_up[0], endImage: IMG.pull_up[1] },
    targetMuscles: [{ tr: 'Sirt (Lat)', en: 'Lats', fr: 'Lats', de: 'Bizeps' }],
    steps: [
      { tr: 'Bara omuz genisliginizden cok daha genis tutun', en: 'Grip bar much wider than shoulder-width', fr: 'Grip bar much wider than shoulder-width', de: 'Grip bar much wider than shoulder-width' },
      { tr: 'Asili kalin, kurek kemiklerini sikin', en: 'Hang, engage shoulder blades', fr: 'Hang, engage shoulder blades', de: 'Hang, engage shoulder blades' },
      { tr: 'Gogsunuzu bara dogru cekin', en: 'Pull chest toward bar', fr: 'Pull chest toward bar', de: 'Pull chest toward bar' },
      { tr: 'Kontrol ile inin', en: 'Lower with control', fr: 'Redescendez avec contrôle', de: 'Kontrolliert ablassen' },
    ],
    tips: [{ tr: 'Sirt genisligini gelistirmek icin ideal', en: 'Ideal for developing back width', fr: 'Ideal for developing back width', de: 'Ideal for developing back width' }],
    mistakes: [{ tr: 'Vucudu sallamak', en: 'Swinging the body', fr: 'Balancer le corps', de: 'Den Körper schwingen' }],
  },

  // ====== NEW LEG EXERCISES ======
  sumo_squat: {
    difficulty: 'easy',
    media: { startImage: IMG.squat[0], endImage: IMG.squat[1] },
    targetMuscles: [{ tr: 'Ic Bacak', en: 'Inner Thighs', fr: 'Inner Thighs', de: 'Gesäß' }],
    steps: [
      { tr: 'Ayaklarinizi omuz genisliginizden genis acin', en: 'Stand with feet wider than shoulder-width', fr: 'Stand with feet wider than shoulder-width', de: 'Stand with feet wider than shoulder-width' },
      { tr: 'Ayak uclarini disa cevirIn', en: 'Point toes outward', fr: 'Point toes outward', de: 'Point toes outward' },
      { tr: 'Kalcanizi asagi indirin', en: 'Lower your hips down', fr: 'Lower your hips down', de: 'Lower your hips down' },
      { tr: 'Topuklardan iterek kalkIn', en: 'Drive through heels to stand', fr: 'Drive through heels to stand', de: 'Drive through heels to stand' },
    ],
    tips: [{ tr: 'Ic bacak kaslarini hedefler', en: 'Targets inner thigh muscles', fr: 'Targets inner thigh muscles', de: 'Targets inner thigh muscles' }],
    mistakes: [{ tr: 'Dizleri ice bukmek', en: 'Letting knees cave inward', fr: 'Letting knees cave inward', de: 'Letting knees cave inward' }],
  },
  pistol_squat: {
    difficulty: 'hard',
    media: { startImage: IMG.squat[0], endImage: IMG.squat[1] },
    targetMuscles: [{ tr: 'On Bacak', en: 'Quads', fr: 'Quads', de: 'Gesäß\' }, { tr: \'Denge\', en: \'Balance\', fr: \'Balance\', de: \'Balance' }],
    steps: [
      { tr: 'Tek ayak ustunde durun', en: 'Stand on one leg', fr: 'Stand on one leg', de: 'Stand on one leg' },
      { tr: 'Diger bacagi one uzatin', en: 'Extend other leg forward', fr: 'Extend other leg forward', de: 'Extend other leg forward' },
      { tr: 'Tek ayak ustunde squat yapin', en: 'Squat down on one leg', fr: 'Squat down on one leg', de: 'Squat down on one leg' },
      { tr: 'En asagida geri yukari kalkIn', en: 'Push back up from the bottom', fr: 'Push back up from the bottom', de: 'Push back up from the bottom' },
    ],
    tips: [{ tr: 'Dengeniz yoksa bir destek tutarak baslayin', en: 'Hold onto something for balance at first', fr: 'Hold onto something for balance at first', de: 'Hold onto something for balance at first' }],
    mistakes: [{ tr: 'Dizin ici tarafa dusmesi', en: 'Knee caving inward', fr: 'Knee caving inward', de: 'Knee caving inward' }],
  },
  reverse_lunge: {
    difficulty: 'easy',
    media: { startImage: IMG.lunge[0], endImage: IMG.lunge[1] },
    targetMuscles: [{ tr: 'On Bacak', en: 'Quads', fr: 'Quads', de: 'Gesäß' }],
    steps: [
      { tr: 'Dik durun', en: 'Stand tall', fr: 'Stand tall', de: 'Stand tall' },
      { tr: 'Bir adim arkaya atin', en: 'Step backward', fr: 'Step backward', de: 'Step backward' },
      { tr: 'Her iki diz 90 derece olana kadar inin', en: 'Lower until both knees are at 90 degrees', fr: 'Lower until both knees are at 90 degrees', de: 'Lower until both knees are at 90 degrees' },
      { tr: 'On ayaktan iterek geri donun', en: 'Push through front foot to return', fr: 'Push through front foot to return', de: 'Push through front foot to return' },
    ],
    tips: [{ tr: 'Dizlere daha az yuk biner, on lunge den guvenli', en: 'Less knee stress than forward lunge', fr: 'Less knee stress than forward lunge', de: 'Less knee stress than forward lunge' }],
    mistakes: [{ tr: 'Govdeyi one egmek', en: 'Leaning torso forward', fr: 'Leaning torso forward', de: 'Leaning torso forward' }],
  },
  hip_thrust: {
    difficulty: 'medium',
    media: { startImage: IMG.glute_bridge[0], endImage: IMG.glute_bridge[1] },
    targetMuscles: [{ tr: 'Gluteus', en: 'Glutes', fr: 'Glutes', de: 'Beinbeuger' }],
    steps: [
      { tr: 'Sirtiinizi bir banka yaslayin', en: 'Rest upper back on a bench', fr: 'Rest upper back on a bench', de: 'Rest upper back on a bench' },
      { tr: 'Bir bacaginizi havaya kaldirin', en: 'Lift one leg off the ground', fr: 'Lift one leg off the ground', de: 'Lift one leg off the ground' },
      { tr: 'Tek bacakla kalcanizi yukari itin', en: 'Drive hips up with the single leg', fr: 'Drive hips up with the single leg', de: 'Drive hips up with the single leg' },
      { tr: 'Tepede gluteusu sikin', en: 'Squeeze glutes at top', fr: 'Squeeze glutes at top', de: 'Squeeze glutes at top' },
    ],
    tips: [{ tr: 'Gluteus icin en etkili hareketlerden biri', en: 'One of the most effective glute exercises', fr: 'One of the most effective glute exercises', de: 'One of the most effective glute exercises' }],
    mistakes: [{ tr: 'Bel ile kaldirmak', en: 'Lifting with lower back instead of glutes', fr: 'Lifting with lower back instead of glutes', de: 'Lifting with lower back instead of glutes' }],
  },
  step_up: {
    difficulty: 'easy',
    media: { startImage: IMG.lunge[0], endImage: IMG.squat[0] },
    targetMuscles: [{ tr: 'On Bacak', en: 'Quads', fr: 'Quads', de: 'Gesäß' }],
    steps: [
      { tr: 'Bir bank veya basamagin onunde durun', en: 'Stand in front of a bench or step', fr: 'Stand in front of a bench or step', de: 'Stand in front of a bench or step' },
      { tr: 'Bir ayaginizi basamaga koyun', en: 'Place one foot on the step', fr: 'Place one foot on the step', de: 'Place one foot on the step' },
      { tr: 'O ayaktan iterek yukari cikin', en: 'Push through that foot to step up', fr: 'Push through that foot to step up', de: 'Push through that foot to step up' },
      { tr: 'Kontrol ile geri inin', en: 'Step back down with control', fr: 'Step back down with control', de: 'Step back down with control' },
    ],
    tips: [{ tr: 'Ust ayaktan itin, alt ayakla itmeyin', en: 'Drive from top foot, don\'t push off bottom foot', fr: 'Drive from top foot, don\'t push off bottom foot', de: 'Vom oberen Fuß drücken, nicht vom unteren abstoßen' }],
    mistakes: [{ tr: 'Alt ayakla itme yapmak', en: 'Pushing off with the bottom foot', fr: 'Pushing off with the bottom foot', de: 'Pushing off with the bottom foot' }],
  },

  // ====== NEW CORE EXERCISES ======
  bicycle_crunch: {
    difficulty: 'medium',
    media: { startImage: IMG.crunch[0], endImage: IMG.russian_twist[1] },
    targetMuscles: [{ tr: 'Oblik Kaslar', en: 'Obliques', fr: 'Obliques', de: 'Obere Bauchmuskeln' }],
    steps: [
      { tr: 'Sirt ustu yatin, elleri basinizin arkasina koyun', en: 'Lie on back, hands behind head', fr: 'Lie on back, hands behind head', de: 'Lie on back, hands behind head' },
      { tr: 'Bir dizinizi gogsunuze cekerken karsi dirsegi ona yaklastirin', en: 'Bring knee to chest while twisting opposite elbow toward it', fr: 'Bring knee to chest while twisting opposite elbow toward it', de: 'Bring knee to chest while twisting opposite elbow toward it' },
      { tr: 'Diger tarafla tekrarlayin', en: 'Repeat on other side', fr: 'Repeat on other side', de: 'Repeat on other side' },
      { tr: 'Bisiklet ceviriyor gibi devam edin', en: 'Continue in a cycling motion', fr: 'Continue in a cycling motion', de: 'Continue in a cycling motion' },
    ],
    tips: [{ tr: 'Yavas ve kontrollü yapin', en: 'Do it slow and controlled', fr: 'Do it slow and controlled', de: 'Do it slow and controlled' }],
    mistakes: [{ tr: 'Boyundan cekmek', en: 'Pulling on the neck', fr: 'Tirer sur le cou', de: 'Am Nacken ziehen' }],
  },
  dead_bug: {
    difficulty: 'easy',
    media: { startImage: IMG.leg_raise[0], endImage: IMG.leg_raise[1] },
    targetMuscles: [{ tr: 'Core', en: 'Core', fr: 'Core', de: 'Deep Abs' }],
    steps: [
      { tr: 'Sirt ustu yatin, kollar ve bacaklar havada', en: 'Lie on back, arms and legs in the air', fr: 'Lie on back, arms and legs in the air', de: 'Lie on back, arms and legs in the air' },
      { tr: 'Karsi kol ve bacagi ayni anda uzatin', en: 'Extend opposite arm and leg simultaneously', fr: 'Extend opposite arm and leg simultaneously', de: 'Extend opposite arm and leg simultaneously' },
      { tr: 'Core u siki tutun, bel yerden kalkmasin', en: 'Keep core braced, lower back on floor', fr: 'Keep core braced, lower back on floor', de: 'Keep core braced, lower back on floor' },
      { tr: 'Baslangica donun, diger tarafla tekrar', en: 'Return and repeat other side', fr: 'Return and repeat other side', de: 'Return and repeat other side' },
    ],
    tips: [{ tr: 'Rehabilitasyon ve core aktivasyonu icin mukemmel', en: 'Perfect for rehab and core activation', fr: 'Perfect for rehab and core activation', de: 'Perfect for rehab and core activation' }],
    mistakes: [{ tr: 'Beli yerden kaldirmak', en: 'Arching lower back off floor', fr: 'Arching lower back off floor', de: 'Arching lower back off floor' }],
  },
  side_plank: {
    difficulty: 'medium',
    media: { startImage: IMG.plank[0], endImage: IMG.plank[1] },
    targetMuscles: [{ tr: 'Oblik Kaslar', en: 'Obliques', fr: 'Obliques', de: 'Rumpf' }],
    steps: [
      { tr: 'Yan yatin, dirseginiz omzunuzun altinda', en: 'Lie on side, elbow under shoulder', fr: 'Lie on side, elbow under shoulder', de: 'Lie on side, elbow under shoulder' },
      { tr: 'Kalcanizi yerden kaldirin', en: 'Lift hips off the ground', fr: 'Lift hips off the ground', de: 'Lift hips off the ground' },
      { tr: 'Vucudunuz duz bir cizgi olusturmali', en: 'Body should form a straight line', fr: 'Body should form a straight line', de: 'Body should form a straight line' },
      { tr: 'Pozisyonu tutun', en: 'Hold the position', fr: 'Hold the position', de: 'Hold the position' },
    ],
    tips: [{ tr: 'Kalca dusmesin, duz tutun', en: 'Don\'t let hips drop, keep aligned', fr: 'Don\'t let hips drop, keep aligned', de: 'Lass die Hüfte nicht fallen, bleibe ausgerichtet' }],
    mistakes: [{ tr: 'Kalcayi dusurme', en: 'Letting hips sag', fr: 'Letting hips sag', de: 'Letting hips sag' }],
  },
  v_up: {
    difficulty: 'hard',
    media: { startImage: IMG.leg_raise[0], endImage: IMG.crunch[1] },
    targetMuscles: [{ tr: 'Karin', en: 'Abs', fr: 'Abs', de: 'Hüftbeuger' }],
    steps: [
      { tr: 'Sirt ustu uzanin, kollar ve bacaklar duz', en: 'Lie on back, arms and legs extended', fr: 'Lie on back, arms and legs extended', de: 'Lie on back, arms and legs extended' },
      { tr: 'Ayni anda kollar ve bacaklari yukari kaldirin', en: 'Simultaneously raise arms and legs', fr: 'Simultaneously raise arms and legs', de: 'Simultaneously raise arms and legs' },
      { tr: 'V sekli olusturun, elleri ayaklara yaklastirin', en: 'Form a V shape, hands reaching toward feet', fr: 'Form a V shape, hands reaching toward feet', de: 'Form a V shape, hands reaching toward feet' },
      { tr: 'Kontrol ile inin', en: 'Lower with control', fr: 'Redescendez avec contrôle', de: 'Kontrolliert ablassen' },
    ],
    tips: [{ tr: 'Hareket boyunca bacaklari duz tutun', en: 'Keep legs straight throughout', fr: 'Keep legs straight throughout', de: 'Keep legs straight throughout' }],
    mistakes: [{ tr: 'Momentum kullanmak', en: 'Using momentum instead of abs', fr: 'Using momentum instead of abs', de: 'Using momentum instead of abs' }],
  },
  flutter_kick: {
    difficulty: 'easy',
    media: { startImage: IMG.leg_raise[0], endImage: IMG.leg_raise[1] },
    targetMuscles: [{ tr: 'Alt Karin', en: 'Lower Abs', fr: 'Lower Abs', de: 'Hüftbeuger' }],
    steps: [
      { tr: 'Sirt ustu yatin, elleri kalcanizin altina koyun', en: 'Lie on back, hands under hips', fr: 'Lie on back, hands under hips', de: 'Lie on back, hands under hips' },
      { tr: 'Bacaklarinizi yerden hafif kaldirin', en: 'Lift legs slightly off the ground', fr: 'Lift legs slightly off the ground', de: 'Lift legs slightly off the ground' },
      { tr: 'Bacaklari sirayla yukari asagi hareket ettirin', en: 'Alternate kicking legs up and down', fr: 'Alternate kicking legs up and down', de: 'Alternate kicking legs up and down' },
      { tr: 'Hizli ve kucuk hareketlerle devam edin', en: 'Continue with fast, small movements', fr: 'Continue with fast, small movements', de: 'Continue with fast, small movements' },
    ],
    tips: [{ tr: 'Beli yere bastirim', en: 'Press lower back into the floor', fr: 'Pressez le bas du dos contre le sol', de: 'Drücke den unteren Rücken auf den Boden' }],
    mistakes: [{ tr: 'Beli yerden kaldirmak', en: 'Arching lower back', fr: 'Arching lower back', de: 'Arching lower back' }],
  },

  // ====== NEW CARDIO EXERCISES ======
  skater_jump: {
    difficulty: 'medium',
    media: { startImage: IMG.jump_squat[0], endImage: IMG.jump_squat[1] },
    targetMuscles: [{ tr: 'Bacaklar', en: 'Legs', fr: 'Legs', de: 'Cardiovascular' }],
    steps: [
      { tr: 'Tek ayak ustunde durun', en: 'Stand on one leg', fr: 'Stand on one leg', de: 'Stand on one leg' },
      { tr: 'Yana dogru ziplayin', en: 'Jump laterally to the side', fr: 'Jump laterally to the side', de: 'Jump laterally to the side' },
      { tr: 'Diger ayaginizla inis yapin', en: 'Land on the other foot', fr: 'Land on the other foot', de: 'Land on the other foot' },
      { tr: 'Hemen diger tarafa ziplayin', en: 'Immediately jump to the other side', fr: 'Immediately jump to the other side', de: 'Immediately jump to the other side' },
    ],
    tips: [{ tr: 'Patinajci gibi akin, yumusak inis yapin', en: 'Flow like a skater, land softly', fr: 'Flow like a skater, land softly', de: 'Flow like a skater, land softly' }],
    mistakes: [{ tr: 'Sert inis yapmak', en: 'Landing hard', fr: 'Landing hard', de: 'Landing hard' }],
  },
  box_jump: {
    difficulty: 'hard',
    media: { startImage: IMG.jump_squat[0], endImage: IMG.jump_squat[1] },
    targetMuscles: [{ tr: 'Bacaklar', en: 'Legs', fr: 'Legs', de: 'Explosive Power' }],
    steps: [
      { tr: 'Bir kutunun veya saglam yuzeyiin onunde durun', en: 'Stand in front of a box or sturdy surface', fr: 'Stand in front of a box or sturdy surface', de: 'Stand in front of a box or sturdy surface' },
      { tr: 'Dizlerinizi bukerek hazirlaniIn', en: 'Bend knees to load up', fr: 'Bend knees to load up', de: 'Bend knees to load up' },
      { tr: 'Patlayici sekilde ziplayin', en: 'Explosively jump onto the box', fr: 'Explosively jump onto the box', de: 'Explosively jump onto the box' },
      { tr: 'Yumusak inis yapin, ayaga kalkIn', en: 'Land softly, stand up fully', fr: 'Land softly, stand up fully', de: 'Land softly, stand up fully' },
    ],
    tips: [{ tr: 'Alc bir yukseklikle baslayin', en: 'Start with a low height', fr: 'Start with a low height', de: 'Start with a low height' }],
    mistakes: [{ tr: 'Yuzeyden dusme riski, dikkatli olun', en: 'Risk of falling, be careful', fr: 'Risk of falling, be careful', de: 'Risk of falling, be careful' }],
  },
  tuck_jump: {
    difficulty: 'hard',
    media: { startImage: IMG.jump_squat[0], endImage: IMG.jump_squat[1] },
    targetMuscles: [{ tr: 'Bacaklar', en: 'Legs', fr: 'Legs', de: 'Rumpf' }],
    steps: [
      { tr: 'Dik durun, dizleri hafif bukun', en: 'Stand tall, slightly bend knees', fr: 'Stand tall, slightly bend knees', de: 'Stand tall, slightly bend knees' },
      { tr: 'Patlayici sekilde ziplayin', en: 'Explosively jump up', fr: 'Sautez explosivément', de: 'Springe explosiv hoch' },
      { tr: 'Havadayken dizleri gogsunuze cekin', en: 'Bring knees to chest while in the air', fr: 'Bring knees to chest while in the air', de: 'Bring knees to chest while in the air' },
      { tr: 'Yumusak inis yapin', en: 'Land softly', fr: 'Land softly', de: 'Land softly' },
    ],
    tips: [{ tr: 'Inis sirasinda dizleri hafif bukuk tutun', en: 'Keep knees slightly bent on landing', fr: 'Keep knees slightly bent on landing', de: 'Keep knees slightly bent on landing' }],
    mistakes: [{ tr: 'Sert inis yapmak', en: 'Landing with stiff legs', fr: 'Landing with stiff legs', de: 'Landing with stiff legs' }],
  },
  sprint_in_place: {
    difficulty: 'medium',
    media: { startImage: IMG.high_knees[0], endImage: IMG.high_knees[1] },
    targetMuscles: [{ tr: 'Kardiyovaskuler', en: 'Cardiovascular', fr: 'Cardiovascular', de: 'Beine' }],
    steps: [
      { tr: 'Dik durun', en: 'Stand tall', fr: 'Stand tall', de: 'Stand tall' },
      { tr: 'Yerinde maksimum hizda kosmaya baslayin', en: 'Start running in place at maximum speed', fr: 'Start running in place at maximum speed', de: 'Start running in place at maximum speed' },
      { tr: 'Kollarinizi da hizla sallayIn', en: 'Pump arms fast', fr: 'Pump arms fast', de: 'Pump arms fast' },
      { tr: 'Sure boyunca hizi koruyun', en: 'Maintain speed for the duration', fr: 'Maintain speed for the duration', de: 'Maintain speed for the duration' },
    ],
    tips: [{ tr: 'Tam efor verin, kisa sureli', en: 'Give full effort, it\'s short', fr: 'Give full effort, it\'s short', de: 'Gib alles, es ist kurz' }],
    mistakes: [{ tr: 'Ayaklari yeterince kaldirmamak', en: 'Not lifting feet high enough', fr: 'Not lifting feet high enough', de: 'Not lifting feet high enough' }],
  },
  bear_crawl: {
    difficulty: 'medium',
    media: { startImage: IMG.mountain_climber[0], endImage: IMG.mountain_climber[1] },
    targetMuscles: [{ tr: 'Tam Vucut', en: 'Full Body', fr: 'Full Body', de: 'Rumpf' }],
    steps: [
      { tr: 'Elleriniz ve ayaklariniz uzerinde durun, dizler yerden kalkmis', en: 'Get on hands and feet, knees hovering off ground', fr: 'Get on hands and feet, knees hovering off ground', de: 'Get on hands and feet, knees hovering off ground' },
      { tr: 'Karsi el ve ayak ile ileri yuruyun', en: 'Walk forward with opposite hand and foot', fr: 'Walk forward with opposite hand and foot', de: 'Walk forward with opposite hand and foot' },
      { tr: 'Dizler yerden 5cm yukarda kalmali', en: 'Keep knees about 2 inches off the ground', fr: 'Keep knees about 2 inches off the ground', de: 'Keep knees about 2 inches off the ground' },
      { tr: 'Sure boyunca devam edin', en: 'Continue for the duration', fr: 'Continue for the duration', de: 'Continue for the duration' },
    ],
    tips: [{ tr: 'Sirt duz, kalca asagi kalmali', en: 'Keep back flat and hips low', fr: 'Keep back flat and hips low', de: 'Keep back flat and hips low' }],
    mistakes: [{ tr: 'Kalcayi yukari kaldirmak', en: 'Raising hips too high', fr: 'Raising hips too high', de: 'Raising hips too high' }],
  },

  // ====== EXTRA PUSH ======
  staggered_push_up: {
    difficulty: 'medium', media: { startImage: IMG.push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Trizeps' }],
    steps: [
      { tr: 'Push-up pozisyonunda bir eli one bir eli arkaya koyun', en: 'Push-up position with one hand forward, one back', fr: 'Push-up position with one hand forward, one back', de: 'Push-up position with one hand forward, one back' },
      { tr: 'Asagi inin ve yukari itin', en: 'Lower down and push back up', fr: 'Lower down and push back up', de: 'Lower down and push back up' },
      { tr: 'Seti bitirince el pozisyonlarini degistirin', en: 'Switch hand positions after set', fr: 'Switch hand positions after set', de: 'Switch hand positions after set' },
    ],
    tips: [{ tr: 'Her iki taraf icin esit tekrar yapin', en: 'Do equal reps for both sides', fr: 'Do equal reps for both sides', de: 'Do equal reps for both sides' }],
    mistakes: [{ tr: 'Govdeyi donerme', en: 'Rotating the torso', fr: 'Rotating the torso', de: 'Rotating the torso' }],
  },
  spiderman_push_up: {
    difficulty: 'hard', media: { startImage: IMG.push_up[0], endImage: IMG.mountain_climber[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Schräge Bauchmuskeln' }],
    steps: [
      { tr: 'Push-up pozisyonunda baslayin', en: 'Start in push-up position', fr: 'Commencez en position de pompe', de: 'Starte in der Liegestützposition' },
      { tr: 'Inerken bir dizinizi dirseginize cekin', en: 'As you lower, bring knee to elbow', fr: 'As you lower, bring knee to elbow', de: 'As you lower, bring knee to elbow' },
      { tr: 'Yukari cikarken bacagi geri getirin', en: 'Return leg as you push up', fr: 'Return leg as you push up', de: 'Return leg as you push up' },
      { tr: 'Diger tarafla tekrar', en: 'Repeat other side', fr: 'Repeat other side', de: 'Repeat other side' },
    ],
    tips: [{ tr: 'Core kaslarini siki tutun', en: 'Keep core tight throughout', fr: 'Gardez les abdominaux serrés tout du long', de: 'Halte den Rumpf durchgehend angespannt' }],
    mistakes: [{ tr: 'Kalcayi dusurme', en: 'Letting hips drop', fr: 'Letting hips drop', de: 'Letting hips drop' }],
  },
  elevated_pike_press: {
    difficulty: 'hard', media: { startImage: IMG.pike_push_up[0], endImage: IMG.pike_push_up[1] },
    targetMuscles: [{ tr: 'Omuzlar', en: 'Shoulders', fr: 'Shoulders', de: 'Trizeps' }],
    steps: [
      { tr: 'Ayaklari banka koyup pike pozisyonuna gecin', en: 'Place feet on bench and get into pike position', fr: 'Place feet on bench and get into pike position', de: 'Place feet on bench and get into pike position' },
      { tr: 'Basini yere dogru indirin', en: 'Lower head toward floor', fr: 'Lower head toward floor', de: 'Lower head toward floor' },
      { tr: 'Yukari itin', en: 'Press back up', fr: 'Press back up', de: 'Press back up' },
    ],
    tips: [{ tr: 'Handstand push-up a gecis icin ideal', en: 'Great transition to handstand push-ups', fr: 'Great transition to handstand push-ups', de: 'Great transition to handstand push-ups' }],
    mistakes: [{ tr: 'Sirti yuvarlak tutmak', en: 'Rounding the back', fr: 'Arrondir le dos', de: 'Den Rücken runden' }],
  },
  explosive_push_up: {
    difficulty: 'hard', media: { startImage: IMG.push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Trizeps' }],
    steps: [
      { tr: 'Normal push-up pozisyonunda baslayin', en: 'Start in normal push-up position', fr: 'Start in normal push-up position', de: 'Start in normal push-up position' },
      { tr: 'Patlayici sekilde itin, eller yerden kalksin', en: 'Push explosively, hands leave ground', fr: 'Push explosively, hands leave ground', de: 'Push explosively, hands leave ground' },
      { tr: 'Yumusak inis yapin', en: 'Land softly', fr: 'Land softly', de: 'Land softly' },
    ],
    tips: [{ tr: 'Guc ve hiz gelistirir', en: 'Develops power and speed', fr: 'Develops power and speed', de: 'Develops power and speed' }],
    mistakes: [{ tr: 'Sert inis yapmak', en: 'Landing hard on wrists', fr: 'Landing hard on wrists', de: 'Landing hard on wrists' }],
  },
  chest_squeeze: {
    difficulty: 'easy', media: { startImage: IMG.push_up[0], endImage: IMG.plank[0] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Poitrine', de: 'Brust' }],
    steps: [
      { tr: 'Dik durun, avuc iclerini gogus hizasinda birlestirin', en: 'Stand, press palms together at chest height', fr: 'Stand, press palms together at chest height', de: 'Stand, press palms together at chest height' },
      { tr: 'Maksimum gucle birbirine basin', en: 'Press together with maximum force', fr: 'Press together with maximum force', de: 'Press together with maximum force' },
      { tr: 'Pozisyonu tutun', en: 'Hold the position', fr: 'Hold the position', de: 'Hold the position' },
    ],
    tips: [{ tr: 'Nefes almaya devam edin', en: 'Keep breathing', fr: 'Keep breathing', de: 'Keep breathing' }],
    mistakes: [{ tr: 'Omuzlari kaldirmak', en: 'Raising shoulders', fr: 'Raising shoulders', de: 'Raising shoulders' }],
  },
  overhead_tricep_ext: {
    difficulty: 'easy', media: { startImage: IMG.dips[0], endImage: IMG.dips[1] },
    targetMuscles: [{ tr: 'Triceps', en: 'Triceps', fr: 'Triceps', de: 'Trizeps' }],
    steps: [
      { tr: 'Kollarinizi basinizin uzerine kaldirin', en: 'Raise arms overhead', fr: 'Raise arms overhead', de: 'Raise arms overhead' },
      { tr: 'Dirseklerden bukerek elleri enseye indirin', en: 'Bend at elbows, lower hands behind head', fr: 'Bend at elbows, lower hands behind head', de: 'Bend at elbows, lower hands behind head' },
      { tr: 'Kollari duzlestirerek geri kaldirin', en: 'Extend arms back up', fr: 'Extend arms back up', de: 'Extend arms back up' },
    ],
    tips: [{ tr: 'Ust kol sabit kalmali', en: 'Upper arms should stay still', fr: 'Upper arms should stay still', de: 'Upper arms should stay still' }],
    mistakes: [{ tr: 'Dirsekleri yana acmak', en: 'Flaring elbows out', fr: 'Écarter les coudes', de: 'Ellbogen abspreizen' }],
  },
  incline_push_up: {
    difficulty: 'easy', media: { startImage: IMG.push_up[0], endImage: IMG.push_up[1] },
    targetMuscles: [{ tr: 'Alt Gogus', en: 'Lower Chest', fr: 'Lower Chest', de: 'Trizeps' }],
    steps: [
      { tr: 'Ellerinizi bank veya duvara koyun', en: 'Place hands on bench or wall', fr: 'Place hands on bench or wall', de: 'Place hands on bench or wall' },
      { tr: 'Vucudu duz tutarak inin', en: 'Lower body keeping it straight', fr: 'Lower body keeping it straight', de: 'Lower body keeping it straight' },
      { tr: 'Yukari itin', en: 'Push back up', fr: 'Poussez vers le haut', de: 'Drücke dich wieder hoch' },
    ],
    tips: [{ tr: 'Baslayanlar icin push-up ogrenmede ideal', en: 'Ideal for beginners learning push-ups', fr: 'Ideal for beginners learning push-ups', de: 'Ideal for beginners learning push-ups' }],
    mistakes: [{ tr: 'Beli dusurme', en: 'Letting back sag', fr: 'Letting back sag', de: 'Letting back sag' }],
  },
  typewriter_push_up: {
    difficulty: 'hard', media: { startImage: IMG.wide_push_up[0], endImage: IMG.wide_push_up[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Schultern' }],
    steps: [
      { tr: 'Genis push-up pozisyonunda inin', en: 'Lower in wide push-up position', fr: 'Lower in wide push-up position', de: 'Lower in wide push-up position' },
      { tr: 'Asagidayken bir tarafa kayIn', en: 'At the bottom, shift to one side', fr: 'At the bottom, shift to one side', de: 'At the bottom, shift to one side' },
      { tr: 'Diger tarafa kayIn', en: 'Shift to the other side', fr: 'Shift to the other side', de: 'Shift to the other side' },
      { tr: 'Yukari itin', en: 'Push back up', fr: 'Poussez vers le haut', de: 'Drücke dich wieder hoch' },
    ],
    tips: [{ tr: 'Ileri seviye icin, once genis push-up da guclenin', en: 'Advanced move, master wide push-ups first', fr: 'Advanced move, master wide push-ups first', de: 'Advanced move, master wide push-ups first' }],
    mistakes: [{ tr: 'Kalcayi dusurme', en: 'Dropping hips', fr: 'Dropping hips', de: 'Dropping hips' }],
  },

  // ====== EXTRA PULL ======
  commando_pull_up: {
    difficulty: 'hard', media: { startImage: IMG.pull_up[0], endImage: IMG.pull_up[1] },
    targetMuscles: [{ tr: 'Sirt', en: 'Back', fr: 'Back', de: 'Bizeps' }],
    steps: [
      { tr: 'Bara uzunlamasina durun, elleri birbirine yakin tutun', en: 'Stand parallel to bar, hands close together', fr: 'Stand parallel to bar, hands close together', de: 'Stand parallel to bar, hands close together' },
      { tr: 'Basinizi barin bir tarafina dogru cekin', en: 'Pull head to one side of bar', fr: 'Pull head to one side of bar', de: 'Pull head to one side of bar' },
      { tr: 'Inin ve diger tarafa cekin', en: 'Lower and pull to other side', fr: 'Lower and pull to other side', de: 'Lower and pull to other side' },
    ],
    tips: [{ tr: 'Govde stabilitesi calisir', en: 'Works core stability too', fr: 'Works core stability too', de: 'Works core stability too' }],
    mistakes: [{ tr: 'Vucudu sallamak', en: 'Swinging the body', fr: 'Balancer le corps', de: 'Den Körper schwingen' }],
  },
  scapula_pull_up: {
    difficulty: 'easy', media: { startImage: IMG.pull_up[0], endImage: IMG.pull_up[1] },
    targetMuscles: [{ tr: 'Ust Sirt', en: 'Upper Back', fr: 'Upper Back', de: 'Scapula' }],
    steps: [
      { tr: 'Bardan asili kalin, kollar duz', en: 'Hang from bar, arms straight', fr: 'Hang from bar, arms straight', de: 'Hang from bar, arms straight' },
      { tr: 'Kol bukmeden kurek kemiklerini geriye cekin', en: 'Retract shoulder blades without bending arms', fr: 'Retract shoulder blades without bending arms', de: 'Retract shoulder blades without bending arms' },
      { tr: 'Yavasca birakIn', en: 'Slowly release', fr: 'Slowly release', de: 'Slowly release' },
    ],
    tips: [{ tr: 'Pull-up icin temel kuvvet olusturur', en: 'Builds foundational pull-up strength', fr: 'Builds foundational pull-up strength', de: 'Builds foundational pull-up strength' }],
    mistakes: [{ tr: 'Kollari bukmek', en: 'Bending the arms', fr: 'Bending the arms', de: 'Bending the arms' }],
  },
  band_pull_apart: {
    difficulty: 'easy', media: { startImage: IMG.inverted_row[0], endImage: IMG.inverted_row[1] },
    targetMuscles: [{ tr: 'Arka Omuz', en: 'Rear Delts', fr: 'Rear Delts', de: 'Oberer Rücken' }],
    steps: [
      { tr: 'Banti omuz genisliginde tutun', en: 'Hold band at shoulder width', fr: 'Hold band at shoulder width', de: 'Hold band at shoulder width' },
      { tr: 'Kollari duz tutarak banti yana acin', en: 'Pull band apart keeping arms straight', fr: 'Pull band apart keeping arms straight', de: 'Pull band apart keeping arms straight' },
      { tr: 'Kurek kemiklerini sikin', en: 'Squeeze shoulder blades', fr: 'Squeeze shoulder blades', de: 'Squeeze shoulder blades' },
      { tr: 'Yavasca geri getirin', en: 'Slowly return', fr: 'Slowly return', de: 'Slowly return' },
    ],
    tips: [{ tr: 'Isinma ve durus duzeltme icin ideal', en: 'Great for warm-up and posture correction', fr: 'Great for warm-up and posture correction', de: 'Great for warm-up and posture correction' }],
    mistakes: [{ tr: 'Omuzlari kaldirmak', en: 'Shrugging shoulders up', fr: 'Shrugging shoulders up', de: 'Shrugging shoulders up' }],
  },
  prone_y_raise: {
    difficulty: 'easy', media: { startImage: IMG.superman[0], endImage: IMG.superman[1] },
    targetMuscles: [{ tr: 'Ust Sirt', en: 'Upper Back', fr: 'Upper Back', de: 'Traps' }],
    steps: [
      { tr: 'Yuzustu yatin', en: 'Lie face down', fr: 'Lie face down', de: 'Lie face down' },
      { tr: 'Kollarinizi Y seklinde acin', en: 'Extend arms into Y position', fr: 'Extend arms into Y position', de: 'Extend arms into Y position' },
      { tr: 'Kollarini yerden kaldirin', en: 'Raise arms off the ground', fr: 'Raise arms off the ground', de: 'Raise arms off the ground' },
      { tr: 'Yavasca indirin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [{ tr: 'Boynu notr tutun', en: 'Keep neck neutral', fr: 'Keep neck neutral', de: 'Keep neck neutral' }],
    mistakes: [{ tr: 'Boynu asiri uzatmak', en: 'Overextending the neck', fr: 'Overextending the neck', de: 'Overextending the neck' }],
  },
  isometric_curl: {
    difficulty: 'easy', media: { startImage: IMG.chin_up[0], endImage: IMG.chin_up[1] },
    targetMuscles: [{ tr: 'Biceps', en: 'Biceps', fr: 'Biceps', de: 'Bizeps' }],
    steps: [
      { tr: 'Kapi pervazini veya sabit bir yeri tutun', en: 'Grip a doorframe or immovable object', fr: 'Grip a doorframe or immovable object', de: 'Grip a doorframe or immovable object' },
      { tr: 'Kolunuzu 90 derece bukun', en: 'Bend arm to 90 degrees', fr: 'Bend arm to 90 degrees', de: 'Bend arm to 90 degrees' },
      { tr: 'Maksimum gucle curll yapmaya calisin', en: 'Try to curl with maximum force', fr: 'Try to curl with maximum force', de: 'Try to curl with maximum force' },
      { tr: 'Pozisyonu tutun', en: 'Hold the position', fr: 'Hold the position', de: 'Hold the position' },
    ],
    tips: [{ tr: 'Her iki kol icin esit sure tutun', en: 'Hold equal time for both arms', fr: 'Hold equal time for both arms', de: 'Hold equal time for both arms' }],
    mistakes: [{ tr: 'Vucudu kullanarak aldatma', en: 'Using body momentum to cheat', fr: 'Using body momentum to cheat', de: 'Using body momentum to cheat' }],
  },
  single_arm_row: {
    difficulty: 'medium', media: { startImage: IMG.inverted_row[0], endImage: IMG.inverted_row[1] },
    targetMuscles: [{ tr: 'Sirt (Lat)', en: 'Lats', fr: 'Lats', de: 'Bizeps' }],
    steps: [
      { tr: 'One egilin, bir elinizi dizinize koyun', en: 'Bend over, one hand on knee', fr: 'Bend over, one hand on knee', de: 'Bend over, one hand on knee' },
      { tr: 'Diger elle asagi dogru sarkIn', en: 'Let other arm hang down', fr: 'Let other arm hang down', de: 'Let other arm hang down' },
      { tr: 'Dirseginizi geri cekerek kaldirin', en: 'Pull elbow back and up', fr: 'Pull elbow back and up', de: 'Pull elbow back and up' },
      { tr: 'Kontrol ile indirin', en: 'Lower with control', fr: 'Redescendez avec contrôle', de: 'Kontrolliert ablassen' },
    ],
    tips: [{ tr: 'Sirti duz tutun', en: 'Keep back flat', fr: 'Keep back flat', de: 'Keep back flat' }],
    mistakes: [{ tr: 'Govdeyi donerme', en: 'Rotating the torso', fr: 'Rotating the torso', de: 'Rotating the torso' }],
  },
  australian_pull_up: {
    difficulty: 'medium', media: { startImage: IMG.inverted_row[0], endImage: IMG.inverted_row[1] },
    targetMuscles: [{ tr: 'Ust Sirt', en: 'Upper Back', fr: 'Upper Back', de: 'Bizeps' }],
    steps: [
      { tr: 'Alcak bardan asili kalin, ayaklar yukarda', en: 'Hang from low bar with feet elevated', fr: 'Hang from low bar with feet elevated', de: 'Hang from low bar with feet elevated' },
      { tr: 'Gogsunuzu bara cekin', en: 'Pull chest to bar', fr: 'Pull chest to bar', de: 'Pull chest to bar' },
      { tr: 'Kontrol ile inin', en: 'Lower with control', fr: 'Redescendez avec contrôle', de: 'Kontrolliert ablassen' },
    ],
    tips: [{ tr: 'Ayak yuksekligini arttirarak zorlastirin', en: 'Elevate feet to increase difficulty', fr: 'Elevate feet to increase difficulty', de: 'Elevate feet to increase difficulty' }],
    mistakes: [{ tr: 'Kalcayi bukmek', en: 'Bending at the hips', fr: 'Bending at the hips', de: 'Bending at the hips' }],
  },
  back_extension: {
    difficulty: 'easy', media: { startImage: IMG.superman[0], endImage: IMG.superman[1] },
    targetMuscles: [{ tr: 'Alt Sirt', en: 'Lower Back', fr: 'Lower Back', de: 'Gesäß' }],
    steps: [
      { tr: 'Bank kenarinda yuzustu pozisyon alin', en: 'Position face down over bench edge', fr: 'Position face down over bench edge', de: 'Position face down over bench edge' },
      { tr: 'Govdenizi asagi sarkitin', en: 'Lower your torso down', fr: 'Lower your torso down', de: 'Lower your torso down' },
      { tr: 'Sirti sikarak yukari kaldirin', en: 'Raise torso by squeezing back', fr: 'Raise torso by squeezing back', de: 'Raise torso by squeezing back' },
      { tr: 'Tepede 1 saniye tutun', en: 'Hold at top for 1 second', fr: 'Maintenez en haut 1 seconde', de: 'Halte oben für 1 Sekunde' },
    ],
    tips: [{ tr: 'Asiri uzatmayin, notr pozisyona kadar yeter', en: 'Don\'t hyperextend, neutral is enough', fr: 'Don\'t hyperextend, neutral is enough', de: 'Nicht überstrecken, neutral reicht' }],
    mistakes: [{ tr: 'Beli asiri uzatmak', en: 'Hyperextending the lower back', fr: 'Hyperextending the lower back', de: 'Hyperextending the lower back' }],
  },

  // ====== EXTRA LEGS ======
  curtsy_lunge: {
    difficulty: 'medium', media: { startImage: IMG.lunge[0], endImage: IMG.lunge[1] },
    targetMuscles: [{ tr: 'Gluteus', en: 'Glutes', fr: 'Glutes', de: 'Innere Oberschenkel' }],
    steps: [
      { tr: 'Dik durun', en: 'Stand tall', fr: 'Stand tall', de: 'Stand tall' },
      { tr: 'Bir bacaginizi diger bacaginizin arkasina capraz atin', en: 'Step one leg behind and across the other', fr: 'Step one leg behind and across the other', de: 'Step one leg behind and across the other' },
      { tr: 'Her iki diz 90 derece olana kadar inin', en: 'Lower until both knees at 90 degrees', fr: 'Lower until both knees at 90 degrees', de: 'Lower until both knees at 90 degrees' },
      { tr: 'Geri donun', en: 'Return to start', fr: 'Return to start', de: 'Return to start' },
    ],
    tips: [{ tr: 'Denge icin bir noktaya odaklanin', en: 'Focus on a point for balance', fr: 'Focus on a point for balance', de: 'Focus on a point for balance' }],
    mistakes: [{ tr: 'On dizi ici tarafa dusurme', en: 'Letting front knee cave inward', fr: 'Letting front knee cave inward', de: 'Letting front knee cave inward' }],
  },
  sissy_squat: {
    difficulty: 'hard', media: { startImage: IMG.squat[0], endImage: IMG.squat[1] },
    targetMuscles: [{ tr: 'On Bacak (Quads)', en: 'Quads', fr: 'Quadriceps', de: 'Quadrizeps' }],
    steps: [
      { tr: 'Dik durun, topuklarinizi yere basin', en: 'Stand, press heels into ground', fr: 'Stand, press heels into ground', de: 'Stand, press heels into ground' },
      { tr: 'Dizleri one iterek geriye yaslaniIn', en: 'Push knees forward while leaning back', fr: 'Push knees forward while leaning back', de: 'Push knees forward while leaning back' },
      { tr: 'Topuklarinizi kaldirin', en: 'Raise heels', fr: 'Raise heels', de: 'Raise heels' },
      { tr: 'Yukari geri donun', en: 'Return up', fr: 'Return up', de: 'Return up' },
    ],
    tips: [{ tr: 'Destek tutarak baslayin', en: 'Start by holding onto something', fr: 'Start by holding onto something', de: 'Start by holding onto something' }],
    mistakes: [{ tr: 'Dengeyi kaybetmek', en: 'Losing balance', fr: 'Losing balance', de: 'Losing balance' }],
  },
  single_leg_deadlift: {
    difficulty: 'medium', media: { startImage: IMG.glute_bridge[0], endImage: IMG.lunge[0] },
    targetMuscles: [{ tr: 'Arka Bacak', en: 'Hamstrings', fr: 'Hamstrings', de: 'Gesäß' }],
    steps: [
      { tr: 'Tek ayak ustunde durun', en: 'Stand on one leg', fr: 'Stand on one leg', de: 'Stand on one leg' },
      { tr: 'One egilirken diger bacaginizi arkaya kaldirin', en: 'Hinge forward, raise other leg behind', fr: 'Hinge forward, raise other leg behind', de: 'Hinge forward, raise other leg behind' },
      { tr: 'Elleriniz yere dogru uzansin', en: 'Reach hands toward floor', fr: 'Reach hands toward floor', de: 'Reach hands toward floor' },
      { tr: 'Yukari donun', en: 'Return to standing', fr: 'Return to standing', de: 'Return to standing' },
    ],
    tips: [{ tr: 'Sirt duz kalmali', en: 'Keep back flat', fr: 'Keep back flat', de: 'Keep back flat' }],
    mistakes: [{ tr: 'Sirti yuvarlak tutmak', en: 'Rounding the back', fr: 'Arrondir le dos', de: 'Den Rücken runden' }],
  },
  donkey_kick: {
    difficulty: 'easy', media: { startImage: IMG.glute_bridge[0], endImage: IMG.glute_bridge[1] },
    targetMuscles: [{ tr: 'Gluteus', en: 'Glutes', fr: 'Fessiers', de: 'Gesäß' }],
    steps: [
      { tr: 'Dort ayak pozisyonuna gecin', en: 'Get on all fours', fr: 'Get on all fours', de: 'Get on all fours' },
      { tr: 'Bir bacaginizi yukari dogru tekme atin', en: 'Kick one leg up toward ceiling', fr: 'Kick one leg up toward ceiling', de: 'Kick one leg up toward ceiling' },
      { tr: 'Tepede sikin', en: 'Squeeze at the top', fr: 'Squeeze at the top', de: 'Squeeze at the top' },
      { tr: 'Yavasca indirin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [{ tr: 'Hareket kalcadan gelmeli', en: 'Movement should come from the hip', fr: 'Movement should come from the hip', de: 'Movement should come from the hip' }],
    mistakes: [{ tr: 'Beli asiri uzatmak', en: 'Hyperextending lower back', fr: 'Hyperextending lower back', de: 'Hyperextending lower back' }],
  },
  fire_hydrant: {
    difficulty: 'easy', media: { startImage: IMG.glute_bridge[0], endImage: IMG.glute_bridge[1] },
    targetMuscles: [{ tr: 'Gluteus Medius', en: 'Glute Medius', fr: 'Glute Medius', de: 'Hip' }],
    steps: [
      { tr: 'Dort ayak pozisyonunda baslayin', en: 'Start on all fours', fr: 'Start on all fours', de: 'Start on all fours' },
      { tr: 'Dizinizi bukuk tutarak bacagi yana kaldirin', en: 'Raise bent leg out to the side', fr: 'Raise bent leg out to the side', de: 'Raise bent leg out to the side' },
      { tr: 'Tepede tutun', en: 'Hold at the top', fr: 'Hold at the top', de: 'Hold at the top' },
      { tr: 'Yavasca indirin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [{ tr: 'Govde sabit kalmali', en: 'Keep torso stable', fr: 'Keep torso stable', de: 'Keep torso stable' }],
    mistakes: [{ tr: 'Govdeyi tarafa yaslamak', en: 'Leaning torso to the side', fr: 'Leaning torso to the side', de: 'Leaning torso to the side' }],
  },
  frog_squat: {
    difficulty: 'easy', media: { startImage: IMG.squat[0], endImage: IMG.squat[1] },
    targetMuscles: [{ tr: 'On Bacak', en: 'Quads', fr: 'Quads', de: 'Innere Oberschenkel' }],
    steps: [
      { tr: 'Genis durarak ayak uclarini disa cevirIn', en: 'Wide stance, toes pointed out', fr: 'Wide stance, toes pointed out', de: 'Wide stance, toes pointed out' },
      { tr: 'Derin squat yapin, elleriniz yere degsin', en: 'Deep squat, touch floor with hands', fr: 'Deep squat, touch floor with hands', de: 'Deep squat, touch floor with hands' },
      { tr: 'Patlayici yukari kalkin', en: 'Explosively stand up', fr: 'Explosively stand up', de: 'Explosively stand up' },
    ],
    tips: [{ tr: 'Dizleri ayak uclarinin yonunde tutun', en: 'Keep knees tracking over toes', fr: 'Keep knees tracking over toes', de: 'Keep knees tracking over toes' }],
    mistakes: [{ tr: 'Dizleri ice bukmek', en: 'Knees caving inward', fr: 'Knees caving inward', de: 'Knees caving inward' }],
  },
  nordic_curl: {
    difficulty: 'hard', media: { startImage: IMG.glute_bridge[0], endImage: IMG.lunge[1] },
    targetMuscles: [{ tr: 'Arka Bacak', en: 'Hamstrings', fr: 'Ischio-jambiers', de: 'Beinbeuger' }],
    steps: [
      { tr: 'Diz ustunde durun, ayaklariniz sabitlenmis', en: 'Kneel with feet anchored', fr: 'Kneel with feet anchored', de: 'Kneel with feet anchored' },
      { tr: 'Govdenizi yavasca one dogru indirin', en: 'Slowly lower body forward', fr: 'Slowly lower body forward', de: 'Slowly lower body forward' },
      { tr: 'Arka bacak kaslariyla frenlein', en: 'Use hamstrings to brake the descent', fr: 'Use hamstrings to brake the descent', de: 'Use hamstrings to brake the descent' },
      { tr: 'Kendinizi geri itin veya cekin', en: 'Push or pull yourself back up', fr: 'Push or pull yourself back up', de: 'Push or pull yourself back up' },
    ],
    tips: [{ tr: 'En zor arka bacak hareketi, yavas ilerleyin', en: 'Hardest hamstring exercise, progress slowly', fr: 'Hardest hamstring exercise, progress slowly', de: 'Hardest hamstring exercise, progress slowly' }],
    mistakes: [{ tr: 'Kalcadan krilmak', en: 'Breaking at the hips', fr: 'Breaking at the hips', de: 'Breaking at the hips' }],
  },
  side_lunge: {
    difficulty: 'easy', media: { startImage: IMG.squat[0], endImage: IMG.lunge[1] },
    targetMuscles: [{ tr: 'Ic Bacak', en: 'Inner Thighs', fr: 'Inner Thighs', de: 'Quadrizeps' }],
    steps: [
      { tr: 'Dik durun', en: 'Stand tall', fr: 'Stand tall', de: 'Stand tall' },
      { tr: 'Bir tarafa genis adim atin', en: 'Take a wide step to one side', fr: 'Take a wide step to one side', de: 'Take a wide step to one side' },
      { tr: 'O tarafa cokun, diger bacak duz', en: 'Sink into that side, other leg stays straight', fr: 'Sink into that side, other leg stays straight', de: 'Sink into that side, other leg stays straight' },
      { tr: 'Iterek geri donun', en: 'Push back to center', fr: 'Push back to center', de: 'Push back to center' },
    ],
    tips: [{ tr: 'Gogsu dik tutun', en: 'Keep chest up', fr: 'Keep chest up', de: 'Keep chest up' }],
    mistakes: [{ tr: 'Dizi ayak ucunun ilerisine itmek', en: 'Pushing knee past toes', fr: 'Pushing knee past toes', de: 'Pushing knee past toes' }],
  },

  // ====== EXTRA CORE ======
  hollow_hold: {
    difficulty: 'medium', media: { startImage: IMG.plank[0], endImage: IMG.leg_raise[1] },
    targetMuscles: [{ tr: 'Core', en: 'Core', fr: 'Core', de: 'Bauchmuskeln' }],
    steps: [
      { tr: 'Sirt ustu yatin', en: 'Lie on back', fr: 'Lie on back', de: 'Lie on back' },
      { tr: 'Omuzlari ve bacaklari yerden kaldirin', en: 'Raise shoulders and legs off ground', fr: 'Raise shoulders and legs off ground', de: 'Raise shoulders and legs off ground' },
      { tr: 'Kollari uzatIn, vucudu muz seklinde tutun', en: 'Extend arms, hold banana shape', fr: 'Extend arms, hold banana shape', de: 'Extend arms, hold banana shape' },
      { tr: 'Pozisyonu sure boyunca tutun', en: 'Hold for duration', fr: 'Hold for duration', de: 'Hold for duration' },
    ],
    tips: [{ tr: 'Bel yere basilmis olmali', en: 'Lower back must stay pressed to floor', fr: 'Lower back must stay pressed to floor', de: 'Lower back must stay pressed to floor' }],
    mistakes: [{ tr: 'Beli yerden kaldirmak', en: 'Arching lower back off floor', fr: 'Arching lower back off floor', de: 'Arching lower back off floor' }],
  },
  dragon_flag: {
    difficulty: 'hard', media: { startImage: IMG.leg_raise[0], endImage: IMG.leg_raise[1] },
    targetMuscles: [{ tr: 'Tum Core', en: 'Full Core', fr: 'Full Core', de: 'Full Core' }],
    steps: [
      { tr: 'Bankta sirt ustu yatin, basinizin arkasini tutun', en: 'Lie on bench, grip behind head', fr: 'Lie on bench, grip behind head', de: 'Lie on bench, grip behind head' },
      { tr: 'Vucudu duz tutarak bacaklari yukari kaldirin', en: 'Raise legs keeping body rigid', fr: 'Raise legs keeping body rigid', de: 'Raise legs keeping body rigid' },
      { tr: 'Sadece omuzlariniz bankta olsun', en: 'Only shoulders touch the bench', fr: 'Only shoulders touch the bench', de: 'Only shoulders touch the bench' },
      { tr: 'Yavasca indirin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [{ tr: 'Ileri seviye hareket, once leg raise de guclenin', en: 'Advanced move, master leg raises first', fr: 'Advanced move, master leg raises first', de: 'Advanced move, master leg raises first' }],
    mistakes: [{ tr: 'Kalcadan kirilmak', en: 'Bending at the hips', fr: 'Bending at the hips', de: 'Bending at the hips' }],
  },
  pallof_press: {
    difficulty: 'medium', media: { startImage: IMG.plank[0], endImage: IMG.plank[1] },
    targetMuscles: [{ tr: 'Core', en: 'Core', fr: 'Core', de: 'Schräge Bauchmuskeln' }],
    steps: [
      { tr: 'Banti gogus hizasinda tutun', en: 'Hold band at chest level', fr: 'Hold band at chest level', de: 'Hold band at chest level' },
      { tr: 'Kollarinizi one dogru uzatin', en: 'Press arms straight out', fr: 'Press arms straight out', de: 'Press arms straight out' },
      { tr: 'Donmeye karsi koyin', en: 'Resist the rotation', fr: 'Resist the rotation', de: 'Resist the rotation' },
      { tr: 'Tekrar gogsunuze cekin', en: 'Pull back to chest', fr: 'Pull back to chest', de: 'Pull back to chest' },
    ],
    tips: [{ tr: 'Anti-rotasyon calismasi icin en iyisi', en: 'Best anti-rotation exercise', fr: 'Best anti-rotation exercise', de: 'Best anti-rotation exercise' }],
    mistakes: [{ tr: 'Govdenin donmesine izin vermek', en: 'Allowing the torso to rotate', fr: 'Allowing the torso to rotate', de: 'Allowing the torso to rotate' }],
  },
  plank_shoulder_tap: {
    difficulty: 'medium', media: { startImage: IMG.plank[0], endImage: IMG.push_up[0] },
    targetMuscles: [{ tr: 'Core', en: 'Core', fr: 'Core', de: 'Schultern' }],
    steps: [
      { tr: 'Plank pozisyonunda baslayin', en: 'Start in plank position', fr: 'Start in plank position', de: 'Start in plank position' },
      { tr: 'Bir elinizi kaldirip karsi omuza dokunun', en: 'Lift one hand to tap opposite shoulder', fr: 'Lift one hand to tap opposite shoulder', de: 'Lift one hand to tap opposite shoulder' },
      { tr: 'Geri koyun, diger tarafla tekrar', en: 'Place back, repeat other side', fr: 'Place back, repeat other side', de: 'Place back, repeat other side' },
    ],
    tips: [{ tr: 'Kalcayi sallamadan yapin', en: 'Don\'t rock hips', fr: 'Don\'t rock hips', de: 'Nicht mit der Hüfte schaukeln' }],
    mistakes: [{ tr: 'Kalcayi saga sola sallamak', en: 'Rocking hips side to side', fr: 'Rocking hips side to side', de: 'Rocking hips side to side' }],
  },
  toe_touch: {
    difficulty: 'easy', media: { startImage: IMG.crunch[0], endImage: IMG.crunch[1] },
    targetMuscles: [{ tr: 'Ust Karin', en: 'Upper Abs', fr: 'Abdominaux supérieurs', de: 'Obere Bauchmuskeln' }],
    steps: [
      { tr: 'Sirt ustu yatin, bacaklari dik yukari kaldirin', en: 'Lie on back, raise legs straight up', fr: 'Lie on back, raise legs straight up', de: 'Lie on back, raise legs straight up' },
      { tr: 'Ellerinizi ayak parmaklariniza uzatin', en: 'Reach hands toward toes', fr: 'Reach hands toward toes', de: 'Reach hands toward toes' },
      { tr: 'Omuzlari yerden kaldirin', en: 'Lift shoulders off floor', fr: 'Lift shoulders off floor', de: 'Lift shoulders off floor' },
      { tr: 'Yavasca inin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [{ tr: 'Bacaklar dik kalmali', en: 'Keep legs vertical', fr: 'Keep legs vertical', de: 'Keep legs vertical' }],
    mistakes: [{ tr: 'Boyundan cekmek', en: 'Pulling on the neck', fr: 'Tirer sur le cou', de: 'Am Nacken ziehen' }],
  },
  windshield_wiper: {
    difficulty: 'hard', media: { startImage: IMG.russian_twist[0], endImage: IMG.russian_twist[1] },
    targetMuscles: [{ tr: 'Oblikler', en: 'Obliques', fr: 'Obliques', de: 'Rumpf' }],
    steps: [
      { tr: 'Sirt ustu yatin, bacaklari dik kaldirin', en: 'Lie on back, legs straight up', fr: 'Lie on back, legs straight up', de: 'Lie on back, legs straight up' },
      { tr: 'Kollar yana acik, yere basin', en: 'Arms out to sides, press into floor', fr: 'Arms out to sides, press into floor', de: 'Arms out to sides, press into floor' },
      { tr: 'Bacaklari bir tarafa yavas devirin', en: 'Slowly lower legs to one side', fr: 'Slowly lower legs to one side', de: 'Slowly lower legs to one side' },
      { tr: 'Ortaya getirin, diger tarafa devirin', en: 'Return to center, lower to other side', fr: 'Return to center, lower to other side', de: 'Return to center, lower to other side' },
    ],
    tips: [{ tr: 'Omuzlar yerden kalkmasin', en: 'Keep shoulders on the ground', fr: 'Keep shoulders on the ground', de: 'Keep shoulders on the ground' }],
    mistakes: [{ tr: 'Hareketi cok hizli yapmak', en: 'Moving too fast', fr: 'Bouger trop vite', de: 'Zu schnell bewegen' }],
  },
  ab_wheel_rollout: {
    difficulty: 'hard', media: { startImage: IMG.plank[0], endImage: IMG.superman[1] },
    targetMuscles: [{ tr: 'Core', en: 'Core', fr: 'Core', de: 'Schultern' }],
    steps: [
      { tr: 'Diz ustunde durun, tekerlegi/havluyu onunuze koyun', en: 'Kneel, place wheel/towel in front', fr: 'Kneel, place wheel/towel in front', de: 'Kneel, place wheel/towel in front' },
      { tr: 'Yavasca one dogru uzanin', en: 'Slowly roll/slide forward', fr: 'Slowly roll/slide forward', de: 'Slowly roll/slide forward' },
      { tr: 'Vucudu mumkun oldugunca duzlestirin', en: 'Extend body as far as possible', fr: 'Extend body as far as possible', de: 'Extend body as far as possible' },
      { tr: 'Core kasarak geri donun', en: 'Engage core to pull back', fr: 'Engage core to pull back', de: 'Engage core to pull back' },
    ],
    tips: [{ tr: 'Once kisa mesafe ile baslayin', en: 'Start with short distance first', fr: 'Start with short distance first', de: 'Start with short distance first' }],
    mistakes: [{ tr: 'Beli dusurme', en: 'Letting lower back sag', fr: 'Letting lower back sag', de: 'Letting lower back sag' }],
  },
  hanging_knee_raise: {
    difficulty: 'medium', media: { startImage: IMG.pull_up[0], endImage: IMG.leg_raise[1] },
    targetMuscles: [{ tr: 'Alt Karin', en: 'Lower Abs', fr: 'Lower Abs', de: 'Hüftbeuger' }],
    steps: [
      { tr: 'Bardan asili kalin', en: 'Hang from bar', fr: 'Hang from bar', de: 'Hang from bar' },
      { tr: 'Dizlerinizi gogsunuze dogru cekin', en: 'Raise knees to chest', fr: 'Raise knees to chest', de: 'Raise knees to chest' },
      { tr: 'Tepede sikin', en: 'Squeeze at the top', fr: 'Squeeze at the top', de: 'Squeeze at the top' },
      { tr: 'Yavasca indirin', en: 'Lower slowly', fr: 'Redescendez lentement', de: 'Langsam ablassen' },
    ],
    tips: [{ tr: 'Sallanmayin, kontrollü yapin', en: 'Don\'t swing, stay controlled', fr: 'Don\'t swing, stay controlled', de: 'Nicht schwingen, kontrolliert bleiben' }],
    mistakes: [{ tr: 'Momentum kullanmak', en: 'Using momentum', fr: 'Using momentum', de: 'Using momentum' }],
  },

  // ====== EXTRA CARDIO ======
  mountain_sprint: {
    difficulty: 'hard', media: { startImage: IMG.mountain_climber[0], endImage: IMG.mountain_climber[1] },
    targetMuscles: [{ tr: 'Tam Vucut', en: 'Full Body', fr: 'Full Body', de: 'Cardiovascular' }],
    steps: [
      { tr: 'Mountain climber pozisyonunda baslayin', en: 'Start in mountain climber position', fr: 'Start in mountain climber position', de: 'Start in mountain climber position' },
      { tr: 'Maksimum hizla bacak degistirin', en: 'Switch legs at maximum speed', fr: 'Switch legs at maximum speed', de: 'Switch legs at maximum speed' },
      { tr: 'Sure boyunca durmayin', en: 'Don\'t stop for the duration', fr: 'Don\'t stop for the duration', de: 'Während der gesamten Dauer nicht stoppen' },
    ],
    tips: [{ tr: 'Kisa sureli maksimum efor', en: 'Short duration, maximum effort', fr: 'Short duration, maximum effort', de: 'Short duration, maximum effort' }],
    mistakes: [{ tr: 'Kalcayi yukari kaldirmak', en: 'Raising hips too high', fr: 'Raising hips too high', de: 'Raising hips too high' }],
  },
  star_jump: {
    difficulty: 'medium', media: { startImage: IMG.jump_squat[0], endImage: IMG.jumping_jack[1] },
    targetMuscles: [{ tr: 'Tam Vucut', en: 'Full Body', fr: 'Corps entier', de: 'Ganzkörper' }],
    steps: [
      { tr: 'Squat pozisyonuna inin', en: 'Lower into squat', fr: 'Lower into squat', de: 'Lower into squat' },
      { tr: 'Patlayici sekilde ziplayin', en: 'Explosively jump up', fr: 'Sautez explosivément', de: 'Springe explosiv hoch' },
      { tr: 'Havada kol ve bacaklari yildiz gibi acin', en: 'Spread arms and legs like a star in the air', fr: 'Spread arms and legs like a star in the air', de: 'Spread arms and legs like a star in the air' },
      { tr: 'Yumusak inis yapin, tekrar squat a inin', en: 'Land softly, go back into squat', fr: 'Land softly, go back into squat', de: 'Land softly, go back into squat' },
    ],
    tips: [{ tr: 'Yumusak inis onemli', en: 'Soft landing is key', fr: 'Soft landing is key', de: 'Soft landing is key' }],
    mistakes: [{ tr: 'Sert inis yapmak', en: 'Landing with stiff legs', fr: 'Landing with stiff legs', de: 'Landing with stiff legs' }],
  },
  lateral_shuffle: {
    difficulty: 'easy', media: { startImage: IMG.high_knees[0], endImage: IMG.high_knees[1] },
    targetMuscles: [{ tr: 'Bacaklar', en: 'Legs', fr: 'Legs', de: 'Cardiovascular' }],
    steps: [
      { tr: 'Atletik pozisyonda durun, dizler bukuk', en: 'Stand in athletic stance, knees bent', fr: 'Stand in athletic stance, knees bent', de: 'Stand in athletic stance, knees bent' },
      { tr: 'Hizla yana dogru kucuk adimlarla kayIn', en: 'Quickly shuffle sideways with small steps', fr: 'Quickly shuffle sideways with small steps', de: 'Quickly shuffle sideways with small steps' },
      { tr: 'Diger tarafa donun', en: 'Change direction', fr: 'Change direction', de: 'Change direction' },
    ],
    tips: [{ tr: 'Kalcayi alçak tutun', en: 'Stay low', fr: 'Stay low', de: 'Stay low' }],
    mistakes: [{ tr: 'Dik kalmak', en: 'Standing too upright', fr: 'Standing too upright', de: 'Standing too upright' }],
  },
  plank_jack: {
    difficulty: 'medium', media: { startImage: IMG.plank[0], endImage: IMG.mountain_climber[0] },
    targetMuscles: [{ tr: 'Core', en: 'Core', fr: 'Core', de: 'Cardiovascular' }],
    steps: [
      { tr: 'Plank pozisyonunda baslayin', en: 'Start in plank position', fr: 'Start in plank position', de: 'Start in plank position' },
      { tr: 'Ayaklarinizi ziplayarak yana acin', en: 'Jump feet wide apart', fr: 'Jump feet wide apart', de: 'Jump feet wide apart' },
      { tr: 'Tekrar birlesitrin', en: 'Jump feet back together', fr: 'Jump feet back together', de: 'Jump feet back together' },
      { tr: 'Hizla tekrarlayin', en: 'Repeat quickly', fr: 'Repeat quickly', de: 'Repeat quickly' },
    ],
    tips: [{ tr: 'Kalca sabit kalmali', en: 'Keep hips stable', fr: 'Keep hips stable', de: 'Keep hips stable' }],
    mistakes: [{ tr: 'Kalcayi yukari cikarmak', en: 'Piking hips up', fr: 'Piking hips up', de: 'Piking hips up' }],
  },
  inchworm: {
    difficulty: 'medium', media: { startImage: IMG.push_up[0], endImage: IMG.burpee[0] },
    targetMuscles: [{ tr: 'Tam Vucut', en: 'Full Body', fr: 'Corps entier', de: 'Ganzkörper' }],
    steps: [
      { tr: 'Dik durun, one egilin', en: 'Stand tall, bend forward', fr: 'Stand tall, bend forward', de: 'Stand tall, bend forward' },
      { tr: 'Ellerinizle ilerleyin, plank a gelin', en: 'Walk hands out to plank', fr: 'Walk hands out to plank', de: 'Walk hands out to plank' },
      { tr: 'Bir push-up yapin', en: 'Do a push-up', fr: 'Faites une pompe', de: 'Mache eine Liegestütze' },
      { tr: 'Ellerinizi geri yuruyerek dik durun', en: 'Walk hands back and stand', fr: 'Walk hands back and stand', de: 'Walk hands back and stand' },
    ],
    tips: [{ tr: 'Isinma icin mukemmel hareket', en: 'Perfect warm-up exercise', fr: 'Perfect warm-up exercise', de: 'Perfect warm-up exercise' }],
    mistakes: [{ tr: 'Dizleri bukmek', en: 'Bending the knees too much', fr: 'Bending the knees too much', de: 'Bending the knees too much' }],
  },
  seal_jack: {
    difficulty: 'easy', media: { startImage: IMG.jumping_jack[0], endImage: IMG.jumping_jack[1] },
    targetMuscles: [{ tr: 'Gogus', en: 'Chest', fr: 'Chest', de: 'Cardiovascular' }],
    steps: [
      { tr: 'Dik durun, kollar one uzanmis', en: 'Stand, arms extended forward', fr: 'Stand, arms extended forward', de: 'Stand, arms extended forward' },
      { tr: 'Ziplayarak ayaklari acin, kollari yana acin', en: 'Jump feet wide, open arms to sides', fr: 'Jump feet wide, open arms to sides', de: 'Jump feet wide, open arms to sides' },
      { tr: 'Ziplayarak geri kapatIn', en: 'Jump back to start, clap hands in front', fr: 'Jump back to start, clap hands in front', de: 'Jump back to start, clap hands in front' },
    ],
    tips: [{ tr: 'Gogus kaslarini da calistirir', en: 'Also works chest muscles', fr: 'Also works chest muscles', de: 'Also works chest muscles' }],
    mistakes: [{ tr: 'Kollari yeterince acmamak', en: 'Not opening arms fully', fr: 'Not opening arms fully', de: 'Not opening arms fully' }],
  },
};