import imageFeature2 from '../assets/choose-image.png';
import imageFeature3 from '../assets/delivery-image.png';
import imageFeature1 from '../assets/pick-meals-image.png';

function Work() {
    const features = [
        {
            image: imageFeature1,
            title: "Pick Meals",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },
        {
            image: imageFeature2,
            title: "Choose How Often",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et "
        },
        {
            image: imageFeature3,
            title: "Fast Deliveries",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum"
        },
    ]


    return (
        <div className='flex flex-col my-32 gap-20'>
            <div className='flex flex-col items-center text-center gap-9 mx-5 md:w-1/3 md:mx-auto'>
                <h2 className="text-xl text-orange-500">Work</h2>
                <p className="text-4xl font-bold">How It Works</p>
                <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-10'>
                {features.map((feature, index) => (
                    <div key={index} className='flex mx-5 w-full sm:w-[45%] lg:w-[30%] lg:mx-0 flex-col items-center text-center p-10 gap-10 bg-white'>
                        <img src={feature.image} alt={feature.title} className='w-16 h-16' />
                        <h2 className='text-2xl font-bold'>{feature.title}</h2>
                        <p className='text-gray-500'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work