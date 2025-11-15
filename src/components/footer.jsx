import {
    CiFacebook,
    CiInstagram,
    CiLinkedin,
    CiYoutube,
} from 'react-icons/ci';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-10">

                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-bold">FOODIE</h2>
                    <div className="flex gap-4 text-2xl">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <CiFacebook className="hover:text-blue-500 transition-colors" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <CiYoutube className="hover:text-red-500 transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <CiInstagram className="hover:text-pink-500 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/mohamed-osama-864025289/" target="_blank" rel="noopener noreferrer">
                            <CiLinkedin className="hover:text-blue-700 transition-colors" />
                        </a>
                    </div>
                </div>


                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                    <a href="https://www.linkedin.com/in/mohamed-osama-864025289/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Quality</a>
                    <a href="https://github.com/mohamed-osamaaa/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Help</a>
                    <a href="https://www.linkedin.com/in/mohamed-osama-864025289/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Work</a>
                    <a href="https://github.com/mohamed-osamaaa/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Testimonial</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p>244-5333-7783</p>
                    <p>hello@food.com</p>
                    <p>123 Food St, Los Angeles, CA</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg mb-2">Policies</h3>
                    <a href="https://www.linkedin.com/in/mohamed-osama-864025289/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="https://github.com/mohamed-osamaaa/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Terms of Service</a>
                    <a href="https://www.linkedin.com/in/mohamed-osama-864025289/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Refund Policy</a>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-10">
                &copy; {new Date().getFullYear()} FOODIE. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
