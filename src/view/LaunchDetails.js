import React from 'react';
import '../styles/_LaunchDetails.sass';
import Header from '../components/details/Header'
import Content from '../components/details/Content'
import Links from '../components/details/Links'
import Footer from '../components/Footer'
import { METHODS } from 'http';


class LaunchDetails extends React.Component {
    render() {
        const {launch} = this.props
        return (
            <main>
                <Header />
                <Content launch={launch}/>
                <Links />
                <Footer />            
               
            </main>
        )
    }

}

export default LaunchDetails;