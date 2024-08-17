import { Router } from 'express';
import authRoutes from './authRoute.js';
import productRoutes from './productRoute.js';
import boardRoutes from './boardRoute.js';
import sourceRoutes from './sourceRoute.js';
import clientRoutes from './clientRoute.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/board', boardRoutes);
router.use('/sources', sourceRoutes);
router.use('/clients', clientRoutes);

export default router;