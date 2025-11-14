import bannerImage from '../assets/home-banner-background.png';

function BannerImage() {
    return (
        <img src={bannerImage} alt="BannerImage" className='absolute -top-32 -right-16 -z-10 ' />
    )
}

export default BannerImage