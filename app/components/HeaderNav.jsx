"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { useSession, SessionProvider } from 'next-auth/react';
import { signOut } from "next-auth/react"

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderNavLinks = () => {
    
    if (!session) {
      return (
        <li>
          <NavLink href="login" title="Login" />
        </li>
      );
    } else {
      return (
        <>
         <li className="relative group">
          <span className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">
            Hi, {session.user?.name}
          </span>
          <ul className="absolute hidden group-hover:block bg-slate-900 p-2 rounded shadow-lg">
            <li>
              <Link href="dashboard" className="block w-full text-left py-2 pl-3 pr-4 text-[#ADB7BE] hover:bg-slate-700 hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="block w-full text-left py-2 pl-3 pr-4 text-[#ADB7BE] hover:bg-slate-700 hover:text-white"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </li>
        </>
      );
    }
  };

  return (
    /* Navbar but make logo more to the left than the page links */
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-slate-900 bg-opacity-100">
      <div className="max-w-128 w-10/12 flex flex-wrap items-center justify-between mx-auto py-2" >
     
        <Link
          href={"/"}
          className = "w-48 md:w-72  h-full"
        >
         
          <img
              src="/images/CyrusCapitalLogo1.png"
              alt="Logo image"
              //fill parent div]

            />
            
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
           {renderNavLinks()}         
            </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks.concat(session ? [{ title: 'Dashboard', path: 'dashboard' }] : [{ title: 'Login', path: 'login' }])} /> : null}
    </nav>
   
  );
};

export default Navbar;
