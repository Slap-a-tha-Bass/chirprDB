import React, { useEffect, useState } from 'react';
import { newChirp } from '../../types';
import ChirpCard from '../components/ChirpCard';

const Chirps = () => {
    const [chirps, setChirps] = useState<newChirp[]>([]);

    useEffect(() => {
        fetch("/api/chirps")
            .then(res => res.json())
            .then(data => setChirps(data))
    }, []);

    return (
          <div>
              <h3 className="text-primary text-center col-md-6">All Chirps</h3>
              {chirps.map((chirp) => (
                  <ChirpCard {...chirp} key={`${chirp.id}`} isPreview />
              ))}
          </div>
        
    )
}

export default Chirps;
