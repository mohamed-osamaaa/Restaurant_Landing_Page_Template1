function Header() {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='relative flex justify-between gap-10 p-4 my-5 mx-32'>
            <div>
                <h1 className='text-orange-500 tracking-wide font-bold text-3xl'>FOODIE</h1>
            </div>
            <div className='flex justify-center gap-10'>
                <ul className='flex items-center gap-10'>
                    <li>
                        <button
                            onClick={() => handleScroll('home')}
                            className='hover:text-orange-500 cursor-pointer font-bold'
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll('about')}
                            className='hover:text-orange-500 cursor-pointer font-bold'
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll('testimonial')}
                            className='hover:text-orange-500 cursor-pointer font-bold'
                        >
                            Testimonial
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll('contact')}
                            className='hover:text-orange-500 cursor-pointer font-bold'
                        >
                            Contact
                        </button>
                    </li>
                </ul>
                <div>
                    <button
                        className='bg-white cursor-pointer w-36 h-10 rounded-4xl font-bold'
                    >
                        Booking Now
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
