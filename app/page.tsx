"use client";

import { useState, useEffect } from "react";
import { schedule1, schedule2, schedule3 } from "./data/workouts";
import { WorkoutSchedule, Workout } from "./types/workout";
import WorkoutCard from "./components/WorkoutCard";
import { getCurrentScheduleType } from "./utils/workoutUtils";

export default function Home() {
  const [currentSchedule, setCurrentSchedule] =
    useState<WorkoutSchedule>(schedule1);
  const [currentDay, setCurrentDay] = useState<string>("");
  const [weekNumber, setWeekNumber] = useState<number>(1);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    const today = new Date();
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    setCurrentDay(days[today.getDay()]);

    const currentWeek = Math.ceil((today.getDate() + today.getDay()) / 7);
    setWeekNumber(currentWeek);

    const scheduleType = getCurrentScheduleType(currentWeek);
    const schedule =
      scheduleType === "schedule1"
        ? schedule1
        : scheduleType === "schedule2"
        ? schedule2
        : schedule3;
    setCurrentSchedule(schedule);
  }, []);

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const handleDayClick = (schedule: WorkoutSchedule, day: string) => {
    setSelectedWorkout(schedule.workouts[day]);
  };

  const getScheduleName = (schedule: WorkoutSchedule) => {
    switch (schedule.type) {
      case "schedule1":
        return "Plan A (Strength Focus)";
      case "schedule2":
        return "Plan B (Hypertrophy Focus)";
      case "schedule3":
        return "Plan C (Technical Focus)";
      default:
        return "Unknown Plan";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Workout Schedules
          </h1>
          <p className="mt-2 text-gray-700">
            Currently on {getScheduleName(currentSchedule)} (Week {weekNumber})
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {currentSchedule.workouts[currentDay] && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Today&apos;s Workout
              </h2>
              <WorkoutCard workout={currentSchedule.workouts[currentDay]} />
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {getScheduleName(schedule1)}
              </h2>
              <div className="space-y-2">
                {days.map((day) => (
                  <button
                    key={`schedule1-${day}`}
                    onClick={() => handleDayClick(schedule1, day)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentSchedule === schedule1 && day === currentDay
                        ? "bg-blue-100 hover:bg-blue-200"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="font-medium text-gray-900 capitalize">
                      {day}
                    </div>
                    <div className="text-sm text-gray-600">
                      {schedule1.workouts[day].type}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {getScheduleName(schedule2)}
              </h2>
              <div className="space-y-2">
                {days.map((day) => (
                  <button
                    key={`schedule2-${day}`}
                    onClick={() => handleDayClick(schedule2, day)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentSchedule === schedule2 && day === currentDay
                        ? "bg-blue-100 hover:bg-blue-200"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="font-medium text-gray-900 capitalize">
                      {day}
                    </div>
                    <div className="text-sm text-gray-600">
                      {schedule2.workouts[day].type}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {getScheduleName(schedule3)}
              </h2>
              <div className="space-y-2">
                {days.map((day) => (
                  <button
                    key={`schedule3-${day}`}
                    onClick={() => handleDayClick(schedule3, day)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentSchedule === schedule3 && day === currentDay
                        ? "bg-blue-100 hover:bg-blue-200"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="font-medium text-gray-900 capitalize">
                      {day}
                    </div>
                    <div className="text-sm text-gray-600">
                      {schedule3.workouts[day].type}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedWorkout && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Selected Workout
              </h2>
              <WorkoutCard workout={selectedWorkout} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
