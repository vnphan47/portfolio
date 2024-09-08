import { getImage } from '../../utils/image';

const TalkShow = () => {
    return (
        <div className="container__box px__mobile">
            <h2 className="c-title text-[#C39CCD] pb-5">Talkshow “About Me”</h2>
            <div className="grid grid-cols-5 gap-4 container__box">
                <img
                    className="object-cover w-full h-full col-span-2 aspect-square"
                    src={getImage('7mineava 2.png')}
                    alt=""
                />
                <img
                    className="object-cover w-full h-full col-span-3 aspect-video"
                    src={getImage('7minebia 1.png')}
                    alt=""
                />
            </div>
            <p className="max-w-[24rem] mx-auto my-12">
                The talk show &quot;About Me&quot; is an offline event hosted by 7MINE in Hanoi, Vietnam. It was created
                for both the LGBT+ community and those interested in learning more, fostering connections, and hearing
                inspiring guest stories. Here are the front and back designs of the tickets I created for the event.
            </p>
            <div className="flex flex-col justify-center gap-8 md:flex-row">
                <div className="flex items-center w-full md:w-2/5">
                    <img className="object-contain w-full aspect-square" src={getImage('IMG_2584_JPG 1.png')} alt="" />
                </div>
                <div className="">
                    <img className="object-contain" src={getImage('Vé Mặt Trước 1.png')} alt="" />
                    <img className="object-contain" src={getImage('Vé Mặt Sau 1.png')} alt="" />
                </div>
            </div>
            <p className="md:max-w-[24rem] mx-auto my-12">
                Here are some photos from the event, held at a cozy coffee shop in Hanoi, Vietnam. Although the audience
                size was limited, we had an amazing time listening to the guest speakers and connecting with each other.
            </p>
            <div className="grid grid-cols-2 gap-5 md:gap-8 container__box">
                <img className="w-full col-span-2" src={getImage('pic4 1.png')} alt="" />
                <img className="w-full" src={getImage('pic2 1.png')} alt="" />
                <img className="w-full" src={getImage('pic3 1.png')} alt="" />
                <img className="w-full col-span-2" src={getImage('pic1 1.png')} alt="" />
            </div>
        </div>
    );
};

export default TalkShow;
