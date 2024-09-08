import { IconMenu } from 'src/assets/icons/IconMenu';
import SideBar from './SideBar';

const DropdownMenu = () => {
    return (
        <div className="absolute top-10 right-10">
            <div className="relative inline-block dropdown">
                <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 rounded">
                    <IconMenu />
                </button>
                <ul className="absolute right-0 hidden rounded-lg shadow-sm bg-slate-50 dropdown-menu">
                    <SideBar />
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;
