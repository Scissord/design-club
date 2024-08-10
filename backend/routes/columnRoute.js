import express from "express";
import * as controller from '../controllers/columnController.js';
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("", protectRoute, controller.get);
router.patch("/:id", protectRoute, controller.moveCard);

export default router;