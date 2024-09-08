import classNames from 'classnames';
import { getImage } from '../../utils/image';

const LogoFolioItem = ({ title, srcImg = '', subTitle, color = [], hiddenBorder = false, children }) => {
    return (
        <div
            className={classNames('flex md:flex-row flex-col items-center justify-between max-w-3xl gap-5 py-12', {
                ' border-t-2 border-solid border-t-black': !hiddenBorder
            })}
        >
            <div className="flex-1 ">
                <img className="ml-auto" src={getImage(srcImg)} alt="" />
            </div>
            <div className="md:w-3/5">
                <h3 className="text-xl font-medium">{title || 'Vietnamese Dance Movement (VDM)'}</h3>
                <div className="flex items-center justify-between mb-3">
                    <span className="italic">{subTitle || 'Dance Club'}</span>
                    <div className="flex gap-2">
                        {color.map((color) => (
                            <div key={color} className={`w-[46px] h-[11px]`} style={{ backgroundColor: color }} />
                        ))}
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default LogoFolioItem;
