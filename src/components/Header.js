import React from "react";
import { Outlet } from "react-router";
import { Link, useLocation } from 'react-router-dom';
function Header(){
    const location = useLocation();
    return(
        <>
            <header className="bg-gray-900 text-white">
                <nav className="flex items-center justify-between px-8 py-4">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="hover:text-gray-300 transition duration-300 ease-in-out">Home</Link>
                        <Link to="/aboutUs" className="hover:text-gray-300 transition duration-300 ease-in-out">About Us</Link>
                        <Link to="/dashboard" className="hover:text-gray-300 transition duration-300 ease-in-out">Dashboard</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="hover:text-gray-300 transition duration-300 ease-in-out">Login</Link>
                        <Link to="/registration" className="hover:text-gray-300 transition duration-300 ease-in-out">Sign Up</Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
        
    )
}

export default Header;
