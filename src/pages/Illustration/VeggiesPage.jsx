import { getImage } from '../../utils/image';

const VeggiesPage = () => {
    return (
        <div className="container__box px__mobile">
            <h2 className="c-title text-[#B23A34] mb-8">Veggies Got Talent!</h2>
            <p className="mb-12 text-2xl font-bold text-center">
                A take-off on the “America&apos;s Got Talent!” TV Show.
            </p>
            <div className="grid w-full grid-cols-1 mx-auto md:grid-cols-2 gap-7">
                <img
                    className="w-full aspect-[3/4] object-cover"
                    src={getImage('Field Trip to the Kitchen 2-1.png')}
                    alt=""
                />
                <img
                    className="w-full aspect-[3/4] object-cover"
                    src={getImage('Field Trip to the Kitchen 3-1.png')}
                    alt=""
                />
                <p className="md:p-9">
                    <span className="font-bold">Veggies Got Talent!</span> is like a dynamic marketing campaign
                    promoting healthy foods, coordinated by schools or community groups, and performed by students. In
                    collaboration with FoodPlay Productions and their marketing team, we successfully implemented
                    Veggies Got Talent! for over 400 students, aiming to encourage kids to eat their fruits and
                    vegetables. This project also serves as an precursor to a series of Veggies Got Talent! events,
                    supported by the publication of:
                    <br />
                    <br />
                    <p className="text-xl font-bold font-fair text-[#CC504B]">
                        Veggies Got Talent! A Fun-Filled Activity Kit.
                    </p>
                    <br />
                    This kit provides school food services, parents, and children with detailed guidance on organizing
                    their own <span className="font-bold">Veggies Got Talent! Show.</span> <br />
                    <br />
                    To extend the reach, the winning acts can be videotaped and entered into the America&apos;s Next Top
                    Vegetable! - a national contest which will appear on a variety of social media channels, websites,
                    and compiled into an educational DVD.
                </p>
                <img
                    className="w-full aspect-[3/4] object-cover"
                    src={getImage('Field Trip to the Kitchen 4-1.png')}
                    alt=""
                />
            </div>
        </div>
    );
};

export default VeggiesPage;
