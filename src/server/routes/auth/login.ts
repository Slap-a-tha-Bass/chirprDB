import * as express from 'express';
import { comparePasswords } from '../../../utils/passwords';
import db_users from '../../db/queries/users';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [userFound] = await db_users.find('email', email);
        if(userFound && comparePasswords(password, userFound.password)){
            res.json('Login successful!');
        } else {
            return res.status(401).json({ message: "Invalid credentials"});
        }
    } catch (error) {
        res.status(500).json({ message: "Check login.ts"});
    }
});

export default router;


