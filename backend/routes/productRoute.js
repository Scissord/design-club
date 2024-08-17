import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import * as controller from '../controllers/productController.js';

const router = express.Router();

router.get("", protectRoute, controller.get);
router.get("/all", protectRoute, controller.getAll);

router.post("", protectRoute, controller.create);

router.delete("/:id", protectRoute, controller.softDelete);

export default router;