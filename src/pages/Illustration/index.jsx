import { Outlet } from 'react-router-dom';

const Illustration = () => {
    return (
        <div className="w-full">
            <Outlet />
        </div>
    );
};

export default Illustration;
