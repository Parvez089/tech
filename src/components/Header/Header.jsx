/** @format */

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className='lg:flex lg:flex-row lg:justify-center lg:items-center gap-12 hidden mt-5 shadow-md p-4'>
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
    </div>
  );
};

export default Header;
