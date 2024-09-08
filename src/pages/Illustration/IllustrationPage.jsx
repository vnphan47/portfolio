import { Fragment } from 'react';
import TitleSection from '../../components/TitleSection';
import IllustratedProject from './components/IllustratedProject';
import IllustratedEducation from './components/IllustratedEducation';

const IllustrationPage = () => {
    return (
        <Fragment>
            <TitleSection color="#FDDBDE" title={`View my first illustrated\nchildren's education book!`} />
            <IllustratedEducation />
            <TitleSection color="#DBEBBB" title={`My other illustrated projects`} />
            <IllustratedProject />
        </Fragment>
    );
};

export default IllustrationPage;
