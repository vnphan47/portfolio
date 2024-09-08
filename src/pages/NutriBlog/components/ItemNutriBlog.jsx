import { Link } from 'react-router-dom';
import { getImage } from '../../../utils/image';
import { useWindowSize } from 'hooks/useWindowSize';

const ItemNutriBlog = ({ imgSrc = '', title = '', subTitle = '', path }) => {
    const { sm } = useWindowSize();

    const _renderImg = () => {
        return !imgSrc ? (
            <div className="w-full aspect-video bg-[#FFF6F7]" />
        ) : (
            <img className="w-full aspect-video" src={getImage(imgSrc)} />
        );
    };
    return (
        <Link to={path} className="w-full border-black border-solid lg:border">
            {!sm && _renderImg()}
            <div className="flex flex-col gap-4 p-4">
                <h3 className="text-4xl font-semibold text-black md:text-xl md:font-sans font-fair md:font-medium">
                    {title}
                </h3>
                {sm && _renderImg()}
                <h5 className="px-3 md:px-0">{subTitle}</h5>
            </div>
        </Link>
    );
};

export default ItemNutriBlog;
