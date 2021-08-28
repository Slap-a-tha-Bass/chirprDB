import React, { useEffect, useState } from 'react';
import { newChirp } from '../../types';

const Chirps = () => {
    const [chirps, setChirps] = useState<newChirp[]>([]);

    useEffect(() => {
        fetch("/api/chirps")
            .then(res => res.json())
            .then(data => setChirps(data))
    }, []);

    return (
        <div>
            {chirps.map((chirp) => (
                <h1>{chirp.message}</h1>
            ))}
        </div>
    )
}

export default Chirps;
