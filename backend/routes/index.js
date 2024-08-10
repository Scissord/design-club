import { Router } from 'express';
import authRoutes from './authRoute.js';
import productRoutes from './productRoute.js';
import columnRoutes from './columnRoute.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/columns', columnRoutes);

export default router;