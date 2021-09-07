import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Link to='/' className="btn btn-primary">Home</Link>
            <Link to='/chirps' className="btn btn-primary ml-2">Chirps</Link>
            <Link to='/donate' className="btn btn-primary ml-2">Donate</Link>
        </>
    )
}

export default NavBar;
