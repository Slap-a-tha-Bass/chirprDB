import { Query } from "../index";
import { newChirp } from "../../../types";

const get_chirps = () => Query<newChirp[]>('SELECT * FROM chirps ORDER BY created_at ASC');
const get_one_chirp = ( id: string ) =>Query<newChirp[]>('SELECT * FROM chirps WHERE id=?', [id]);
const post_chirp = (wholeChirp: newChirp) => Query('INSERT INTO chirps SET ?', [wholeChirp]);
const update_chirp = ( id: string, updatedChirp: newChirp) => Query('UPDATE chirps SET ? WHERE id=?', [updatedChirp, id]);
const delete_chirp = ( id: string) => Query('DELETE FROM chirps WHERE id=?', [id]);

export default {
    get_chirps,
    get_one_chirp,
    post_chirp,
    update_chirp,
    delete_chirp
}