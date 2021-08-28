import { Query } from "../index";
import { newChirp } from "../../../types";

const get_chirps = () => Query<newChirp[]>('SELECT * FROM chirps');

export default {
    get_chirps
}