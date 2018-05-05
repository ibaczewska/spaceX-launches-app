import React from 'react';
import '../styles/_LaunchDetails.sass';
import Header from '../components/Header'
import Content from '../components/Content'
import Links from '../components/Links'
import Footer from '../components/Footer'


class LaunchDetails extends React.Component {
    
    render() {
        const { launch, launchSite, rocket} = this.props;
    
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