import { WINDOW_SIZE } from 'hooks/constants';
import { useWindowSize } from 'hooks/useWindowSize';
import { useMemo } from 'react';
import { getImage } from 'utils/image';

const listImg = [
    'Field Trip to the Kitchen 3',
    'Field Trip to the Kitchen 4',
    'Field Trip to the Kitchen 5',
    'Field Trip to the Kitchen 6',
    'Field Trip to the Kitchen 7',
    'Field Trip to the Kitchen 9',
    'Field Trip to the Kitchen 8',
    'Field Trip to the Kitchen 10'
];

const Kitchen = () => {
    const { width } = useWindowSize();
    const breakPoint = width <= WINDOW_SIZE.MD;

    const finalImages = useMemo(() => {
        const images = [...listImg];
        if (breakPoint) images.unshift('Field Trip to the Kitchen 2');
        return images;
    }, [width]);

    return (
        <div className="container__box px__mobile">
            <h2 className="c-title text-[#A2553D]">Field Trip to the Kitchen!</h2>
            <p className="mx-auto max-w-[26rem] my-12">
                This is a second editorial project I got to work with FoodPlay Productions. The founder commissioned me
                to edit the whole book with vibrant illustrations for the cover, workstation posters, and MyPlate
                handouts.
            </p>
            {!breakPoint && (
                <img className="w-4/6 mx-auto mb-12" src={getImage('Field Trip to the Kitchen 2.png')} alt="" />
            )}
            <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 md:px-0">
                {finalImages.map((item) => (
                    <img className="w-full aspect-[3/4]" key={item} src={getImage(`${item}.png`)} />
                ))}
            </div>
            <div className="p-10 bg-[#FFF1EE]">
                <img className="w-full" src={getImage('Group 125.png')} alt="" />
            </div>
        </div>
    );
};

export default Kitchen;
