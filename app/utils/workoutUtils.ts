import { WorkoutSchedule, ScheduleType } from "../types/workout";

export function getCurrentWeekNumber(): number {
  const startDate = new Date("2024-01-01");
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
  return diffWeeks;
}

export function getCurrentDayWorkout(): string {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDay = days[new Date().getDay()];
  return currentDay;
}

export function getWorkoutForDay(schedule: WorkoutSchedule, day: string) {
  return schedule.workouts[day];
}

export function isWorkoutDay(day: string): boolean {
  return day !== "sunday";
}

export function getCurrentScheduleType(weekNumber: number): ScheduleType {
  const rotation = weekNumber % 3;
  switch (rotation) {
    case 1:
      return "schedule1";
    case 2:
      return "schedule2";
    case 0:
      return "schedule3";
    default:
      return "schedule1";
  }
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}
