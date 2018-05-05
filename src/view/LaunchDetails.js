import React from 'react';
import '../styles/_LaunchDetails.sass';
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
                    <div className="header__arrow"><div className="header__arrow__line"></div> &nbsp;Go back</div>
                    <img className="header__logo" src={logo} width='200' />
                    <div></div>
                </div>
                <div className="content">
                    <div className="content__left item">
                        <div className="item__date">26 may 2018</div> 
                        <div className="item__title">Falcon 9</div>
                        <div className="item__timer">20 days 11 hrs 34 mins to start</div>
                        <div className="item__logo">
                            <img src={itemLogo} width='180'/>
                        </div>
                    </div>
                    <div className="content__right description">
                        <div className="details">
                            <h5 className="description__title">Details</h5>
                            <div className="description__line"></div>
                            <p className="description__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ornare purus, sit amet consectetur velit. Integer tristique, massa at facilisis ultrices, diam eros bibendum urna, ac condimentum arcu ante lobortis odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia enim et tellus mollis consectetur. Donec semper magna diam, ac posuere felis auctor sit amet. Sed pulvinar dui vel tellus tempus suscipit. Quisque eleifend nisi et odio fringilla, quis semper mauris facilisis.</p>
                        </div>
                        <div className="rocket">
                            <h5 className="description__title">Rocket</h5>
                            <div className="description__line"></div>  
                                <div className="rocket__column">
                                    <p><span className="rocket__feature">Name:</span><span className="rocket__value">Falcon 1</span></p>
                                    <p><span className="rocket__feature">Company:</span><span className="rocket__value">Falcon 1</span></p>
                                    <p><span className="rocket__feature">Height:</span><span className="rocket__value">Falcon 1</span></p>
                                    <p><span className="rocket__feature">Diameter:</span><span className="rocket__value">Falcon 1</span></p>
                                    <p><span className="rocket__feature">Mass:</span><span className="rocket__value">Falcon 1</span></p>                              
                                </div>
                                <div className="rocket__column">
                                    <p><span className="rocket__feature">First flight:</span><span className="rocket__value">Falcon 1</span></p>
                                    <p><span className="rocket__feature">Country:</span><span className="rocket__value">Falcon 1</span></p>
                                    <p><span className="rocket__feature">Success rate:</span><span className="rocket__value">Falcon 1</span></p>
                                    <p><span className="rocket__feature">Cost per launch:</span><span className="rocket__value">Falcon 1</span></p>
                                </div>
                                <div className="rocket__description description__paragraph">
                                    <p>Aenean auctor eu risus ac condimentum. Vivamus eget nibh odio. Ut facilisis augue sed auctor egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sed ornare magna. Integer venenatis fermentum nisi id efficitur. Vestibulum laoreet quam ac diam consequat rhoncus.</p>
                                </div>
                        </div>
                        <div className="pad">                
                            <h5 className="description__title ">Launch pad</h5>
                            <div className="description__line"></div>
                            <div className="pad__column">
                                    <p><span className="pad__feature">Name:</span><span className="pad__value">Falcon 1</span></p>
                                </div>
                                <div className="pad__column">
                                    <p><span className="pad__feature">Location:</span><span className="pad__value">Falcon 1</span></p>
                                </div>
                                <div className="pad__description description__paragraph">
                                    <p>Aenean auctor eu risus ac condimentum. Vivamus eget nibh odio. Ut facilisis augue sed auctor egestas.</p>
                                </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="links__wrapper">
                    <h4 className="links__title">Mission Links</h4>
                    <a href={'#'} className="links__button">reddit campaign</a>
                    <a href={'#'} className="links__button">presskit</a>
                    <a href={'#'} className="links__button">mission video</a>
                </div>

                <div className="footer">
                    <div className="footer__links">
                    <span className="footer__links__desc">follow spacex |&nbsp;</span>
                        <a href={'#'} className="footer__links__item">twitter&nbsp;</a>
                        <a href={'#'} className="footer__links__item">youtube&nbsp;</a>
                        <a href={'#'} className="footer__links__item">flickr&nbsp;</a>
                        <a href={'#'} className="footer__links__item">instagram&nbsp;</a>
                    </div>
                    <div className="footer__copyright">
                        <p>2018 Space Exploration Technologies Corp.</p>
                    </div>
                </div>  
            </div>
        )
    }

}

export default LaunchDetails;