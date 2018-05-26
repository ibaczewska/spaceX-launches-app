import React from 'react';
import '../styles/_LaunchDetails.sass';
import Hero from '../components/main/Hero';
import Timeline from '../components/main/Timeline';
import Footer from '../components/Footer';
import 'babel-polyfill';



export default class LaunchesList extends React.Component {
    state = {
        view: 'list'
    }
   
    render() {
    
        return (
            <main>
               <Hero />
               <Timeline />
               <Footer />            
            </main>
        )
    }

}

// export default LaunchesList;