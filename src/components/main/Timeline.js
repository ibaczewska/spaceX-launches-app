import React from 'react';
import Arrow from '../../assets/arrow_pointer.png';
import TimelineBlock from '../main/TimelineBlock';
import launches from '../../assets/launches.json';



class Timeline extends React.Component {
    
    render() {
        
        return (
            <div className="timeline__wrapper">
               <TimelineBlock />
               <TimelineBlock />
               <TimelineBlock />
               <TimelineBlock />
               <TimelineBlock />
               <TimelineBlock />               
            </div>

            

        )
    }

}

export default Timeline;