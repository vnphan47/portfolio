import { Link } from 'react-router-dom';
import { getImage } from 'utils/image';
import classNames from 'classnames';

const IllustratedProject = () => {
    const listImage = [
        {
            imgName: 'UMass Dining Posters cover.png',
            title: 'UMass Dining Posters',
            subTitle: 'Graphics',
            path: 'umass-dining'
        },
        {
            imgName: 'Field Trip to the Kitchen.png',
            title: 'Field Trip to the Kitchen!',
            subTitle: 'Illustration, Book',
            path: 'kitchen'
        },
        {
            imgName: 'NFT.png',
            title: 'Freelance NFT Artist',
            subTitle: 'Illustration, Crypto Collectibles',
            path: 'nft'
        },
        {
            imgName: 'logofolio cover.png',
            title: 'Logofolio',
            subTitle: 'Logo Design',
            path: 'logofolio'
        },
        {
            imgName: 'Veggies Got Talent!.png',
            title: 'Veggies Got Talent!',
            subTitle: 'Illustration, Poster',
            path: 'veggies'
        },
        {
            imgName: '3D Art.png',
            title: 'Blender Project',
            subTitle: '3D Art',
            path: 'blender'
        },
        {
            imgName: '7Mine Project.png',
            title: 'Talkshow "About Me"',
            subTitle: 'Graphic, Offline Event',
            path: 'talkshow'
        },
        {
            imgName: 'Random Art.png',
            title: 'Personal Arts',
            subTitle: 'Illustration/Graphic',
            path: 'arts'
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3 container__box md:px-0">
            {listImage.map((item) => (
                <ImageItem key={item.path} {...item} />
            ))}
        </div>
    );
};

export default IllustratedProject;

const ImageItem = ({ imgName = '', title = '', subTitle = '', path = '' }) => {
    const isLogofolio = imgName === 'logofolio cover.png';
    
    return (
        <Link to={path} className="text-center">
            <div className={classNames("w-full overflow-hidden", {
                "aspect-[3/4]": !isLogofolio,
                "aspect-[3/4] relative": isLogofolio
            })}>
                <img 
                    className={classNames("w-full", {
                        "h-full object-cover": !isLogofolio,
                        "absolute inset-0 w-full h-full object-cover object-center": isLogofolio
                    })} 
                    src={getImage(imgName)} 
                />
            </div>
            <h3 className="mt-3 font-semibold">{title}</h3>
            <h5 className="text-sm font-Jomo text-[#949494] font-normal">{subTitle}</h5>
        </Link>
    );
};
