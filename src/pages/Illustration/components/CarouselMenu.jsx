import Slider from 'react-slick';
import { getImage } from '../../../utils/image';

const CarouselMenu = () => {
    let settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        centerMode: true
    };

    const listItem = [
        'FrontCover flip 1',
        'Fip1',
        'Fip2',
        'Fip3',
        'Fip4',
        'Fip5',
        'Fip6',
        'Fip7',
        'Fip8',
        'FrontCover flip 1-1'
    ];
    return (
        <div className="py-16 container__box">
            <Slider {...settings}>
                {listItem.map((item) => (
                    <img
                        key={item}
                        className="object-contain mx-auto aspect-video"
                        src={getImage(`${item}.png`)}
                        alt=""
                    />
                ))}
            </Slider>
        </div>
    );
};

export default CarouselMenu;
