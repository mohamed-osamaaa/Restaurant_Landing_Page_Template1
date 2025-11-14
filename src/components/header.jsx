import React from 'react';

function Header() {
    return (
        <header className='flex justify-between gap-10 p-4 my-5'>
            <div>
                <h1 className='text-orange-500 tracking-wide fw-bold text-3xl'>FOODIE</h1>
            </div>
            <div className='flex justify-center gap-10'>
                <ul className='flex items-center gap-4'>
                    <li className='hover:text-orange-500 cursor-pointer'>Home</li>
                    <li className='hover:text-orange-500 cursor-pointer'>Menu</li>
                    <li className='hover:text-orange-500 cursor-pointer'>About</li>
                    <li className='hover:text-orange-500 cursor-pointer'>Contact</li>
                </ul>
                <div>
                    <button className='bg-orange-500 cursor-pointer text-white w-36 h-10 rounded-4xl'>
                        Booking Now
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;