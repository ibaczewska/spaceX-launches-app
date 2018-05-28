import React from 'react';
import itemLogo from '../../assets/item-logo.png';
import rocket from '../../assets/rocket.json';
import launchSite from '../../assets/launch_site.json'
import {format, distanceInWordsToNow} from 'date-fns';

class Content extends React.Component {

    render() {
        const {launch} = this.props
        const launch_date_utc = format(launch.launch_date_utc, 'DD MMMM YYYY');
        const timeToStart = distanceInWordsToNow(launch.launch_date_utc);
        const rocketName = launch.rocket.rocket_name
        
        return (
                <div className="content">
                    <div className="content__left item">
                        <div className="item__date">{launch_date_utc}</div> 
                        <div className="item__title"> {launch.rocket.rocket_name}</div>
                        <div className="item__timer">{timeToStart} to start</div>
                        <div className="item__logo">
                            <img src={launch.links.mission_patch} width='180'/>
                        </div>
                    </div>
                    <div className="content__right description">
                        <div className="details">
                            <h5 className="description__title">Details</h5>
                            <div className="description__line"></div>
                            <p className="description__paragraph">{launch.details}</p>
                        </div>
                        <div className="rocket">
                            <h5 className="description__title">Rocket</h5>
                            <div className="description__line"></div>  
                                <div className="rocket__column">
                                    <p><span className="rocket__feature">Name:</span><span className="rocket__value">{rocketName}</span></p>
                                    <p><span className="rocket__feature">Company:</span><span className="rocket__value">{rocket.company}</span></p>
                                    <p><span className="rocket__feature">Height:</span><span className="rocket__value">{rocket.height.meters}m</span></p>
                                    <p><span className="rocket__feature">Diameter:</span><span className="rocket__value">{rocket.diameter.meters}m</span></p>
                                    <p><span className="rocket__feature">Mass:</span><span className="rocket__value">{rocket.mass.kg}kg</span></p>                              
                                </div>
                                <div className="rocket__column">
                                    <p><span className="rocket__feature">First flight:</span><data className="rocket__value">{rocket.first_flight}</data></p>
                                    <p><span className="rocket__feature">Country:</span><span className="rocket__value">{rocket.country}</span></p>
                                    <p><span className="rocket__feature">Success rate:</span><span className="rocket__value">{rocket.success_rate_pct}&#37;</span></p>
                                    <p><span className="rocket__feature">Cost per launch:</span><span className="rocket__value">&#36;{rocket.cost_per_launch}</span></p>
                                </div>
                                <div className="rocket__description description__paragraph">
                                    <p>Aenean auctor eu risus ac condimentum. Vivamus eget nibh odio. Ut facilisis augue sed auctor egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sed ornare magna. Integer venenatis fermentum nisi id efficitur. Vestibulum laoreet quam ac diam consequat rhoncus.</p>
                                </div>
                        </div>
                        <div className="pad">                
                            <h5 className="description__title ">Launch pad</h5>
                            <div className="description__line"></div>
                            <div className="pad__column">
                                    <p><span className="pad__feature">Name:</span><span className="pad__value">{launchSite.full_name}</span></p>
                                </div>
                                <div className="pad__column">
                                    <p><span className="pad__feature">Location:</span><span className="pad__value">{launchSite.location.name}, {launchSite.location.region}</span></p>
                                </div>
                                <div className="pad__description description__paragraph">
                                    <p>Aenean auctor eu risus ac condimentum. Vivamus eget nibh odio. Ut facilisis augue sed auctor egestas.</p>
                                </div>
                        </div>
                    </div>
                </div>  
        )
    }
}

export default Content;