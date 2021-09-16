import React, { useState } from 'react';
import { userTable } from '../../types';

const Register = () => {

    const [email, setEmail] = useState<userTable['email']>('');
    const [password, setPassword] = useState<userTable['password']>('');

    const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('/auth/register')
    }

    return (
        <>
            <div className="container">
                <h1 className="col-md-6 text-center text-primary my-2">Chirpr</h1>
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
                        <button className="btn btn-outline-light m-2" onClick={handleSignUp} >Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;
