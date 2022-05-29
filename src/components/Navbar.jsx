import React from 'react';

import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav className='w-full flex md: justify-between items-center p-4'>
        <div className='md: flex-[0.5] justify-center items-center'>
        </div>
        <ul className='text-white md:flex hidden list-none 
        flex-row justify-betwen items-center flex-initial'>
        </ul>
    </nav>
    );
}
export default Navbar;