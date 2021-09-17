import React from 'react';
import { Link } from 'react-router-dom';

const Invalid = () => {
    return (
        <div className="col-md-6 m-3">
            <h1 className="text-danger display-3">Invalid Credentials</h1>
            <Link className="text-danger" to="/login">Try Again</Link>
        </div>
    )
}

export default Invalid;
