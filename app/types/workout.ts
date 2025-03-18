export type WorkoutType =
  | "push"
  | "pull"
  | "heavy-legs"
  | "heavy-legs + core"
  | "moderate-legs"
  | "moderate-legs + core"
  | "light-legs"
  | "light-legs + core"
  | "active-recovery"
  | "rest";

export type ScheduleType = "schedule1" | "schedule2";

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
