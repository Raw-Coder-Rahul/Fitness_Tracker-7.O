import {
  FitnessCenterRounded,
  LocalFireDepartmentRounded,
  TimelineRounded,
} from '@mui/icons-material';

export const counts = [
  {
    name: "Calories Burned",
    icon: (
      <LocalFireDepartmentRounded style={{ fontSize: "40px" }} />
    ),
    desc: "Total calories burned today",
    key: "totalCaloriesBurned",
    unit: "kcal",
    color: "#EB9E34",
    lightColor: "#FDF3E0",
  },
  {
    name: "Workouts",
    icon: <FitnessCenterRounded style={{ fontSize: "40px" }} />,
    desc: "Total no of workouts this week",
    key: "totalWorkouts",
    unit: "count",
    color: "#4CAF50",
    lightColor: "#E8F5E9",
  },
  {
    name: "Average Calories",
    icon: <TimelineRounded style={{ fontSize: "40px" }} />,
    desc: "Average calories burned per workout",
    key: "avgCaloriesBurntPerWorkout",
    unit: "kcal",
    color: "#2196F3",
    lightColor: "#E3F2FD",
  },
];