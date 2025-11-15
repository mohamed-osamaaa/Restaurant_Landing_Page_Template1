import bannerImage from '../assets/home-banner-background.png';

function BannerImage() {
    return (
        <img src={bannerImage} alt="BannerImage" className='absolute top-0 lg:-top-32 -right-1/2 lg:right-0 -z-10' />
    )
}

export default BannerImage