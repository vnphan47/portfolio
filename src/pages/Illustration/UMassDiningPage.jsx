import { getImage } from '../../utils/image';

const UMassDiningPage = () => {
    const posters = [
        {
            imgName: 'Food Allergies front.png'
        },
        {
            imgName: 'Food Allergies back.png'
        },
        {
            imgName: 'UMass Safe App (1).png'
        },
        {
            imgName: 'UMass Safe App (2).png'
        },
        {
            imgName: 'UMass Dining Communication Chain.png'
        },
        {
            imgName: 'UMass Dining Prevent Cross contact.png'
        }
    ];

    return (
        <div className="container__box px__mobile">
            <h2 className="c-title text-[#7E252B] mb-8">UMass Dining Posters</h2>
            <p className="md:max-w-[26rem] mx-auto mb-12">
                A collection of posters designed for UMass Dining, showcasing various dining events and promotions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posters.map((poster, index) => (
                    <div key={index} className="block">
                        <img 
                            src={getImage(poster.imgName)} 
                            alt="UMass Dining Poster"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UMassDiningPage; 