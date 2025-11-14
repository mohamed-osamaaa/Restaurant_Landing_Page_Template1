import Image1 from '../assets/image.png';

function Part1() {
    return (
        <div className='flex justify-center -mt-28 ml-24'>
            <div className='flex items-center w-100'>
                <div className='flex flex-col items-start gap-10'>
                    <p className='text-4xl'>
                        Your Favourite Food Delivered Hot & Fresh
                    </p>
                    <p>
                        Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
                    </p>
                    <button className='bg-orange-500 cursor-pointer text-white w-36 h-10 rounded-4xl'>Order Now</button>
                </div>
            </div>
            <div>
                <img src={Image1} alt="Image1" className='w-[1146px] h-[1024px] md:w-[900px] sm:w-full' />
            </div>
        </div>
    )
}

export default Part1