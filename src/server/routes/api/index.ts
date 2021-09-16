import * as express from 'express';
import chirprRouter from './chirps';
import donateRouter from './donate';

const router = express.Router();

router.use('/chirps', chirprRouter);
router.use('/donate', donateRouter);

export default router;