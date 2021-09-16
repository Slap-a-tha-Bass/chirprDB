import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { newChirp } from '../../types';

const Home = () => {
    const history = useHistory();

    const [username, setUsername] = useState<newChirp['username']>(null);
    const [message, setMessage] = useState<newChirp['message']>(null);

    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handleMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }
    const handlePostChirpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('/api/chirps', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, message })
        })
        .then(res => res.json())
        .then(data => {
            history.push(`/chirps/${data.id}`)
        })
        .catch(err => console.log(err));
    }
    return (
        <>
            <div className="container">
                <h1 className="col-md-6 text-center text-primary my-2">Chirpr</h1>
                <form className="form-group col-md-6 bg-primary">
                    <div>
                        <label className="text-light mt-2">Username</label>
                        <input placeholder="Something non-cliche please..." type="text" className="form-control" onChange={handleUsernameInput} />
                    </div>
                    <div>
                        <label className="text-light mt-2">Chirp Message</label>
                        <textarea placeholder="Tell us what's chirpin' ya..." className="form-control" onChange={handleMessageInput} />
                    </div>
                    <div>
                        <button className="btn btn-outline-light m-2" onClick={handlePostChirpClick} >Post Chirp</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home;
