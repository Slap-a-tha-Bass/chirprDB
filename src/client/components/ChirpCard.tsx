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
        <div className="card col-md-6 p-0 bg-light mt-3">
            <div className="card-header text-primary font-weight-bold">{props.username}</div>
            <div className="card-body">
                <div className="card-text bg-primary text-light border border-info rounded px-2">{props.message}</div>
            </div>
            <div className="d-flex justify-content-around mb-2">
                {props.isPreview && <Link to={`/chirps/${props.id}`} className="btn btn-outline-primary">View Chirp</Link>}     
                {props.isPreview || <Link to={`/chirps/${props.id}/edit`} className="btn btn-outline-primary">Edit Chirp</Link>}
                {props.isPreview || <button onClick={handleDeleteClick} className="btn btn-outline-primary">Delete Chirp</button>}
            </div>
        </div>
    )
}

export default ChirpCard;
