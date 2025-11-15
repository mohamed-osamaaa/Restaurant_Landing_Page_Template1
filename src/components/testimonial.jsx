import profile from '../assets/john-doe-image.png';

function Testimonial() {
    return (
        <div id='testimonial' className='flex flex-col my-32 gap-20'>
            <div className='flex flex-col items-center text-center gap-9 mx-5 md:w-1/3 mt-10 md:mx-auto'>
                <h2 className="text-xl text-orange-500">Testimonial</h2>
                <p className="text-4xl font-bold">What They Are Saying</p>
                <p className='text-gray-500 text-center'>
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-2 px-5 gap-6 mx-5 lg:w-1/3 md:w-1/2 md:mx-auto rounded-2xl">
                <img src={profile} alt="profile" />
                <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <h3 className='text-2xl font-bold pb-5'>John Doe</h3>
            </div>
        </div>
    )
}

export default Testimonial