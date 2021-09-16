import * as express from 'express';
import { ReqUser } from '../../../types';
import { authenticate } from 'passport';

const router = express.Router();

router.get('/', authenticate('jwt'), (req: ReqUser, res) => {
    try {
        res.json(`Welcome, ${req.user.email}!`);
    } catch (error) {
        res.status(500).json({ message: "Check GET or TOKEN on users.ts", error: error.message });
    }
})

export default router;