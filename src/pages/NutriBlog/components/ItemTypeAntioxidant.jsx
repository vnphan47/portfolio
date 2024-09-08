import { getImage } from '../../../utils/image';

const ItemTypeAntioxidant = ({ imgSrc = '', title = '', description = '', imgBy = '', titleList = '', list = [] }) => {
    return (
        <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2">
            <div>
                <h4 className="text-[#639033] font-bold text-xl">{title}</h4>
                <div>
                    {description}
                    <br />
                    <br />
                    {titleList}
                    <ul className="pl-5 list-disc">
                        {list.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <img className="w-full" src={getImage(imgSrc)} alt="" />
                <span className="text-sm italic font-light text-black text-opacity-50">Image by {imgBy}</span>
            </div>
        </div>
    );
};

export default ItemTypeAntioxidant;
