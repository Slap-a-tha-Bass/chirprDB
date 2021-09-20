import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { userTable } from '../../types';
import { apiService } from '../../utils/api-service';
import { token } from '../components/PrivateRoute';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState<userTable['email']>('');
    const [password, setPassword] = useState<userTable['password']>('');

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email, password })
            .then(data => {
                localStorage.setItem(token, data.TOKEN),
                history.push('/profile');
            })
            .catch((error) => {
                console.log(error, error.message);
                history.push('/invalid')
            })
    }

    return (
        <>
            <div className="container">
                <h1 className="col-md-6 text-center text-primary my-2">Login</h1>
                <form className="form-group col-md-6 bg-primary">
                    <div>
                        <label className="text-light mt-2">Email</label>
                        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className="text-light mt-2">Password</label>
                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-outline-light m-2" onClick={handleLogin} >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
