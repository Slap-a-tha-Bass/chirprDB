import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newChirp } from '../../types';
import ChirpCard from '../components/ChirpCard';

const ViewChirp = () => {
    const { id } = useParams<{ id: string }>();
    const [viewChirp, setViewChirp] = useState<newChirp>(null);

    useEffect(() => {
        fetch(`/api/chirps/${id}`)
            .then(res => res.json())
            .then(data => setViewChirp(data))
    }, [id]);

    return (
        <div>
            <h3 className="text-center text-primary col-md-6">{viewChirp?.username}'s Chirp</h3>
            <ChirpCard {...viewChirp} />
        </div>
    )
}

export default ViewChirp;
