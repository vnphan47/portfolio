import { Fragment } from 'react';

const TitleBlog = ({ title = '', date = '' }) => {
    return (
        <Fragment>
            <h2 className="text-4xl mb-[8px] font-bold text-center font-fair">{title}</h2>
            <p className="text-center text-black text-opacity-50">{date}</p>
        </Fragment>
    );
};

export default TitleBlog;
