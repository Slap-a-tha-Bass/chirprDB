import * as express from 'express';
import db_chirps from '../db/queries/chirps';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const chirps = await db_chirps.get_chirps();
        res.json(chirps);
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" })
    }
});

export default router;