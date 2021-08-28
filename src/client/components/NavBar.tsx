import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Link to='/' className="btn btn-info">Home</Link>
            <Link to='/chirps' className="btn btn-info">Orders</Link>
        </>
    )
}

export default NavBar;
