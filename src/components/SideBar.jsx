import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const getClassName = ({ isActive }) =>
        `w-fit text-xl mx-2 text-center hover:font-bold hover:text-[#ED5A7B] hover:underline ${isActive ? ' font-bold text-[#ED5A7B] underline' : ''}`;

    return (
        <div className="flex flex-col gap-10 py-4 md:my-5 md:flex-row">
            <NavLink to={'/illustration'} className={getClassName}>
                Illustration/Graphic
            </NavLink>
            <NavLink to={'/design'} className={getClassName}>
                UX/UI Design
            </NavLink>
            <NavLink to={'/content'} className={getClassName}>
                Content Creation
            </NavLink>
            <NavLink to={'/nutri'} className={getClassName}>
                NutriBlog
            </NavLink>
        </div>
    );
};

export default SideBar;
