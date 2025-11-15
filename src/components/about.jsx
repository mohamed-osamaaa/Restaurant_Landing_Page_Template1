import aboutBanner from '../assets/About Section Background.png';
import aboutImage from '../assets/aboutImage.png';

function About() {
    return (
        <div id='about' className='mt-10'>
            <img src={aboutImage} alt="aboutImage" className='absolute hidden md:flex w-[635px] h-auto -left-36 lg:-left-20 mt-36 z-10' />
            <div className='relative flex justify-between items-center'>
                <img src={aboutBanner} alt="aboutBanner" className='w-[331px] h-[865px] hidden md:flex' />
                <div className='flex flex-col items-center md:items-start text-center md:text-start w-1/2 md:w-1/3 mx-auto md:mr-14 mt-28 md:mt-0 lg:mr-72 gap-10'>
                    <h2 className='text-xl text-orange-500'>About</h2>
                    <h2 className='text-2xl md:text-4xl font-bold'>
                        Food Is An Important Part Of A Balanced Diet
                    </h2>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                    <p className='text-gray-500'>
                        Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                    <button className='bg-orange-500 cursor-pointer text-white w-36 h-10 rounded-4xl'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About