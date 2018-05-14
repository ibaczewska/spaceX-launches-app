import React from 'react';
import '../styles/_LaunchDetails.sass';
import Header from '../components/details/Header'
import Content from '../components/details/Content'
import Links from '../components/details/Links'
import Footer from '../components/Footer'


class LaunchDetails extends React.Component {
    render() {
    
        return (
            <div>
                <Header />
                <Content />
                <Links />
                <Footer />            
            </div>
        )
    }

}

export default LaunchDetails;