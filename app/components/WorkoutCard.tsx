import { Workout } from "../types/workout";

interface WorkoutCardProps {
  workout: Workout;
  isToday?: boolean;
}

export default function WorkoutCard({
  workout,
  isToday = false,
}: WorkoutCardProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">{workout.name}</h2>
      <div className="space-y-4">
        {workout.exercises.map((exercise, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <span className="text-lg font-medium text-gray-900">
                {exercise.name}
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
                {exercise.sets} × {exercise.reps}
              </span>
            </div>
            {exercise.notes && (
              <p className="text-sm text-gray-600">{exercise.notes}</p>
            )}
          </div>
        ))}
      </div>
      {workout.notes && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">{workout.notes}</p>
        </div>
      )}
    </div>
  );
}
