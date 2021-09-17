import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userTable } from '../../types';
import { apiService } from '../../utils/api-service';

const Profile = () => {
    const history = useHistory();
    const [user, setUser] = useState<userTable['id']>('');

    useEffect(() => {
        apiService('/api/users')
            .then(data => {
                setUser(data)
            })
    }, []);
    const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <div className="col-md-6 p-3 mx-3">
            <h1>{user}</h1>
            <Link to="/">Post Chirp </Link>
            <button onClick={handleSignOut} className="text-primary border border-white bg-white">Sign out</button>
        </div>
    )
}

export default Profile;
