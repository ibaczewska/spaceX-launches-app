import React from 'react';
import '../styles/_LaunchDetails.sass';
import Hero from '../components/main/Hero';
import Timeline from '../components/main/Timeline';
import Footer from '../components/Footer';


class LaunchesList extends React.Component {
    render() {
    
        return (
            <div>
               <Hero />
               <Timeline />
               <Footer />            
            </div>
        )
    }

}

export default LaunchesList;