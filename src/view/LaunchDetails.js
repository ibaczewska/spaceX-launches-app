import React from 'react';
import './LaunchDetails.sass';
import logo from '../assets/space_x_logo_bw_centered.png';
import itemLogo from '../assets/item-logo.png';

class LaunchDetails extends React.Component {
    constructor() {
        super()
        
    }
    render() {
        const { launch, launchSite, rocket} = this.props;
    

        return (
            <div className="container">
                <div className="header">
                    <span className="header-arrow"> &nbsp;Go back</span>
                    <img className="header-logo" src={logo} width='200' />
                    <div></div>
                </div>
                <div className="content">
                    <div className="content-left item">
                        <div className="item-date">26 may 2018</div> 
                        <div className="item-title">Falcon 9</div>
                        <div className="item-timer">20 days 11 hrs 34 mins to start</div>
                        <div className="item-logo">
                            <img src={itemLogo} width='150'/>
                        </div>
                    </div>
                    <div className="content-right">
                        <p>bbbbb</p>
                    </div>
                </div>
                
                
                <div className="links-wrapper">
                    <h4 className="links-title">Mission Links</h4>
                    <a href={'#'} className="links-button">reddit campaign</a>
                    <a href={'#'} className="links-button">presskit</a>
                    <a href={'#'} className="links-button">mission video</a>
                </div>
                <div className="footer">
                <div className="footer-links">
                <span className="footer-links-desc">follow spacex |&nbsp;</span>
                    <a href={'#'} className="footer-links-item">twitter&nbsp;</a>
                    <a href={'#'} className="footer-links-item">youtube&nbsp;</a>
                    <a href={'#'} className="footer-links-item">flickr&nbsp;</a>
                    <a href={'#'} className="footer-links-item">instagram&nbsp;</a>
                </div>
                <div className="footer-copyright">
                <p>2018 Space Exploration Technologies Corp.</p></div>
                </div>  
            </div>
        )
    }

}

export default LaunchDetails;