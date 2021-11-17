import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="d-flex justify-content-between align-items-center col-md-6 mt-2">
            <div>
                <Link to='/' className="text-primary h4 mx-2">C</Link>
                <Link to='/chirps' className="text-primary btn-sm">Chirps</Link>
                <Link to='/profile' className="text-primary btn-sm">Profile</Link>
            </div>
            <div>
                <Link to='/donate' className="text-primary h4 mx-2">$</Link>
                <Link to='/register' className="text-primary btn-sm">Register</Link>
                <Link to='/login' className="text-primary btn-sm">Login</Link>
            </div>
        </div>
    )
}

export default NavBar;
