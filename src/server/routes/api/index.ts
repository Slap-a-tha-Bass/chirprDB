import * as express from 'express';
import chirprRouter from './chirps';
import donateRouter from './donate';
import usersRouter from './users';

const router = express.Router();

router.use('/chirps', chirprRouter);
router.use('/donate', donateRouter);
router.use('/users', usersRouter);

export default router;