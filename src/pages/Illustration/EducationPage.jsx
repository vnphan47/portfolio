import { Link } from 'react-router-dom';
import CarouselMenu from './components/CarouselMenu';
import CarouselInfinite from './components/CarouselInfinite';
import { getImage } from 'utils/image';
import { useWindowSize } from 'hooks/useWindowSize';
import { Fragment } from 'react';

const EducationPage = () => {
    const { md } = useWindowSize();

    return (
        <div>
            <div className="px__mobile">
                <h2 className="font-bold text-5xl text-[#9A3935] max-w-[33rem] text-center whitespace-pre-wrap leading-tight mx-auto mb-2">
                    {'Veggies Got Talent!\nA Fun-Filled Activity Kit'}
                </h2>
                <p className="font-semibold text-2xl text-[#AE8B6E] mx-auto text-center mb-6">
                    with Coloring Sheets, Rhymin&apos; Beats, and Recipes for Tasty Treats!
                </p>
            </div>

            <div className="relative mb-16 container__box">
                <div className="relative z-10 flex flex-col items-center px-4 md:flex-row">
                    <img className="w-[70%] md:w-[40%]" src={getImage('Front and Back spiral 1.png')} alt="" />
                    <div className="py-6">
                        <p className="mb-4 text-white ">
                            In today&apos;s society, where the marketing for processed and fast foods is predominantly
                            advertised, I recognized the importance of taking action in encouraging children to consume
                            fruits and vegetables. Collaborating closely with FoodPlay&apos;s founder, we embarked on
                            the <span className="font-bold">Veggies Got Talent! A Fun-Filled Activity Kit</span> to make
                            the consumption of vegetables enjoyable.
                            <br />
                            <br />
                            Kids can even put on their own <span className="font-bold">
                                “Veggies Got Talent! Show”
                            </span>{' '}
                            to promote veggies to their peers and families in an inspiring performance guaranteed to
                            increase children&apos;s preferences for vegetables!
                        </p>
                        <div className="flex justify-center gap-3 md:justify-start">
                            <Link
                                to={'https://www.foodplay.com/product/vgtactivitybook/'}
                                target="_blank"
                                className="button"
                            >
                                Order Here
                            </Link>
                            <Link to={'https://a.co/d/eTf2Wwi'} target="_blank" className="button">
                                Amazon Link
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#9A3935] pl-[7%] absolute md:w-[80%] w-full h-[80%] md:h-full right-0 md:top-0 bottom-0 z-0"></div>
            </div>

            <div className="mb-16 container__box">
                <img className="mx-auto" src={getImage('Group 133.png')} alt="" />
            </div>
            <div className="mb-16 container__box">
                <img className="mx-auto" src={getImage('Group 136.png')} alt="" />
            </div>
            <CarouselInfinite />
            <div className="mb-16 container__box">
                {md ? (
                    <img className="mx-auto" src={getImage('Group 137.png')} alt="" />
                ) : (
                    <Fragment>
                        <div className="px__mobile">
                            <img className="mx-auto" src={getImage('Group 169.png')} alt="" />
                            <p className="my-4 text-2xl leading-10">
                                I wanted to deliver nutritional information in a fun and accessible way for young
                                readers through colorful visuals. Children will not only learn about nutrition and
                                health but also develop skills related to core subjects such as Language Arts, Science,
                                and Nutrition & Health Education.
                            </p>
                        </div>
                        <div className="bg-[#FBF5E4] px__mobile py-4">
                            <img className="w-full" src={getImage('8 1.png')} alt="" />
                            <img className="w-full" src={getImage('8 3.png')} alt="" />
                        </div>
                    </Fragment>
                )}
            </div>
            <div className="bg-[#9A3935]">
                <CarouselMenu />
            </div>
        </div>
    );
};

export default EducationPage;
