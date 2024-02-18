import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center ">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12  "
                            alt="Logo"
                        />
                    </Link>

                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-10 ml-20 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 22"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    <div className="flex items-center lg:order-2">
                        <div className="lg:flex hidden">
                            <NavLink
                                exact
                                to="/"
                                className={({ isActive }) =>
                                    `text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${isActive ? 'text-orange-700' : ''
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                exact
                                to="/user/preetamf"
                                className={({ isActive }) =>
                                    `text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${isActive ? 'text-orange-700' : ''
                                    }`
                                }
                            >
                                GitHub
                            </NavLink>
                        </div>
                    </div>
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } lg:hidden w-full lg:w-auto lg:order-1`}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={toggleMenu}
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/user/preetamf"
                                    onClick={toggleMenu}
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                >
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
