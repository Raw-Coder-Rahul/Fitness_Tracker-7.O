import {
  FitnessCenterRounded,
  LocalFireDepartmentRounded,
  TimelineRounded,
} from '@mui/icons-material';

export const counts = [
  {
    name: "Calories Burned",
    icon: (
      <LocalFireDepartmentRounded sx={{ color : "#EB9E34"}} />
    ),
    desc: "Total calories burned today",
    key: "totalCaloriesBurned",
    unit: "kcal",
    color: "#EB9E34",
    lightColor: "#fee7beff",
  },
  {
    name: "Workouts",
    icon: <FitnessCenterRounded sx={{ color : "#4CAF50"}} />,
    desc: "Total no of workouts this week",
    key: "totalWorkouts",
    unit: "count",
    color: "#4CAF50",
    lightColor: "#c0ffc5ff",
  },
  {
    name: "Average Calories",
    icon: <TimelineRounded sx={{ color : "#db1450ff"}} />,
    desc: "Average calories burned per workout",
    key: "avgCaloriesBurnedPerWorkout",
    unit: "kcal",
    color: "#db1450ff",
    lightColor: "#ffcbceff",
  },
];