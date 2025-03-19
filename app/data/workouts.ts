import { WorkoutSchedule } from "../types/workout";

export const schedule1: WorkoutSchedule = {
  type: "schedule1",
  weekNumber: 1,
  workouts: {
    monday: {
      type: "light-legs + core",
      name: "Light Legs + Easy Run",
      exercises: [
        {
          name: "Leg Extensions",
          sets: 3,
          reps: "12-15",
          notes: "Focus on quad contraction",
        },
        {
          name: "Bodyweight Lunges",
          sets: 3,
          reps: "15/leg",
          notes: "Keep torso upright",
        },
        {
          name: "Seated Leg Curls",
          sets: 3,
          reps: "12-15",
          notes: "Control the negative",
        },
        {
          name: "Foam Rolling",
          sets: 1,
          reps: "10-15 min",
          notes: "Focus on tight areas",
        },
        {
          name: "Easy Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Zone 2 (low intensity)",
        },
      ],
      notes: "Morning: Light leg workout, Evening: Easy run",
    },
    tuesday: {
      type: "push",
      name: "Upper Push + PR Run",
      exercises: [
        {
          name: "Bench Press",
          sets: 4,
          reps: "6-8",
          notes: "Compound lift priority",
        },
        { name: "Overhead Press", sets: 3, reps: "8-10", notes: "Strict form" },
        {
          name: "Incline Dumbbell Press",
          sets: 3,
          reps: "8-12",
          notes: "Control descent",
        },
        {
          name: "Lateral Raises",
          sets: 4,
          reps: "12-15",
          notes: "Slight bend in elbows",
        },
        {
          name: "Tricep Pushdowns",
          sets: 3,
          reps: "12-15",
          notes: "Keep elbows at sides",
        },
        {
          name: "Overhead Tricep Extensions",
          sets: 3,
          reps: "12-15",
          notes: "Keep elbows close to head",
        },
        {
          name: "Reverse Grip Barbell Curls",
          sets: 3,
          reps: "10-12",
          notes: "For forearms",
        },
        {
          name: "Plate Pinches",
          sets: 3,
          reps: "20-30 sec",
          notes: "Grip strength",
        },
        {
          name: "PR Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Speed/tempo focus (evening)",
        },
      ],
      notes: "Morning: Push workout, Evening: PR run",
    },
    wednesday: {
      type: "pull",
      name: "Upper Pull + Heavy Run",
      exercises: [
        {
          name: "Pull-Ups",
          sets: 4,
          reps: "6-10",
          notes: "Full range of motion",
        },
        {
          name: "Bent-Over Rows",
          sets: 4,
          reps: "8-12",
          notes: "Squeeze shoulder blades",
        },
        { name: "Lat Pulldowns", sets: 3, reps: "10-12", notes: "Wide grip" },
        { name: "Face Pulls", sets: 4, reps: "12-15", notes: "High elbows" },
        {
          name: "Barbell Bicep Curls",
          sets: 4,
          reps: "8-12",
          notes: "Strict form",
        },
        {
          name: "Incline Dumbbell Curls",
          sets: 3,
          reps: "10-12",
          notes: "Full stretch",
        },
        { name: "Hammer Curls", sets: 3, reps: "10-12", notes: "Neutral grip" },
        {
          name: "Farmers Carries",
          sets: 3,
          reps: "40-60 yards",
          notes: "Heavy weight",
        },
        { name: "Wrist Curls", sets: 4, reps: "15-20", notes: "Forearm focus" },
        {
          name: "Reverse Wrist Curls",
          sets: 3,
          reps: "12-15",
          notes: "Forearm balance",
        },
        {
          name: "Heavy Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Long/high intensity (evening)",
        },
      ],
      notes: "Morning: Pull workout, Evening: Heavy run",
    },
    thursday: {
      type: "heavy-legs + core",
      name: "Heavy Legs + Easy Run",
      exercises: [
        {
          name: "Back Squats",
          sets: 4,
          reps: "6-8",
          notes: "Primary compound movement",
        },
        {
          name: "Romanian Deadlifts",
          sets: 3,
          reps: "8-10",
          notes: "Hip hinge focus",
        },
        { name: "Leg Press", sets: 3, reps: "10-12", notes: "Quad emphasis" },
        {
          name: "Standing Calf Raises",
          sets: 4,
          reps: "12-15",
          notes: "Full range of motion",
        },
        {
          name: "Easy Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Optional, based on recovery",
        },
      ],
      notes: "Morning: Heavy leg workout, Evening: Easy run or rest",
    },
    friday: {
      type: "active-recovery + push/pull",
      name: "Active Recovery + Push/Pull + Easy Run",
      exercises: [
        {
          name: "Push-Ups",
          sets: 3,
          reps: "10-15",
          notes: "Focus on form and control",
        },
        {
          name: "Dumbbell Rows",
          sets: 3,
          reps: "12-15",
          notes: "Light weight, perfect form",
        },
        {
          name: "Lateral Raises",
          sets: 3,
          reps: "12-15",
          notes: "Light weight, controlled movement",
        },
        {
          name: "Face Pulls",
          sets: 3,
          reps: "15-20",
          notes: "Focus on rear delts and rotator cuff",
        },
        {
          name: "Cable Tricep Pushdowns",
          sets: 3,
          reps: "15-20",
          notes: "Light weight, focus on contraction",
        },
        {
          name: "Dumbbell Hammer Curls",
          sets: 3,
          reps: "12-15",
          notes: "Light weight, controlled tempo",
        },
        {
          name: "Core Circuit",
          sets: 3,
          reps: "15-20",
          notes: "Various core exercises",
        },
        {
          name: "Mobility Work",
          sets: 1,
          reps: "15-20 min",
          notes: "Dynamic stretches",
        },
        {
          name: "Light Stretching",
          sets: 1,
          reps: "10-15 min",
          notes: "Static stretches",
        },
        {
          name: "Easy Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Zone 2 pace",
        },
      ],
      notes: "Focus on form and recovery while maintaining activity",
    },
    saturday: {
      type: "moderate-legs + core",
      name: "Moderate Legs + Easy Run",
      exercises: [
        {
          name: "Bulgarian Split Squats",
          sets: 3,
          reps: "8-10/leg",
          notes: "Unilateral focus",
        },
        { name: "Step-Ups", sets: 3, reps: "10/leg", notes: "Knee-high box" },
        {
          name: "Leg Curls",
          sets: 3,
          reps: "10-12",
          notes: "Hamstring isolation",
        },
        {
          name: "Seated Calf Raises",
          sets: 3,
          reps: "15-20",
          notes: "Soleus emphasis",
        },
        {
          name: "Easy Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Recovery pace",
        },
      ],
      notes: "Morning: Moderate leg workout, Evening: Easy run",
    },
    sunday: {
      type: "rest",
      name: "Complete Rest Day",
      exercises: [
        {
          name: "Light Walking",
          sets: 1,
          reps: "20-30 min",
          notes: "Optional",
        },
        { name: "Stretching", sets: 1, reps: "10-15 min", notes: "If needed" },
      ],
      notes: "Focus on rest and recovery. Aim for 7-9 hours sleep.",
    },
  },
};

export const schedule2: WorkoutSchedule = {
  type: "schedule2",
  weekNumber: 2,
  workouts: {
    monday: {
      type: "heavy-legs + core",
      name: "Leg Day 1 - Strength & Hypertrophy",
      exercises: [
        {
          name: "Back Squat",
          sets: 4,
          reps: "6-8",
          notes: "Focus on depth and form",
        },
        {
          name: "Walking Lunges (Dumbbell)",
          sets: 3,
          reps: "10/leg",
          notes: "Big steps, knee just above ground",
        },
        {
          name: "Romanian Deadlift (RDL)",
          sets: 3,
          reps: "8-10",
          notes: "Keep knees soft, hinge at hips",
        },
        {
          name: "Leg Extension (Machine)",
          sets: 3,
          reps: "12",
          notes: "Pause at top for quad contraction",
        },
        {
          name: "Standing Calf Raise",
          sets: 3,
          reps: "15",
          notes: "Controlled tempo, full range of motion",
        },
        {
          name: "Cooldown Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Easy/moderate pace",
        },
      ],
      notes:
        "Begin with dynamic warm-up (5-10 min easy jog, leg swings, hip circles)",
    },
    tuesday: {
      type: "push",
      name: "PR Run & Upper Body (Push-focus)",
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          reps: "8-10",
          notes: "Explosive push, controlled lowering",
        },
        {
          name: "Overhead Shoulder Press",
          sets: 3,
          reps: "8-10",
          notes: "Keep core tight",
        },
        {
          name: "Dumbbell Lateral Raises",
          sets: 3,
          reps: "12",
          notes: "Slight bend in elbows",
        },
        {
          name: "Triceps Dips",
          sets: 3,
          reps: "10-12",
          notes: "Keep torso upright",
        },
        {
          name: "Overhead Tricep Extensions",
          sets: 3,
          reps: "12-15",
          notes: "Keep elbows close to head",
        },
        {
          name: "Lat Pulldowns",
          sets: 3,
          reps: "8-10",
          notes: "Wide grip, squeeze back",
        },
        {
          name: "Core Planks",
          sets: 2,
          reps: "30 sec",
          notes: "Front and side planks",
        },
        {
          name: "PR Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "High intensity, aim for personal record",
        },
      ],
      notes: "Separate run and gym by a few hours if possible",
    },
    wednesday: {
      type: "pull",
      name: "PR Run & Upper Body (Pull-focus)",
      exercises: [
        {
          name: "Pull-Ups",
          sets: 4,
          reps: "6-8",
          notes: "Full range of motion",
        },
        {
          name: "Bent-Over Rows",
          sets: 3,
          reps: "8-10",
          notes: "Pull to lower ribcage",
        },
        { name: "Lat Pulldowns", sets: 3, reps: "10-12", notes: "Wide grip" },
        {
          name: "Face Pulls",
          sets: 3,
          reps: "12",
          notes: "Lead with elbows high",
        },
        {
          name: "Barbell Bicep Curls",
          sets: 3,
          reps: "10-12",
          notes: "No swinging",
        },
        {
          name: "Incline Dumbbell Curls",
          sets: 3,
          reps: "10-12",
          notes: "Full stretch",
        },
        { name: "Hammer Curls", sets: 3, reps: "10-12", notes: "Neutral grip" },
        { name: "Push-Ups", sets: 2, reps: "15", notes: "To fatigue" },
        {
          name: "Reverse Curls",
          sets: 3,
          reps: "12-15",
          notes: "Full stretch",
        },
        { name: "Wrist Curls", sets: 4, reps: "15-20", notes: "Forearm focus" },
        {
          name: "Reverse Wrist Curls",
          sets: 3,
          reps: "12-15",
          notes: "Forearm balance",
        },
        {
          name: "PR Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "High intensity intervals or time trial",
        },
      ],
      notes: "Dynamic warm-up before run",
    },
    thursday: {
      type: "heavy-legs + core",
      name: "Leg Day 2 - Strength & Hypertrophy",
      exercises: [
        {
          name: "Barbell Deadlift",
          sets: 3,
          reps: "5",
          notes: "Focus on form, 2-3 min rest",
        },
        {
          name: "Bulgarian Split Squat",
          sets: 3,
          reps: "8/leg",
          notes: "Elevate rear foot",
        },
        {
          name: "Leg Curl (Machine)",
          sets: 3,
          reps: "10-12",
          notes: "Pause at top",
        },
        {
          name: "Standing Calf Raise",
          sets: 3,
          reps: "12-15",
          notes: "Full range of motion",
        },
        {
          name: "Glute Bridge/Hip Thrust",
          sets: 2,
          reps: "10",
          notes: "Optional",
        },
        {
          name: "Easy Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Conversational pace",
        },
      ],
      notes: "Warm-up: 5 min cardio + dynamic drills",
    },
    friday: {
      type: "active-recovery + push/pull",
      name: "Push/Pull + Core & Mobility",
      exercises: [
        {
          name: "Incline Push-Ups",
          sets: 3,
          reps: "12-15",
          notes: "Control tempo",
        },
        {
          name: "Band Pull-Aparts",
          sets: 3,
          reps: "15-20",
          notes: "Focus on shoulder retraction",
        },
        {
          name: "Dumbbell Shoulder Press",
          sets: 3,
          reps: "12-15",
          notes: "Light weight, perfect form",
        },
        {
          name: "Resistance Band Rows",
          sets: 3,
          reps: "15-20",
          notes: "Squeeze shoulder blades",
        },
        {
          name: "Resistance Band Tricep Extensions",
          sets: 3,
          reps: "15-20",
          notes: "Focus on full range of motion",
        },
        {
          name: "Resistance Band Curls",
          sets: 3,
          reps: "15-20",
          notes: "Controlled movement, no swinging",
        },
        {
          name: "Foam Rolling",
          sets: 1,
          reps: "5-10 min",
          notes: "Major muscle groups",
        },
        {
          name: "Dynamic Mobility Circuit",
          sets: 2,
          reps: "1 round",
          notes: "Leg swings, hip circles, lunges, inchworms",
        },
        {
          name: "Core Circuit",
          sets: 2,
          reps: "1 round",
          notes: "Plank, side plank, bird-dogs, glute bridges, clamshells",
        },
        {
          name: "Easy Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Recovery pace",
        },
      ],
      notes: "Light weights, focus on form and mind-muscle connection",
    },
    saturday: {
      type: "moderate-legs + core",
      name: "Leg Day 3 - Hypertrophy & Power",
      exercises: [
        {
          name: "Back Squat",
          sets: 4,
          reps: "8-10",
          notes: "Moderate weight, focus on volume",
        },
        {
          name: "Leg Press",
          sets: 3,
          reps: "10-12",
          notes: "Push through heels",
        },
        {
          name: "Dumbbell Step-Ups",
          sets: 3,
          reps: "8/leg",
          notes: "Knee-high box",
        },
        {
          name: "Leg Extension",
          sets: 2,
          reps: "15",
          notes: "High rep burnout",
        },
        {
          name: "Seated Hamstring Curl",
          sets: 2,
          reps: "15",
          notes: "Optional",
        },
        {
          name: "Moderate Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Steady endurance pace",
        },
      ],
      notes: "Warm-up: 5 min cardio + box jumps",
    },
    sunday: {
      type: "rest",
      name: "Rest Day",
      exercises: [
        {
          name: "Light Walking",
          sets: 1,
          reps: "20-30 min",
          notes: "Optional",
        },
        {
          name: "Stretching",
          sets: 1,
          reps: "10-15 min",
          notes: "Focus on tight areas",
        },
      ],
      notes: "Focus on recovery and gentle activity",
    },
  },
};

export const schedule3: WorkoutSchedule = {
  type: "schedule3",
  weekNumber: 3,
  workouts: {
    monday: {
      type: "moderate-legs + core",
      name: "Moderate Leg Day + Optional Run",
      exercises: [
        {
          name: "Squats",
          sets: 3,
          reps: "8-10",
          notes: "Moderate weight (70-75% 1RM)",
        },
        {
          name: "Romanian Deadlifts",
          sets: 3,
          reps: "8-10",
          notes: "Focus on hip hinge movement",
        },
        {
          name: "Bulgarian Split Squats",
          sets: 3,
          reps: "10-12/leg",
          notes: "Control the movement",
        },
        {
          name: "Calf Raises",
          sets: 3,
          reps: "15-20",
          notes: "Full range of motion",
        },
        {
          name: "Light Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Optional evening run, easy pace",
        },
      ],
      notes: "24+ hours recovery before Tuesday's PR run",
    },
    tuesday: {
      type: "push/pull",
      name: "Upper Push/Pull + PR Run",
      exercises: [
        {
          name: "Bench Press",
          sets: 4,
          reps: "8-10",
          notes: "Moderate to heavy weight",
        },
        {
          name: "Overhead Press",
          sets: 3,
          reps: "8-10",
          notes: "Focus on strict form",
        },
        {
          name: "Barbell Rows",
          sets: 4,
          reps: "10-12",
          notes: "Control the eccentric",
        },
        {
          name: "Pull-ups/Lat Pulldowns",
          sets: 3,
          reps: "8-10",
          notes: "Choose based on strength level",
        },
        {
          name: "Tricep Extensions",
          sets: 3,
          reps: "12-15",
          notes: "Focus on contraction",
        },
        {
          name: "PR Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Evening: Push for personal record",
        },
      ],
      notes: "Upper body workout early to keep legs fresh for PR run",
    },
    wednesday: {
      type: "pull/push",
      name: "Upper Pull/Push + Heavy Run",
      exercises: [
        {
          name: "Deadlifts",
          sets: 3,
          reps: "6-8",
          notes: "Upper body focus, moderate weight",
        },
        {
          name: "Pull-ups/Chin-ups",
          sets: 4,
          reps: "6-8",
          notes: "Full range of motion",
        },
        {
          name: "Dumbbell Bench Press",
          sets: 3,
          reps: "10-12",
          notes: "Control the movement",
        },
        {
          name: "Lateral Raises",
          sets: 3,
          reps: "12-15",
          notes: "Light to moderate weight",
        },
        {
          name: "Bicep Curls",
          sets: 3,
          reps: "10-12",
          notes: "Focus on form",
        },
        {
          name: "Heavy Run",
          sets: 1,
          reps: "3-5 miles",
          notes: "Evening: Longer distance run",
        },
      ],
      notes: "Schedule upper body early to avoid fatigue during heavy run",
    },
    thursday: {
      type: "active-recovery",
      name: "Active Recovery Day",
      exercises: [
        {
          name: "Mobility Work",
          sets: 1,
          reps: "15-20 min",
          notes: "Dynamic stretching and mobility",
        },
        {
          name: "Foam Rolling",
          sets: 1,
          reps: "15-20 min",
          notes: "Focus on legs and problem areas",
        },
        {
          name: "Light Jogging/Walking",
          sets: 1,
          reps: "20-30 min",
          notes: "Optional, very light intensity",
        },
      ],
      notes: "Focus on recovery and preparation for heavy leg day",
    },
    friday: {
      type: "heavy-legs + core",
      name: "Heavy Leg Day",
      exercises: [
        {
          name: "Barbell Back Squats",
          sets: 4,
          reps: "6-8",
          notes: "Heavy weight (80-85% 1RM)",
        },
        {
          name: "Leg Press",
          sets: 4,
          reps: "8-10",
          notes: "Heavy weight, full range",
        },
        {
          name: "Walking Lunges",
          sets: 3,
          reps: "10-12/leg",
          notes: "Controlled steps",
        },
        {
          name: "Leg Extensions",
          sets: 3,
          reps: "10-12",
          notes: "Focus on contraction",
        },
        {
          name: "Seated Calf Raises",
          sets: 4,
          reps: "12-15",
          notes: "Full range of motion",
        },
        {
          name: "Standing Calf Raises",
          sets: 3,
          reps: "15-20",
          notes: "Emphasize peak contraction",
        },
      ],
      notes: "Primary leg mass building day, 48+ hours before next run",
    },
    saturday: {
      type: "technical-legs + core",
      name: "Technical Leg Day + Optional Run",
      exercises: [
        {
          name: "Front Squats",
          sets: 3,
          reps: "8-10",
          notes: "Light weight, focus on form",
        },
        {
          name: "Hamstring Curls",
          sets: 3,
          reps: "12-15",
          notes: "Controlled movement",
        },
        {
          name: "Step-ups",
          sets: 3,
          reps: "12-15/leg",
          notes: "Focus on stability",
        },
        {
          name: "Single-leg Calf Raises",
          sets: 3,
          reps: "15/leg",
          notes: "Balance and control",
        },
        {
          name: "Light Run",
          sets: 1,
          reps: "2-3 miles",
          notes: "Optional evening run, easy pace",
        },
      ],
      notes: "Keep intensity moderate to maintain running capacity",
    },
    sunday: {
      type: "rest",
      name: "Complete Rest Day",
      exercises: [
        {
          name: "Rest",
          sets: 0,
          reps: "N/A",
          notes: "Focus on nutrition and recovery",
        },
      ],
      notes:
        "No structured exercise. Focus on nutrition, hydration, and recovery",
    },
  },
};
