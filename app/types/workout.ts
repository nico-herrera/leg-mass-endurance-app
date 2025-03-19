export type WorkoutType =
  | "push"
  | "pull"
  | "push/pull"
  | "pull/push"
  | "heavy-legs"
  | "heavy-legs + core"
  | "moderate-legs"
  | "moderate-legs + core"
  | "light-legs"
  | "light-legs + core"
  | "active-recovery"
  | "active-recovery + push/pull"
  | "technical-legs + core"
  | "rest";

export type ScheduleType = "schedule1" | "schedule2" | "schedule3";

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  notes?: string;
}

export interface Workout {
  type: WorkoutType;
  name: string;
  exercises: Exercise[];
  notes?: string;
}

export interface WorkoutSchedule {
  type: ScheduleType;
  weekNumber: number;
  workouts: {
    [key: string]: Workout;
  };
}
