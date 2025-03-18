import { useState } from "react";
import { WorkoutSchedule, Workout } from "../types/workout";
import { getDaysInMonth, getFirstDayOfMonth } from "../utils/workoutUtils";
import WorkoutCard from "./WorkoutCard";

interface CalendarProps {
  schedule1: WorkoutSchedule;
  schedule2: WorkoutSchedule;
  currentDay: string;
  currentWeekNumber: number;
}

export default function Calendar({
  schedule1,
  schedule2,
  currentDay,
  currentWeekNumber,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [viewingWeekNumber, setViewingWeekNumber] = useState(currentWeekNumber);

  const currentSchedule = viewingWeekNumber % 2 === 1 ? schedule1 : schedule2;

  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  const firstDayOfMonth = getFirstDayOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDayClick = (workout: Workout | undefined) => {
    if (workout) {
      setSelectedWorkout(workout);
    }
  };

  const handleToggleSchedule = () => {
    setViewingWeekNumber((prev) => prev + 1);
  };

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{monthName}</h2>
          <p className="text-sm text-gray-600 mt-1">
            Viewing{" "}
            {currentSchedule.type === "schedule1" ? "Master" : "Endurance"} Plan
            (Week {viewingWeekNumber})
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleToggleSchedule}
            className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          >
            View Next Week
          </button>
          <button
            onClick={handlePrevMonth}
            className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNextMonth}
            className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Next month"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="bg-gray-100 py-2 text-center text-sm font-semibold text-gray-600"
          >
            {day}
          </div>
        ))}

        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="bg-white aspect-square" />
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            index + 1
          );
          const dayOfWeek = days[date.getDay()];
          const workout = currentSchedule.workouts[dayOfWeek];
          const isToday =
            dayOfWeek === currentDay && viewingWeekNumber === currentWeekNumber;

          return (
            <div
              key={index}
              onClick={() => handleDayClick(workout)}
              className={`relative bg-white p-1 cursor-pointer transition-colors hover:bg-gray-50 ${
                isToday ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="aspect-square p-1">
                <div
                  className={`text-sm font-medium ${
                    isToday ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {index + 1}
                </div>
                {workout && (
                  <div className="mt-1">
                    <div className="text-xs font-medium text-gray-600 line-clamp-2">
                      {workout.type}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedWorkout && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">
            Selected Workout
          </h3>
          <WorkoutCard workout={selectedWorkout} />
        </div>
      )}
    </div>
  );
}
