function Header() {
    return (
        <header className='relative flex justify-between gap-10 p-4 my-5 mx-32'>
            <div>
                <h1 className='text-orange-500 tracking-wide font-bold text-3xl'>FOODIE</h1>
            </div>
            <div className='flex justify-center gap-10'>
                <ul className='flex items-center gap-10'>
                    <li className='hover:text-orange-500 cursor-pointer font-bold'>Home</li>
                    <li className='hover:text-orange-500 cursor-pointer font-bold'>Menu</li>
                    <li className='hover:text-orange-500 cursor-pointer font-bold'>About</li>
                    <li className='hover:text-orange-500 cursor-pointer font-bold'>Contact</li>
                </ul>
                <div>
                    <button className='bg-white cursor-pointer w-36 h-10 rounded-4xl font-bold'>
                        Booking Now
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;