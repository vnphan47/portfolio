import { IconBgTitle } from '../assets/icons/IconBgTitle';

const TitleSection = ({ children, title = '', color = '' }) => {
    return (
        <div className="relative mx-auto mb-10 text-3xl text-center font font-fair">
            <div className="absolute top-0 left-1/2 translate-x-[-50%]">
                <IconBgTitle color={color} />
            </div>
            <h2 className="relative z-10 leading-10 whitespace-pre-wrap">{children || title}</h2>
        </div>
    );
};

export default TitleSection;
