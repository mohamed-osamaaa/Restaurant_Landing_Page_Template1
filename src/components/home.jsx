import Image1 from '../assets/image.png';

function Home() {
    return (
        <div className='flex justify-center mt-8 md:mt-28 lg:-mt-28 ml-5 md:ml-24'>
            <div className='flex items-center w-1/3'>
                <div className='flex flex-col items-start gap-5 md:gap-10'>
                    <p className='text-2xl md:text-4xl font-bold'>
                        Your Favourite Food Delivered Hot & Fresh
                    </p>
                    <p className='text-gray-500'>
                        Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
                    </p>
                    <button className='bg-orange-500 cursor-pointer text-white w-36 h-10 rounded-4xl'>Order Now</button>
                </div>
            </div>
            <div>
                <img src={Image1} alt="Image1" className='w-[1146px] h-auto md:w-[900px] sm:w-full' />
            </div>
        </div>
    )
}

export default Home