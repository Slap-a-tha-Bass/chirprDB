import React from 'react';
import { ChirpCardProps } from '../../types';
import { Link, useHistory } from 'react-router-dom';

const ChirpCard = (props: ChirpCardProps) => {
    const history = useHistory();

    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (confirm("Do you want to delete this chirp?")) {
            fetch(`/api/chirps/${props.id}/delete`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    history.push('/chirps')
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className="card col-md-6 p-0 bg-primary mt-3">
            <div className="card-header text-light">{props.username}</div>
            <div className="card-body">
                <div className="card-text bg-light text-primary border border-info rounded">{props.message}</div>
            </div>
            <div className="d-flex justify-content-around mb-2">
                {props.isPreview && <Link to={`/chirps/${props.id}`} className="btn btn-outline-light">View Chirp</Link>}     
                {props.isPreview || <Link to={`/chirps/${props.id}/edit`} className="btn btn-outline-light">Edit Chirp</Link>}
                {props.isPreview || <button onClick={handleDeleteClick} className="btn btn-outline-light">Delete Chirp</button>}
            </div>
        </div>
    )
}

export default ChirpCard;
