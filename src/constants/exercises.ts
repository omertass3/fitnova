export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'quads'
  | 'hamstrings'
  | 'glutes'
  | 'calves'
  | 'abs'
  | 'cardio';

export type ExerciseCategory = 'push' | 'pull' | 'legs' | 'core' | 'cardio' | 'full_body';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  category: ExerciseCategory;
  sets: number;
  reps: string; // e.g. "8-12" or "30s"
  restSeconds: number;
  xpReward: number;
  description: string;
}

export const EXERCISES: Exercise[] = [
  // ====== PUSH (12 exercises) ======
  {
    id: 'push_up', name: 'Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '12-15', restSeconds: 60, xpReward: 15,
    description: 'Classic push-up with proper form. Keep your body in a straight line.',
  },
  {
    id: 'diamond_push_up', name: 'Diamond Push-Up', muscleGroup: 'triceps', category: 'push',
    sets: 3, reps: '8-12', restSeconds: 60, xpReward: 20,
    description: 'Hands close together forming a diamond shape. Targets triceps.',
  },
  {
    id: 'wide_push_up', name: 'Wide Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '10-15', restSeconds: 60, xpReward: 15,
    description: 'Wider hand placement to target outer chest.',
  },
  {
    id: 'pike_push_up', name: 'Pike Push-Up', muscleGroup: 'shoulders', category: 'push',
    sets: 3, reps: '8-10', restSeconds: 90, xpReward: 20,
    description: 'Hips up high, targets shoulders. Great for overhead press strength.',
  },
  {
    id: 'dips', name: 'Bench Dips', muscleGroup: 'triceps', category: 'push',
    sets: 3, reps: '10-15', restSeconds: 60, xpReward: 15,
    description: 'Use a bench or chair. Lower your body by bending elbows.',
  },
  {
    id: 'decline_push_up', name: 'Decline Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '10-12', restSeconds: 60, xpReward: 20,
    description: 'Feet elevated on bench. Targets upper chest and shoulders.',
  },
  {
    id: 'archer_push_up', name: 'Archer Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '6-8 each', restSeconds: 90, xpReward: 25,
    description: 'Wide push-up shifting weight to one arm. Advanced unilateral push.',
  },
  {
    id: 'tricep_kickback', name: 'Tricep Kickback', muscleGroup: 'triceps', category: 'push',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 15,
    description: 'Bend forward, extend arm back squeezing triceps.',
  },
  {
    id: 'shoulder_tap', name: 'Shoulder Tap Push-Up', muscleGroup: 'shoulders', category: 'push',
    sets: 3, reps: '10 each', restSeconds: 60, xpReward: 18,
    description: 'Push-up position, tap opposite shoulder between reps. Core stability.',
  },
  {
    id: 'pseudo_planche', name: 'Pseudo Planche Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '6-10', restSeconds: 90, xpReward: 25,
    description: 'Hands by waist, fingers facing out. Advanced chest and shoulder exercise.',
  },
  {
    id: 'hindu_push_up', name: 'Hindu Push-Up', muscleGroup: 'shoulders', category: 'push',
    sets: 3, reps: '8-12', restSeconds: 60, xpReward: 20,
    description: 'Flowing movement from downward dog through to cobra. Full upper body.',
  },
  {
    id: 'clap_push_up', name: 'Clap Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '6-8', restSeconds: 90, xpReward: 25,
    description: 'Explosive push-up with a clap at the top. Builds power.',
  },

  // ====== PULL (10 exercises) ======
  {
    id: 'pull_up', name: 'Pull-Up', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '5-8', restSeconds: 90, xpReward: 25,
    description: 'Overhand grip pull-up. The king of back exercises.',
  },
  {
    id: 'chin_up', name: 'Chin-Up', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '6-10', restSeconds: 90, xpReward: 25,
    description: 'Underhand grip. Targets back and biceps.',
  },
  {
    id: 'inverted_row', name: 'Inverted Row', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '10-12', restSeconds: 60, xpReward: 15,
    description: 'Lie under a bar and pull your chest up to it.',
  },
  {
    id: 'superman', name: 'Superman Hold', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '30s', restSeconds: 45, xpReward: 10,
    description: 'Lie face down, lift arms and legs off the ground.',
  },
  {
    id: 'doorway_curl', name: 'Doorway Curl', muscleGroup: 'biceps', category: 'pull',
    sets: 3, reps: '10-12 each', restSeconds: 60, xpReward: 15,
    description: 'Grab a doorframe and curl your body toward it. Targets biceps.',
  },
  {
    id: 'towel_row', name: 'Towel Row', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '10-12', restSeconds: 60, xpReward: 18,
    description: 'Loop towel around sturdy object and row. Great back builder.',
  },
  {
    id: 'negative_pull_up', name: 'Negative Pull-Up', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '5-6', restSeconds: 90, xpReward: 20,
    description: 'Jump to top position, lower slowly for 5 seconds. Builds pull-up strength.',
  },
  {
    id: 'face_pull', name: 'Band Face Pull', muscleGroup: 'shoulders', category: 'pull',
    sets: 3, reps: '15-20', restSeconds: 45, xpReward: 12,
    description: 'Pull band toward face with elbows high. Rear delts and posture.',
  },
  {
    id: 'reverse_snow_angel', name: 'Reverse Snow Angel', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 12,
    description: 'Lie face down, sweep arms from hips to overhead. Targets upper back.',
  },
  {
    id: 'wide_pull_up', name: 'Wide-Grip Pull-Up', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '4-7', restSeconds: 90, xpReward: 28,
    description: 'Pull-up with wider grip. Emphasizes lats and back width.',
  },

  // ====== LEGS (12 exercises) ======
  {
    id: 'squat', name: 'Bodyweight Squat', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '15-20', restSeconds: 60, xpReward: 15,
    description: 'Stand with feet shoulder-width apart. Sit back and down.',
  },
  {
    id: 'jump_squat', name: 'Jump Squat', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '10-12', restSeconds: 60, xpReward: 20,
    description: 'Explosive squat with a jump at the top.',
  },
  {
    id: 'lunge', name: 'Walking Lunge', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '12 each', restSeconds: 60, xpReward: 15,
    description: 'Step forward and lower until both knees are at 90 degrees.',
  },
  {
    id: 'bulgarian_split', name: 'Bulgarian Split Squat', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '10 each', restSeconds: 90, xpReward: 20,
    description: 'Rear foot elevated on bench. Single leg squat.',
  },
  {
    id: 'glute_bridge', name: 'Glute Bridge', muscleGroup: 'glutes', category: 'legs',
    sets: 3, reps: '15-20', restSeconds: 45, xpReward: 10,
    description: 'Lie on back, drive hips up squeezing glutes.',
  },
  {
    id: 'calf_raise', name: 'Calf Raise', muscleGroup: 'calves', category: 'legs',
    sets: 3, reps: '20-25', restSeconds: 30, xpReward: 10,
    description: 'Stand on edge of step, raise up on toes.',
  },
  {
    id: 'wall_sit', name: 'Wall Sit', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '45s', restSeconds: 60, xpReward: 15,
    description: 'Back against wall, thighs parallel to floor. Hold.',
  },
  {
    id: 'sumo_squat', name: 'Sumo Squat', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '15-20', restSeconds: 60, xpReward: 15,
    description: 'Wide stance squat with toes pointed out. Targets inner thighs.',
  },
  {
    id: 'pistol_squat', name: 'Pistol Squat', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '5-8 each', restSeconds: 90, xpReward: 30,
    description: 'Single leg squat with other leg extended forward. Advanced.',
  },
  {
    id: 'reverse_lunge', name: 'Reverse Lunge', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '12 each', restSeconds: 60, xpReward: 15,
    description: 'Step backward into lunge. Easier on knees than forward lunge.',
  },
  {
    id: 'hip_thrust', name: 'Single-Leg Hip Thrust', muscleGroup: 'glutes', category: 'legs',
    sets: 3, reps: '10 each', restSeconds: 60, xpReward: 18,
    description: 'Back on bench, one leg extended, drive hips up. Glute isolation.',
  },
  {
    id: 'step_up', name: 'Step-Up', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '10 each', restSeconds: 60, xpReward: 15,
    description: 'Step up onto bench or box. Builds single leg strength.',
  },

  // ====== CORE (10 exercises) ======
  {
    id: 'plank', name: 'Plank', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '45s', restSeconds: 30, xpReward: 15,
    description: 'Hold a straight line from head to heels on forearms.',
  },
  {
    id: 'crunch', name: 'Crunch', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '20', restSeconds: 30, xpReward: 10,
    description: 'Lie on back, curl shoulders off the floor.',
  },
  {
    id: 'mountain_climber', name: 'Mountain Climber', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '30s', restSeconds: 30, xpReward: 15,
    description: 'Plank position, alternate driving knees to chest.',
  },
  {
    id: 'leg_raise', name: 'Leg Raise', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 15,
    description: 'Lie on back, raise straight legs to 90 degrees.',
  },
  {
    id: 'russian_twist', name: 'Russian Twist', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '20 each', restSeconds: 30, xpReward: 15,
    description: 'Seated, lean back, twist torso side to side.',
  },
  {
    id: 'bicycle_crunch', name: 'Bicycle Crunch', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '20 each', restSeconds: 30, xpReward: 15,
    description: 'Alternate elbow to opposite knee in cycling motion.',
  },
  {
    id: 'dead_bug', name: 'Dead Bug', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '10 each', restSeconds: 30, xpReward: 12,
    description: 'Lie on back, extend opposite arm and leg while keeping core braced.',
  },
  {
    id: 'side_plank', name: 'Side Plank', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '30s each', restSeconds: 30, xpReward: 15,
    description: 'Hold side plank on forearm. Targets obliques.',
  },
  {
    id: 'v_up', name: 'V-Up', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 18,
    description: 'Simultaneously raise legs and torso to form V shape.',
  },
  {
    id: 'flutter_kick', name: 'Flutter Kick', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '30s', restSeconds: 30, xpReward: 12,
    description: 'Lie on back, alternate kicking legs up and down rapidly.',
  },

  // ====== CARDIO (8 exercises) ======
  {
    id: 'burpee', name: 'Burpee', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '10', restSeconds: 60, xpReward: 25,
    description: 'Full body explosive movement. Squat, jump back, push-up, jump up.',
  },
  {
    id: 'high_knees', name: 'High Knees', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '30s', restSeconds: 30, xpReward: 15,
    description: 'Run in place driving knees as high as possible.',
  },
  {
    id: 'jumping_jack', name: 'Jumping Jack', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '30', restSeconds: 30, xpReward: 10,
    description: 'Classic jumping jacks. Arms and legs out, then back together.',
  },
  {
    id: 'skater_jump', name: 'Skater Jump', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '12 each', restSeconds: 45, xpReward: 18,
    description: 'Lateral jumps from side to side like a speed skater.',
  },
  {
    id: 'box_jump', name: 'Box Jump', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '10', restSeconds: 60, xpReward: 22,
    description: 'Jump onto a box or sturdy surface. Land softly with bent knees.',
  },
  {
    id: 'tuck_jump', name: 'Tuck Jump', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '8-10', restSeconds: 60, xpReward: 20,
    description: 'Jump and bring knees to chest at the peak. Explosive power.',
  },
  {
    id: 'sprint_in_place', name: 'Sprint in Place', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '20s', restSeconds: 40, xpReward: 15,
    description: 'Full speed running in place. Maximum effort bursts.',
  },
  {
    id: 'bear_crawl', name: 'Bear Crawl', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '30s', restSeconds: 45, xpReward: 18,
    description: 'Crawl forward on hands and feet with knees hovering. Full body cardio.',
  },

  // ====== EXTRA PUSH (8) ======
  {
    id: 'staggered_push_up', name: 'Staggered Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '8 each', restSeconds: 60, xpReward: 18,
    description: 'One hand forward, one back. Alternating unilateral chest work.',
  },
  {
    id: 'spiderman_push_up', name: 'Spiderman Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '8 each', restSeconds: 60, xpReward: 22,
    description: 'Bring knee to elbow at the bottom of each push-up. Chest and obliques.',
  },
  {
    id: 'elevated_pike_press', name: 'Elevated Pike Press', muscleGroup: 'shoulders', category: 'push',
    sets: 3, reps: '6-8', restSeconds: 90, xpReward: 25,
    description: 'Feet on bench in pike position, press up. Mimics overhead press.',
  },
  {
    id: 'explosive_push_up', name: 'Explosive Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '8-10', restSeconds: 75, xpReward: 22,
    description: 'Push up explosively so hands leave the ground. Builds power.',
  },
  {
    id: 'chest_squeeze', name: 'Isometric Chest Squeeze', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '30s', restSeconds: 45, xpReward: 12,
    description: 'Press palms together in front of chest and squeeze hard. Isometric hold.',
  },
  {
    id: 'overhead_tricep_ext', name: 'Overhead Tricep Extension', muscleGroup: 'triceps', category: 'push',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 14,
    description: 'Arms overhead, bend at elbows, extend back up. Isolates triceps.',
  },
  {
    id: 'incline_push_up', name: 'Incline Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '15-20', restSeconds: 45, xpReward: 12,
    description: 'Hands on bench/wall, easier angle. Great for beginners.',
  },
  {
    id: 'typewriter_push_up', name: 'Typewriter Push-Up', muscleGroup: 'chest', category: 'push',
    sets: 3, reps: '6 each', restSeconds: 90, xpReward: 28,
    description: 'At the bottom, shift body side to side. Advanced chest variation.',
  },

  // ====== EXTRA PULL (8) ======
  {
    id: 'commando_pull_up', name: 'Commando Pull-Up', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '4-6 each', restSeconds: 90, xpReward: 28,
    description: 'Grip bar with hands close, alternating head to each side of bar.',
  },
  {
    id: 'scapula_pull_up', name: 'Scapula Pull-Up', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '10-12', restSeconds: 60, xpReward: 15,
    description: 'Hang from bar and retract shoulder blades without bending arms.',
  },
  {
    id: 'band_pull_apart', name: 'Band Pull Apart', muscleGroup: 'shoulders', category: 'pull',
    sets: 3, reps: '15-20', restSeconds: 30, xpReward: 12,
    description: 'Hold band at shoulder width, pull apart. Targets rear delts.',
  },
  {
    id: 'prone_y_raise', name: 'Prone Y Raise', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 12,
    description: 'Lie face down, raise arms into Y position. Upper back and traps.',
  },
  {
    id: 'isometric_curl', name: 'Isometric Bicep Curl', muscleGroup: 'biceps', category: 'pull',
    sets: 3, reps: '30s', restSeconds: 45, xpReward: 12,
    description: 'Hold doorframe or immovable object, curl with max effort. Isometric hold.',
  },
  {
    id: 'single_arm_row', name: 'Single Arm Row', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '10 each', restSeconds: 60, xpReward: 18,
    description: 'Bend over, row one arm up from low position. Targets lats unilaterally.',
  },
  {
    id: 'australian_pull_up', name: 'Australian Pull-Up', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '12-15', restSeconds: 60, xpReward: 15,
    description: 'Low bar inverted row with feet elevated. Harder inverted row variation.',
  },
  {
    id: 'back_extension', name: 'Back Extension', muscleGroup: 'back', category: 'pull',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 14,
    description: 'Lie face down on bench edge, raise torso. Targets lower back and glutes.',
  },

  // ====== EXTRA LEGS (8) ======
  {
    id: 'curtsy_lunge', name: 'Curtsy Lunge', muscleGroup: 'glutes', category: 'legs',
    sets: 3, reps: '10 each', restSeconds: 60, xpReward: 18,
    description: 'Step one leg behind and across, lower into lunge. Targets glute medius.',
  },
  {
    id: 'sissy_squat', name: 'Sissy Squat', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '8-12', restSeconds: 60, xpReward: 22,
    description: 'Lean back with knees forward, heels raised. Intense quad isolation.',
  },
  {
    id: 'single_leg_deadlift', name: 'Single Leg Deadlift', muscleGroup: 'hamstrings', category: 'legs',
    sets: 3, reps: '10 each', restSeconds: 60, xpReward: 20,
    description: 'Stand on one leg, hinge forward reaching toward floor. Balance and hamstrings.',
  },
  {
    id: 'donkey_kick', name: 'Donkey Kick', muscleGroup: 'glutes', category: 'legs',
    sets: 3, reps: '15 each', restSeconds: 30, xpReward: 12,
    description: 'On all fours, kick one leg up toward ceiling. Glute isolation.',
  },
  {
    id: 'fire_hydrant', name: 'Fire Hydrant', muscleGroup: 'glutes', category: 'legs',
    sets: 3, reps: '15 each', restSeconds: 30, xpReward: 12,
    description: 'On all fours, raise bent leg out to the side. Glute medius and hip.',
  },
  {
    id: 'frog_squat', name: 'Frog Squat', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '12-15', restSeconds: 45, xpReward: 15,
    description: 'Deep squat with feet wide and toes out, touch floor at bottom.',
  },
  {
    id: 'nordic_curl', name: 'Nordic Hamstring Curl', muscleGroup: 'hamstrings', category: 'legs',
    sets: 3, reps: '4-6', restSeconds: 90, xpReward: 30,
    description: 'Kneel with anchored feet, slowly lower body forward. Extreme hamstring work.',
  },
  {
    id: 'side_lunge', name: 'Side Lunge', muscleGroup: 'quads', category: 'legs',
    sets: 3, reps: '10 each', restSeconds: 60, xpReward: 15,
    description: 'Step wide to the side and lower into a lateral lunge. Inner thigh and quads.',
  },

  // ====== EXTRA CORE (8) ======
  {
    id: 'hollow_hold', name: 'Hollow Body Hold', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '30s', restSeconds: 30, xpReward: 18,
    description: 'Lie on back, lift shoulders and legs off ground, arms extended. Total core.',
  },
  {
    id: 'dragon_flag', name: 'Dragon Flag', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '4-6', restSeconds: 90, xpReward: 30,
    description: 'Hold bench behind head, raise body up keeping it rigid. Bruce Lee move.',
  },
  {
    id: 'pallof_press', name: 'Pallof Press', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '10 each', restSeconds: 45, xpReward: 15,
    description: 'Press band away from chest, resist rotation. Anti-rotation core work.',
  },
  {
    id: 'plank_shoulder_tap', name: 'Plank Shoulder Tap', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '10 each', restSeconds: 30, xpReward: 15,
    description: 'In plank, alternate tapping opposite shoulder. Core stability.',
  },
  {
    id: 'toe_touch', name: 'Toe Touch', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '15-20', restSeconds: 30, xpReward: 12,
    description: 'Lie on back, legs straight up, reach hands to toes. Upper abs.',
  },
  {
    id: 'windshield_wiper', name: 'Windshield Wiper', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '8 each', restSeconds: 60, xpReward: 22,
    description: 'Lie on back, legs up, rotate legs side to side. Obliques and core.',
  },
  {
    id: 'ab_wheel_rollout', name: 'Ab Rollout', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '8-12', restSeconds: 60, xpReward: 22,
    description: 'Roll forward on wheel or towel on floor, extend body, roll back. Full core.',
  },
  {
    id: 'hanging_knee_raise', name: 'Hanging Knee Raise', muscleGroup: 'abs', category: 'core',
    sets: 3, reps: '10-12', restSeconds: 60, xpReward: 20,
    description: 'Hang from bar, raise knees to chest. Lower abs and hip flexors.',
  },

  // ====== EXTRA CARDIO (6) ======
  {
    id: 'mountain_sprint', name: 'Mountain Sprint', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '20s', restSeconds: 40, xpReward: 20,
    description: 'Fast mountain climbers with maximum speed. Intense full body cardio.',
  },
  {
    id: 'star_jump', name: 'Star Jump', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '12', restSeconds: 45, xpReward: 18,
    description: 'Squat down, explode up spreading arms and legs into star shape.',
  },
  {
    id: 'lateral_shuffle', name: 'Lateral Shuffle', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '30s', restSeconds: 40, xpReward: 15,
    description: 'Quick side-to-side shuffling in athletic stance. Agility and cardio.',
  },
  {
    id: 'plank_jack', name: 'Plank Jack', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '20', restSeconds: 30, xpReward: 15,
    description: 'In plank position, jump feet wide then back together like jumping jacks.',
  },
  {
    id: 'inchworm', name: 'Inchworm', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '8', restSeconds: 45, xpReward: 18,
    description: 'Stand, walk hands out to plank, do push-up, walk hands back, stand up.',
  },
  {
    id: 'seal_jack', name: 'Seal Jack', muscleGroup: 'cardio', category: 'cardio',
    sets: 3, reps: '25', restSeconds: 30, xpReward: 12,
    description: 'Jumping jack but arms go forward and back instead of up and down.',
  },
];

export const DAILY_CHALLENGES = [
  { id: 'daily_squat', exerciseId: 'squat', targetReps: 50, xpBonus: 50, label: '50 Squat' },
  { id: 'daily_pushup', exerciseId: 'push_up', targetReps: 30, xpBonus: 50, label: '30 Push-Up' },
  { id: 'daily_plank', exerciseId: 'plank', targetReps: 3, xpBonus: 40, label: '3 Min Plank' },
  { id: 'daily_burpee', exerciseId: 'burpee', targetReps: 20, xpBonus: 60, label: '20 Burpee' },
  { id: 'daily_lunge', exerciseId: 'lunge', targetReps: 40, xpBonus: 50, label: '40 Lunge' },
  { id: 'daily_mountain', exerciseId: 'mountain_climber', targetReps: 60, xpBonus: 45, label: '60s Mountain Climber' },
];