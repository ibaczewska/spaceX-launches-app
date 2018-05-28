import React from 'react';
import Arrow from '../../assets/arrow_pointer.png';
import TimelineBlock from '../main/TimelineBlock';




class Timeline extends React.Component {
    
    render() {
        return (
            <div className="timeline__wrapper">
            {
                this.props.launches.map(
                  launch => <TimelineBlock onTimelineClick={this.props.onTimelineClick} launch={launch} key={launch.flight_number}/>
                )
            }               
            </div>

        )
    }

}

export default Timeline;

// [b, a, c, d]

// Child a key=0
// Child b key=1
// Child c key=2
// Child d key=3
