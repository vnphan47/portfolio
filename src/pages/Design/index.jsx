import { Link } from 'react-router-dom';
import TitleSection from '../../components/TitleSection';
import { getImage } from '../../utils/image';

const Design = () => {
    const listItem = [
        {
            id: 1,
            imgSrc: 'AI Safety Web Design',
            path: 'https://www.ai-transparency.org/',
            title: 'RepE Website',
            subTitle: 'Website & Research Paper Design'
        },
        {
            id: 2,
            imgSrc: 'Group 126',
            path: 'robos',
            title: 'ROBOS | NFTs Analysis Dashboard Design',
            subTitle: 'UX/UI Case Study'
        },
        {
            id: 3,
            imgSrc: 'FoodPlay Redesign',
            path: 'foodplay',
            title: 'FoodPlay Productions | Landing Page',
            subTitle: 'Website Redesign'
        }
    ];
    return (
        <div className="container__box px__mobile">
            <TitleSection color="#D5F2FC">
                <p className="max-w-[32rem] text-center mx-auto">
                    I also got some projects to practice my UX/UI design experiences
                </p>
            </TitleSection>
            <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 ">
                {listItem.map((item) => (
                    <Link key={item.id} to={item.path}>
                        <img className="aspect-[5/4] w-full object-cover" src={getImage(`${item.imgSrc}.png`)} alt="" />
                        <div className="my-2 text-center">
                            <h3 className="font-semibold">{item.title}</h3>
                            <span className="text-[#949494]">{item.subTitle}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Design;
