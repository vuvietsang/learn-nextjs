import Header from '@/components/common/header';
import { MainLayout } from '@/components/layout';
import PropTypes from 'prop-types';


function About() {
    return (
        <div>
            <h1>About page</h1>
            <Header />
        </div>
    );
}

About.Layout = MainLayout 
export default About;