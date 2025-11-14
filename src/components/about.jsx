import aboutBanner from '../assets/About Section Background.png';
import aboutImage from '../assets/aboutImage.png';

function About() {
    return (
        <div className='mt-10'>
            <img src={aboutImage} alt="aboutImage" className='absolute w-[935px] h-[629px] -left-20 mt-36 z-10' />
            <div className='relative flex justify-between items-center'>
                <img src={aboutBanner} alt="aboutBanner" className='w-[331px] h-[865px]' />
                <div className='flex flex-col items-start w-100 mr-72 gap-10'>
                    <h2 className='text-xl text-orange-500'>About</h2>
                    <h2 className='text-4xl font-bold'>
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