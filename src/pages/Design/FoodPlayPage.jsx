import { getImage } from '../../utils/image';

const FoodPlayPage = () => {
    return (
        <div className="container__box">
            <h2 className="c-title text-[#DE5A41] mb-8">FoodPlay Productions</h2>
            <p className="text-[#949494] mb-12 text-opacity-55 font-semibold text-2xl mx-auto text-center">
                LANDING PAGE REDESIGN
            </p>
            <div className="flex flex-col items-center justify-between gap-8 mb-6 md:mb-24 md:flex-row px__mobile">
                <img className="md:w-1/2" src={getImage('FPdisplay 1.png')} alt="" />
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <p>
                        So, this personal project that I&apos;ve been working on. I noticed that the current page is
                        looking a bit outdated and inconsistent in terms of layout and design. It&apos;s not as visually
                        appealing as I&apos;d like it to be, and I think this might make it less attractive to visitors.
                        Plus, the information is kind of all over the place, which isn&apos;t very user-friendly.
                        <br />
                        <br />
                        My goal now is to redesign the site to make it simpler, more playful, and eye-catching while
                        still preserving the artistic vibe of a nutrition education center.
                    </p>
                    <a
                        href="https://www.foodplay.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="px-3 py-2 w-fit border-2 rounded-xl border-[#DE5A41] border-solid font-semibold text-[#DE5A41] hover:bg-[#DE5A41] hover:text-white duration-300 transition-all mx-auto md:mx-0"
                    >
                        Original Site
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img className="w-full" src={getImage(`FPvisual 1.png`)} alt="" />
                <img className="w-full" src={getImage(`DesktopFP 1.png`)} alt="" />
            </div>
        </div>
    );
};

export default FoodPlayPage;
