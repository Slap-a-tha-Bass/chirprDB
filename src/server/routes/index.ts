import * as express from 'express';
import chirprRouter from './chirps';

const router = express.Router();

router.use('/chirps', chirprRouter);

export default router;