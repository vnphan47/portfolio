import { getImage } from '../../utils/image';

const ArtsPage = () => {
    const listItem = [
        'Remini20211019121125488_JPG 2',
        'Fruit and Veggies Activity Kit  1',
        'COMING SOON 1',
        'Anh là thanh xuân 2',
        'TỚ KỂ CẬU NGHE 3',
        'Fruit and Veggies Activity Kit  2'
    ];
    return (
        <div className="container__box px__mobile">
            <h2 className="c-title text-[#ED5A7B] mb-8">Personal Arts</h2>
            <p className="text-[#231F20] max-w-[23rem] mx-auto mb-12">
                In my spare time, I work on personal projects and create art to improve my artistic and design skills.
                These allow me to experiment and grow as an artist.
            </p>
            <div className="gap-4 columns-2 md:gap-7">
                {listItem.map((item) => (
                    <img className="object-cover w-full mb-7" key={item} src={getImage(`${item}.png`)} />
                ))}
            </div>
        </div>
    );
};

export default ArtsPage;
