import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="col-md-6 d-flex justify-content-between pt-2">
            <div>
                <Link to='/' className="text-primary btn-sm">Home</Link>
                <Link to='/chirps' className="text-primary ml-2 btn-sm">Chirps</Link>
                <Link to='/profile' className="text-primary ml-2 btn-sm">Profile</Link>
            </div>
            <div>
                <Link to='/donate' className="text-primary ml-2 btn-sm">Donate</Link>
                <Link to='/register' className="text-primary ml-2 btn-sm">Register</Link>
                <Link to='/login' className="text-primary ml-2 btn-sm">Login</Link>
            </div>
        </div>
    )
}

export default NavBar;
