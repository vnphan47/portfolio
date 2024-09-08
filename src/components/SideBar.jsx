import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const getClassName = ({ isActive }) =>
        `w-fit text-xl mx-2 text-center ${isActive ? 'text-[#ED5A7B] underline' : ''}`;

    return (
        <div className="flex flex-col gap-2 py-4 md:my-5 md:flex-row">
            <NavLink to={'/illustration'} className={getClassName}>
                Illustration/Graphic
            </NavLink>
            <NavLink to={'/design'} className={getClassName}>
                UX/UI Design
            </NavLink>
            <NavLink to={'/logofolio'} className={getClassName}>
                Logofolio
            </NavLink>
            <NavLink to={'/nutri'} className={getClassName}>
                NutriBlog
            </NavLink>
        </div>
    );
};

export default SideBar;
