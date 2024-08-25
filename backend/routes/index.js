import { Router } from 'express';
import authRoutes from './authRoute.js';
import productRoutes from './productRoute.js';
import boardRoutes from './boardRoute.js';
import cardRoutes from './cardRoute.js';
import cardItemRoute from './cardItemRoute.js';
import sourceRoutes from './sourceRoute.js';
import clientRoutes from './clientRoute.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/board', boardRoutes);
router.use('/cards', cardRoutes);
router.use('/cardItems', cardItemRoute);
router.use('/sources', sourceRoutes);
router.use('/clients', clientRoutes);

export default router;