import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import Image from 'next/image';
import logo from '@/assets/logobooktop.png'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Logoutbtn from '../logoutbtn/Logoutbtn';

const Navbar = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">

                {/* ---------- navbar-start ---------- */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li><Navlink href={'/'}>Home</Navlink></li>
                            <li><Navlink href={'/books'}>Books</Navlink></li>
                            <li><Navlink href={'/profile'}>Profile</Navlink></li>
                        </ul>
                    </div>

                    <Link className="ml-3" href={'/'}>
                        <Image
                            src={logo}
                            width={25}
                            height={25}
                            alt="logo"
                        />
                    </Link>
                </div>

                {/* ---------- navbar-center ---------- */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-black font-semibold space-x-5">
                        <li><Navlink href={'/'}>Home</Navlink></li>
                        <li><Navlink href={'/books'}>Books</Navlink></li>
                        <li><Navlink href={'/profile'}>Profile</Navlink></li>
                    </ul>
                </div>

                {/* ---------- navbar-end ---------- */}
                <div className="navbar-end space-x-2">
                    <p className="text-black">
                        Welcome <span className="font-semibold">{session && `${session.user.name}`}</span>
                    </p>
                    {session ? (
                        <Logoutbtn></Logoutbtn>
                    ) : (
                        <Link href="/login" className="btn">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;