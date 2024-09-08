export const IconArrow = ({ active = false }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={18}
            height={18}
            transform={active && 'rotate(180)'}
        >
            <path d="M8.205 3.705c0.439 -0.439 1.153 -0.439 1.593 0l6.75 6.75c0.439 0.439 0.439 1.153 0 1.593s-1.153 0.439 -1.593 0L9 6.093 3.045 12.045c-0.439 0.439 -1.153 0.439 -1.593 0s-0.439 -1.153 0 -1.593l6.75 -6.75z" />
        </svg>
    );
};
