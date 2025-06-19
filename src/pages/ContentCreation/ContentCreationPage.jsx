import { Link } from 'react-router-dom';
import { getImage } from '../../utils/image';
import TitleSection from '../../components/TitleSection';

const ContentCreationPage = () => {
    const projects = [
        {
            imgName: 'pinku.chaa.png',
            title: '@pinku.chaa',
            subTitle: 'Instagram Content Creator'
        },
        {
            imgName: 'pinku.chaa1.png',
            title: '@pinku.chaa',
            subTitle: 'Instagram Content Creator'
        },
        {
            imgName: 'pinku.chaa2.png',
            title: '@pinku.chaa',
            subTitle: 'Instagram Content Creator'
        },
        {
            imgName: 'pinku.chaa3.png',
            title: '@pinku.chaa',
            subTitle: 'Instagram Content Creator'
        },
        {
            imgName: 'pinku.chaa4.png',
            title: '@pinku.chaa',
            subTitle: 'Instagram Content Creator'
        }
    ];

    return (
        <div>
            <TitleSection 
                title={`@pinku.chaa - a matcha content creator`}
                color="#E8F3D6" 
            />
            <div className="max-w-2xl mx-auto mb-12 text-center">
                <p className="mb-6 text-lg text-gray-700">
                    I created aesthetic matcha content through @pinku.chaa -- where I share my daily matcha moments, 
                    feature honest product reviews, and create fun, easy matcha drink recipes
                </p>
                <div className="flex items-center justify-center gap-4">
                    <a 
                        href="https://www.instagram.com/pinku.chaa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium transition-colors duration-200 border rounded-lg hover:bg-[#E8F3D6] border-[#B4C292] text-[#6B7B48]"
                    >
                        Follow on Instagram
                    </a>
                    <a 
                        href="https://www.tiktok.com/@pinku.chaa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium transition-colors duration-200 border rounded-lg hover:bg-[#E8F3D6] border-[#B4C292] text-[#6B7B48]"
                    >
                        Follow on TikTok
                    </a>
                </div>
            </div>
            <div className="container__box px-6 md:px-0 mb-16">
                <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-4">
                    {projects.map((project) => (
                        <div key={project.imgName} className="flex-shrink-0 w-full md:w-1/5">
                            <img 
                                className="aspect-[3/4] w-full object-cover rounded-lg" 
                                src={getImage(project.imgName)} 
                                alt={project.title}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <TitleSection 
                title="My other social media projects"
                color="#E8F3D6" 
            />
            <div className="container__box px-6 md:px-0 mb-16">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left side - iPhone mockup */}
                    <div className="md:w-1/4 text-center">
                        <div className="mb-4 max-w-[280px] mx-auto">
                            <img 
                                className="w-full rounded-lg"
                                src={getImage('iphone mockup FP IG.png')}
                                alt="FoodPlay Productions Instagram Mockup"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">FoodPlay Productions</h3>
                        <a 
                            href="https://www.instagram.com/foodplayproductions/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#6B7B48] hover:underline"
                        >
                            @foodplayproductions
                        </a>
                    </div>

                    {/* Right side - Photo grid */}
                    <div className="md:w-3/4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'FP spring newsletter.png',
                                'FP summer newsletter.png',
                                '2025 School Lunch Hero Poster.png',
                                'Tip 1.png',
                                'Tip 3.png',
                                'Tip 6.png',
                                'Tip 10.png',
                                'Tip End.png'
                            ].map((imgName) => (
                                <div key={imgName} className="w-full">
                                    <img 
                                        className="w-full h-auto rounded-lg"
                                        src={getImage(imgName)}
                                        alt={`FoodPlay Productions - ${imgName}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* VDM Section */}
            <div className="container__box px-6 md:px-0 mb-16">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left side - iPhone mockup */}
                    <div className="md:w-1/4 text-center">
                        <div className="mb-4 max-w-[280px] mx-auto">
                            <img 
                                className="w-full rounded-lg"
                                src={getImage('iphone mockup VDM IG.png')}
                                alt="VDM Instagram Mockup"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">UMass Vietnamese Dance Movement</h3>
                        <a 
                            href="https://www.instagram.com/uma.vdm/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#6B7B48] hover:underline"
                        >
                            @uma.vdm
                        </a>
                    </div>

                    {/* Right side - Photo grid */}
                    <div className="md:w-3/4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'VDM TCSA.png',
                                'VDM audition newtemplate.png',
                                'Che newtemplate.png',
                                'Che Letter print stand.png',
                                'VDM KSA.png',
                                'VDM KSA1.png',
                                'VDM KSA2.png',
                                'VDM TCSA1.png'
                            ].map((imgName) => (
                                <div key={imgName} className="w-full">
                                    <img 
                                        className="w-full h-auto rounded-lg"
                                        src={getImage(imgName)}
                                        alt={`VDM - ${imgName}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCreationPage; 