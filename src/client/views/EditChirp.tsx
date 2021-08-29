import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { newChirp } from '../../types';

const EditChirp = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const [editChirp, setEditChirp] = useState<newChirp>(null);
    const [username, setEditUsername] = useState<newChirp['username']>(null);
    const [message, setEditMessage] = useState<newChirp['message']>(null);

    useEffect(() => {
        fetch(`/api/chirps/${id}`)
            .then(res => res.json())
            .then(data => {
                setEditChirp(data);
                setEditUsername(data.username);
                setEditMessage(data.message);
            })
    }, [id]);

    const editUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditUsername(e.target.value);
    }
    const editMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditMessage(e.target.value);
    }
    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch(`/api/chirps/${id}/edit`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, message })
        })
            .then(res => res.json())
            .then(data => {
                history.push(`/chirps/${id}`)
            })
            .catch(err => console.log(err))
    };
    return (
        <>
            <div className="container">
                <h3 className="text-primary text-center col-md-6">Edit Chirp</h3>
                <form className="form-group bg-primary col-md-6">
                    <div>
                        <label>Username</label>
                        <input type="text" className="form-control" value={username || ''} onChange={editUsernameInput} />
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" className="form-control" value={message || ''} onChange={editMessageInput} />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-light m-3" onClick={handleSaveClick}>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditChirp;
