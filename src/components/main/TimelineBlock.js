import React from 'react';
import Arrow from '../../assets/arrow_pointer.png';
import {format, distanceInWordsToNow} from 'date-fns';

const TimelineBlock = ({launch, onTimelineClick}) =>  {
    const rocketName = launch.rocket.rocket_name
    const launchSite = launch.launch_site.site_name
    let launch_date_utc = format(launch.launch_date_utc, 'DD MMMM YYYY');
    
    

    return (
    <div onClick={(e) => onTimelineClick(launch)} className="timeline__block">
        <div className="timeline__dot"></div>
            <div className="timeline__content">
                <div className="timeline__date">{launch_date_utc}</div>
                <span className="timeline__separator">
                    <img className="timeline__separator__arrow" src={Arrow} />
                </span>
                <div className="timeline__rocket">
                    <span className="timeline__rocket__feature">Name: </span>
                    <span className="timeline__rocket__value">{rocketName} | </span>
                    <span className="timeline__rocket__feature">Launch site:</span>
                    <span className="timeline__rocket__value">{launchSite}</span>
                </div>
        </div>
    </div>
    )
}

export default TimelineBlock;