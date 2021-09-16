import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { authenticate } from 'passport';
import { ReqUser } from '../../../types';
import { jwtConfig } from '../../config';

const router = express.Router();

router.post('/', authenticate('local'), async (req: ReqUser, res) => {
    const { email, password } = req.body;
    try {
            const TOKEN = jwt.sign({ userid: req.user?.id, email: req.user?.email, role: 1 },
                jwtConfig.secret,
                { expiresIn: jwtConfig.expires }
            );
            res.json(TOKEN);
    } catch (error) {
        res.status(500).json({ message: "Check login.ts" });
    }
});

export default router;


