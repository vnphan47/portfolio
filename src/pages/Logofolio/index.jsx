import TitleSection from '../../components/TitleSection';
import LogoFolioItem from './LogoFolioItem';

const LogoFolio = () => {
    return (
        <div className="flex flex-col items-center container__box px__mobile">
            <TitleSection title="My branding experience" color="#FBF2DA" />
            <LogoFolioItem
                title="Vietnamese Dance Movement (VDM)"
                subTitle="Dance Club"
                srcImg="VDM.png"
                color={['#EF569F', '#231F20']}
                hiddenBorder
            >
                <p className="leading-7">
                    The logo for VDM captures the vibrant spirit of the dance team with its sleek design, dynamic
                    curves, and glossy finish. The <span className="font-bold text-black">Black</span> and{' '}
                    <span className="text-[#EF569F] font-bold">Pink</span> colors symbolize elegance and passion,
                    highlighting VDM&apos;s mission to share Vietnamese culture and build community through music and
                    dance.
                </p>
            </LogoFolioItem>
            <div className="divide-x"></div>
            <LogoFolioItem
                title="Laotian & Cambodian Student Association"
                subTitle="Student's Organization"
                srcImg="Main Logo.png"
                color={['#59ACE0', '#EA465E']}
            >
                <p className="leading-7">
                    The LCSA logo features an elephant which symbolize the shared cultural heritage and historical
                    significance in Laotian and Cambodian cultures. With colors inspired by their flags,{' '}
                    <span className="font-bold text-[#EA465E]">Red</span> and{' '}
                    <span className="font-bold text-[#59ACE0]">Blue</span>, this modern and simple elephant design
                    honors tradition while fostering pride and community among Laotian & Cambodian students.
                </p>
            </LogoFolioItem>
            <LogoFolioItem
                title="NutriPals"
                subTitle="Business"
                srcImg="NutriPals Logo 1.png"
                color={['#F26B43', '#FBB266', '#6F9C40']}
            >
                <p className="leading-7">
                    NutriPals is a nutrition-themed, animal-character-based small business. With four loveable
                    characters - Bunny, Panda, Puppy, and Kitten - NutriPals is a go-to place for nutrition and cute
                    animal pals content.
                </p>
            </LogoFolioItem>
        </div>
    );
};

export default LogoFolio;
