import * as React from "react";
import { NavLink, Link } from "react-router-dom";

export default function NavList() {
    return (
        <nav className="nav-bar sticky top-0 z-50 bg-white">
            <div className='text-2xl hover:animate-pulse'>
                <Link to="/">
                    <span className='font-bold tracking-wide'>NITS</span>
                    <span className='font-thin'>paper</span>
                </Link>
            </div>

            <div className="text-lg">

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'nav-active nav-passive mr-4' : 'nav-passive mr-4'
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'nav-active nav-passive' : 'nav-passive'
                    }
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}