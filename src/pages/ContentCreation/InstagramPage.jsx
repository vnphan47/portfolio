import { getImage } from '../../utils/image';

const InstagramPage = () => {
    return (
        <div className="container__box px__mobile">
            <h2 className="c-title text-[#B4C292] mb-8">@pinku.chaa</h2>
            <p className="md:max-w-[26rem] mx-auto mb-12">
                A cozy corner of Instagram where I share my matcha moments, from serene tea ceremonies to delightful matcha-infused treats.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Instagram content grid will go here */}
            </div>
            <div className="flex justify-center mt-8">
                <a 
                    href="https://www.instagram.com/pinku.chaa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border-2 border-[#B4C292] text-[#B4C292] hover:bg-[#B4C292] hover:text-white transition-colors duration-300"
                >
                    Visit @pinku.chaa
                </a>
            </div>
        </div>
    );
};

export default InstagramPage; 