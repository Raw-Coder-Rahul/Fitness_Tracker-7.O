import express from "express";
import { UserLogin, UserRegister } from "../controllers/User.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

export default router;