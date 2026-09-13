import React from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className='pt-2 border border-b border-gray-300 sticky top-0 z-50'>
            <div className='container mx-auto flex justify-between py-2'>
                <img src={Logo} alt="" className='px-8' />
                <ul className='flex gap-4 items-center'>
                    <li className='hover:text-secondary'>Home</li>
                    <li className='hover:text-secondary'>Technologies</li>
                    <li className='hover:text-secondary'>Projects</li>
                    <li className='hover:text-secondary'>About</li>
                    <li className='hover:text-secondary'>Contact</li>
                </ul>
                <div>
                    <button className="pr-4">Sign In</button>
                    <button className="btn btn-secondary rounded-[20px]">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;