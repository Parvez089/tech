/** @format */
"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <main className=' bg-[#f7f7f7]  '>
      <nav className='flex lg:w-[1200px] mx-auto  justify-between px-8 py-6'>
        <div className='flex flex-row lg:flex justify-between items-center gap-4'>
          <IoMenu
            onClick={() => setMenu(true)}
            className='lg:text-3xl text-2xl lg:hidden'
          />
          <IoIosSearch className='lg:text-3xl text-2xl lg:hidden' />
          <CiLocationOn className=' lg:flex hidden text-xl font-bold' />
          <h1 className='lg:flex justify-end text-sm hidden '>FIND STORE</h1>
        </div>
        <div className=''>
          <h1 className='lg:text-2xl text-xl text-center font-bold'>
            Techology<span className='text-[#ff4865]'>BD</span>
          </h1>
        </div>
        <div className='flex flex-row justify-center items-center text-2xl lg:text-3xl gap-4'>
          <FaRegUser />
          <IoCartOutline />
        </div>

        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0  left-0 -translate-x-full transition-all z-50",
            menu && "translate-x-0"
          )}>
          <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-6 z-50 flex'>
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className='text-3xl  mt-0 mb-8 cursor-pointer w-56'
            />

            <Link className='font-bold' href={"/"}>
              Home
            </Link>
            <Link className='font-bold' href={"/about"}>
              About
            </Link>
            <Link className='font-bold' href={"monitor"}>
              Monitor
            </Link>
            <Link className='font-bold' href={"camera"}>
              Camera
            </Link>
            <Link className='font-bold' href={"security"}>
              Security
            </Link>
          </section>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
