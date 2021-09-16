import * as express from 'express';
import db_chirps from '../../db/queries/chirps';
import { newChirp } from '../../../types';
import { v4 as uuid_v4 } from 'uuid';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const chirps = await db_chirps.get_chirps();
        res.json(chirps);
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const [chirp] = await db_chirps.get_one_chirp(id);
        res.json(chirp);
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
router.post('/', async (req, res) => {
    const { username, message } = req.body;
    if (!username || !message) {
        return res.status(400).json({ message: "Please fill out all required fields." });
    }
    const id = uuid_v4();
    const wholeChirp: newChirp = { id, username, message };
    try {
        const postChirp = await db_chirps.post_chirp(wholeChirp);
        res.status(201).json({ message: "Order created", id});
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { username, message } = req.body;
    const updated = { id, username, message };
    try {
        const updateOrder = await db_chirps.update_chirp(id, updated);
        res.status(201).json(updateOrder);
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteChirp = await db_chirps.delete_chirp(id);
        res.json({ message: "Order deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
export default router;