import express from "express";
import * as controller from '../controllers/productController.js';

const router = express.Router();

router.get("", controller.get);

export default router;