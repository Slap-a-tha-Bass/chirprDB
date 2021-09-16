import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { ReqUser } from '../../../types';
import { jwtConfig } from '../../config';
import { generateHash } from '../../../utils/passwords';
import db_users from '../../db/queries/users';

const router = express.Router();

router.post('/', async (req: ReqUser, res) => {
    const { email, password } = req.body;
    const newUser = { email, password };
    try {
            newUser.password = generateHash(newUser.password);
            const results = await db_users.insert(newUser);
            const TOKEN = jwt.sign({ userid: results.insertId, email: newUser.email, role: 1 },
                jwtConfig.secret,
                { expiresIn: jwtConfig.expires }
            );
            res.json(TOKEN);
    } catch (error) {
        res.status(500).json({ message: "Check register.ts", error: error.message});
    }
});

export default router;