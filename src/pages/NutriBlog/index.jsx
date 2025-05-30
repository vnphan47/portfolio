import { useWindowSize } from 'hooks/useWindowSize';
import TitleSection from '../../components/TitleSection';
import ItemNutriBlog from './components/ItemNutriBlog';

const NutriBlog = () => {
    const { md } = useWindowSize();

    const listItem = [
        {
            id: 2,
            title: 'Antioxidants in Action: Battling Inflammation',
            subTitle:
                'Welcome to the world of antioxidants and inflammation! It\'s going to be an action-packed journey you won\'t want to miss!',
            imgSrc: 'image 1.png',
            path: 'antioxidants'
        },
        {
            id: 3,
            title: 'Why I Chose to Study Nutrition',
            subTitle:
                'Nutrition is a very young field of science and public health that needs to be recognized and investigated more in-depth.',
            imgSrc: 'Group 152.png',
            path: 'study'
        }
    ];
    return (
        <div className="w-full container__box">
            <TitleSection
                title={`Here is where I get to communicate\nnutrition concepts in a visual manner!`}
                color="#FDDBDE"
            />
            <p className="mb-8 px-[35vh] italic text-center text-black text-opacity-50 whitespace-pre-wrap">
                Disclaimer: The content of this blog is written by a nutrition student and is intended for informational
                purposes only. It should not be taken as professional medical advice; always consult a qualified
                healthcare provider for personalized recommendation
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 justify-items-center max-w-4xl mx-auto">
                {listItem.map((item) => (!!item.path || md ? <ItemNutriBlog key={item.id} {...item} /> : null))}
            </div>
        </div>
    );
};

export default NutriBlog;
