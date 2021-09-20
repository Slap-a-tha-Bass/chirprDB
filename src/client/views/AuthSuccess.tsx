import React from 'react';
import { Link } from 'react-router-dom';

const AuthSuccess = () => {
    return (
        <div className="col-md-6 m-3">
            <h1 className="text-primary display-3">Registration Success!</h1>
            <Link className="text-primary" to="/login">Go to Login Page</Link>
        </div>
    )
}

export default AuthSuccess;
