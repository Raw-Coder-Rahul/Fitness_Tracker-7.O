import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createError } from "../error.js";
import User from "../models/User.js";
import Workout from "../models/Workout.js";

dotenv.config();

export const UserRegister = async (req, res, next) => {
  try {
    const { email, password, name, img } = req.body;

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return next(createError(409, "Email is already in use"));
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      img,
    });

    const createdUser = await user.save();

    const token = jwt.sign(
      { id: createdUser._id },
      process.env.JWT,
      { expiresIn: "7d" } // or "1y", "30d", etc.
    );

    return res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(404, "User not found"));
    }

    console.log(password, user.password);
    const isPasswordCorrect = await bcrypt.compareSync(password, user?.password);
    if (!isPasswordCorrect) {
      return next(createError(403, "Incorrect Password"));
    }
    const token = jwt.sign(
      { id: createdUser._id },
      process.env.JWT,
      { expiresIn: "7d" } // or "1y", "30d", etc.
    );

    return res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

export const getUserDashboard = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const user = await User.findById(userId);
    if (!user) {
      return next(createError(404, "User not found"));
    }

    const currentDateFormatted = new Date();
    const startToday = new Date(
      currentDateFormatted.getFullYear(),
      currentDateFormatted.getMonth(),
      currentDateFormatted.getDate()
    );
    const endToday = new Date(
      currentDateFormatted.getFullYear(),
      currentDateFormatted.getMonth(),
      currentDateFormatted.getDate() + 1
    );

    // calculate total calories burnt
    const totalCaloriesBurned = await Workout.aggregate([
      {$match: {user: user._id, date: {$gte: startToday, $lt: endToday}}},
      {
        $group: {
          _id: null,
          totalCaloriesBurned: { $sum: "$caloriesBurned"}
        },
      },
    ]);

    // Calculate total no of workouts
    const totalWorkouts = await Workout.countDocuments({
      user: userId,
      date: {$gte: startToday, $lt: endToday}
    })

    // Calculate average calories burnt per workout
    const avgCaloriesBurnedPerWorkout = totalWorkouts > 0 ? totalCaloriesBurned[0]?.totalCaloriesBurned / totalWorkouts : 0;

    // Fetch category of workouts
    const categoryCalories = await Workout.aggregate([
      {
        $match: {user: user._id, date: {$gte: startToday, $lt: endToday}}},
        {
          $group: {
            _id: "$category",
            totalCaloriesBurned: { $sum: "$caloriesBurned"},
          },
        },
    ]);

    // Format category data for pie chart
    const pieChartData = categoryCalories.map((category, index) => ({
      id: index,
      value: category.totalCaloriesBurned,
      label: category._id,
    }));

    const weeks = [];
    const caloriesBurned = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(
        currentDateFormatted.getTime() - i * 24 * 60 * 60 * 1000
      );
      weeks.push(`${date.getDate()}th`);

      const startOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      const endOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1
      );

      const weekDate = await Workout.aggregate([
        {
          $match: {
            user: user._id,
            date: { $gte: startOfDay, $lt: endOfDay },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$date"}},
            totalCaloriesBurned: { $sum: "$caloriesBurned"},
          },
        },
        {
          $sort: {_id: 1},
        },
      ]);

      caloriesBurned.push(
        weekDate[0]?.totalCaloriesBurned ? weekDate[0]?.totalCaloriesBurned : 0
      );
    }

    return res.status(200).json({
      totalCaloriesBurned:
        totalCaloriesBurned.length > 0 ? totalCaloriesBurned[0].totalCaloriesBurned : 0,
      totalWorkouts: totalWorkouts,
      avgCaloriesBurnedPerWorkout: avgCaloriesBurnedPerWorkout,
      totalCaloriesBurned: { weeks, caloriesBurned},
      pieChartData: pieChartData,
    });
  } catch (err) {
    next(err);
  }
};