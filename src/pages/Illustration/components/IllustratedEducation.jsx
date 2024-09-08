import { Link } from 'react-router-dom';
import { useWindowSize } from 'hooks/useWindowSize';
import { getImage } from 'utils/image';

const IllustratedEducation = () => {
    const { lg } = useWindowSize();
    return (
        <div className="relative mb-10 overflow-hidden">
            <div className="bg-[rgb(154,57,53)] lg:pl-[7%] absolute w-full h-[80%] lg:w-[70%]  lg:h-full right-0 bottom-0 lg:top-0 z-0"></div>
            <div
                className="relative z-10 flex flex-col items-center px-10 pb-10 lg:pb-0 lg:px-0 lg:flex-row container__box"
                style={{ zIndex: 2 }}
            >
                <img className="lg:w-[30%]" src={getImage('Front and Back spiral 1.png')} alt="" />
                <div className="flex flex-col gap-4 py-4 md:py-16 lg:w-[40%]">
                    <p className="font-bold text-2xl text-[#F9EED4]">Veggies Got Talent! A Fun-Filled Activity Kit</p>
                    <p className="italic font-bold text-xl text-[#E8C69B]">
                        with Coloring Sheets, Rhymin&apos; Beats, and Recipes for Tasty Treats!
                    </p>
                    <p className="text-white">
                        I illustrated a 100-page-book, where the 30 veggie friends are not just ingredients but lively
                        characters dancing across the pages into the imagination of children and adults.
                    </p>
                    {lg && <ButtonLearn />}
                </div>
                <img
                    className="object-cover w-full md:w-auto md:h-full mx-auto lg:w-[30%] lg:scale-125"
                    src={getImage('Mask group.png')}
                    alt=""
                />
                {!lg && <ButtonLearn />}
            </div>
        </div>
    );
};

export default IllustratedEducation;

const ButtonLearn = () => {
    return (
        <Link to={'activity'} className="button">
            Learn more
        </Link>
    );
};
