import { getImage } from '../../utils/image';

const BlenderPage = () => {
    return (
        <div className="container__box px__mobile">
            <h2 className="c-title text-[#C69C88] mb-8">Blender Project</h2>
            <p className="text-[#231F20] md:max-w-[23rem] mx-auto mb-12">
                Recently, I discovered Blender and couldn&apos;t wait to try out this incredible software. Practicing 3D
                object creation has improved my perceptual ability and boosted my creativity. Plus, I created these
                products by following YouTube tutorials.
            </p>
            <div className="flex flex-col gap-8 mx-auto w-fit">
                <div className="w-full">
                    <img className="mb-3" src={getImage('cozybedroom 2.png')} alt="" />
                    <span>
                        Followed a YouTube tutorial by <span className="font-bold">@artbytran_</span>
                    </span>
                </div>
                <div className="w-full">
                    <img className="mb-3" src={getImage('cozybedroom 3.png')} alt="" />
                    <span>
                        Followed a YouTube tutorial by <span className="font-bold">@3dgreenhorn</span>
                    </span>
                </div>
                <div className="w-full">
                    <img src={getImage('cozybedroom 4.png')} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BlenderPage;
