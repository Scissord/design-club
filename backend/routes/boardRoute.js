import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import * as controller from '../controllers/boardController.js';

const router = express.Router();

router.get("", protectRoute, controller.getBoard);
router.get("/:card_id", protectRoute, controller.getCard);
router.post("/:column_id", protectRoute, controller.createCard);
router.patch("/:card_id", protectRoute, controller.moveCard);
router.delete("/:card_id", protectRoute, controller.deleteCard);

export default router;