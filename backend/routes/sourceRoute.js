import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import * as controller from '../controllers/sourceController.js';

const router = express.Router();

router.get("/all", protectRoute, controller.getAll);

export default router;
