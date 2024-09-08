import { getImage } from '../../../utils/image';

const ItemFood = ({ imgSrc = '', title = '', description = '' }) => {
    return (
        <div className="flex items-center gap-3">
            <img className="object-cover w-20" src={getImage(imgSrc)} alt="" />
            <p className="flex-1">
                <span className="font-bold">{title}:</span> {description}
            </p>
        </div>
    );
};

export default ItemFood;
