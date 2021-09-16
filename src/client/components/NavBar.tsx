import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="col-md-6 d-flex justify-content-between">
            <div>
                <Link to='/' className="btn btn-primary btn-sm">Home</Link>
                <Link to='/chirps' className="btn btn-primary ml-2 btn-sm">Chirps</Link>
                <Link to='/donate' className="btn btn-primary ml-2 btn-sm">Donate</Link>
            </div>
            <div>
                <Link to='/register' className="btn btn-primary ml-2 btn-sm">Sign Up</Link>
                <Link to='/login' className="btn btn-primary ml-2 btn-sm">Login</Link>
            </div>
        </div>
    )
}

export default NavBar;
