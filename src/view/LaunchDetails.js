import React from 'react';
import './LaunchDetails.sass';
import logo from '../assets/space_x_logo_bw_centered.png';

class LaunchDetails extends React.Component {
    constructor() {
        super()
        
    }
    render() {
        const { launch, launchSite, rocket} = this.props;
    

        return (
            <div className='container'>
                <div className='header'>
                    <div className='header-arrow'> &nbsp;Go back</div>
                    <img className='header-logo' src={logo} width='200' />
                </div>
                <div className='content'>
                    <div className='content-left'>
                        <p>aaaaa  </p> 
                    </div>
                    <div className='content-right'>
                        <p>bbbbb</p>
                    </div>
                </div>
                
                <div className='links-wrapper'>
                    <h4 className='links-title'>Mission Links</h4>
                    <button className='links-button'>reddit campaign</button>
                    <button className='links-button'>presskit</button>
                    <button className='links-button'>mission video</button>
                </div>
                <div className='footer'>
                <div className='footer-links'>
                <p className='footer-links-desc'>follow spacex |&nbsp;</p>
                    <a href={'#'} className='footer-links-item'>twitter&nbsp;</a>
                    <a href={'#'} className='footer-links-item'>youtube&nbsp;</a>
                    <a href={'#'} className='footer-links-item'>flickr&nbsp;</a>
                    <a href={'#'} className='footer-links-item'>instagram&nbsp;</a>
                </div>
                <div className='footer-copyright'>
                <p>2018 Space Exploration Technologies Corp.</p></div>
                </div>  
            </div>
        )
    }

}

export default LaunchDetails;