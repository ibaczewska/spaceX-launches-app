import React from 'react';
import Arrow from '../../assets/arrow_pointer.png';
import launches from '../../assets/launches.json'



class Timeline extends React.Component {
    
    render() {
        const { } = this.props;
        return (
            <div className="timeline__wrapper">
                <div className="timeline__block">
                <div className="timeline__dot"></div>
                    <div className="timeline__content">
                        <div className="timeline__date">12 May 2018</div>
                        <span className="timeline__separator">
                            <img className="timeline__separator__arrow" src={Arrow} />
                        </span>
                        <div className="timeline__rocket">
                            <span className="timeline__rocket__feature">Name:</span>
                            <span className="timeline__rocket__value">Falcon 9 | </span>
                            <span className="timeline__rocket__feature">Launch site:</span>
                            <span className="timeline__rocket__value">Lorem ipsum</span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="timeline__block">
                <div className="timeline__dot"></div>             
                    <div className="timeline__content">
                        <div className="timeline__date">12 May 2018</div>
                        <span className="timeline__separator">
                            <img className="timeline__separator__arrow" src={Arrow} />
                        </span>
                        <div className="timeline__rocket">
                            <span className="timeline__rocket__feature">Name:</span>
                            <span className="timeline__rocket__value">Falcon 9 | </span>
                            <span className="timeline__rocket__feature">Launch site:</span>
                            <span className="timeline__rocket__value">Lorem ipsum</span>
                        </div>
                        <div></div>
                    </div>
                </div><div className="timeline__block">
                <div className="timeline__dot"></div>                             
                    <div className="timeline__content">
                        <div className="timeline__date">12 May 2018</div>
                        <span className="timeline__separator">
                            <img className="timeline__separator__arrow" src={Arrow} />
                        </span>
                        <div className="timeline__rocket">
                            <span className="timeline__rocket__feature">Name:</span>
                            <span className="timeline__rocket__value">Falcon 9 | </span>  
                            <span className="timeline__rocket__feature">Launch site:</span>
                            <span className="timeline__rocket__value">Lorem ipsum</span>
                        </div>
                        <div></div>
                    </div>
                </div><div className="timeline__block">
                <div className="timeline__dot"></div>                             
                    <div className="timeline__content">
                        <div className="timeline__date">12 May 2018</div>
                        <div className="timeline__separator"></div>
                        <div className="timeline__rocket">
                            <span className="timeline__rocket__feature">Name:</span>
                            <span className="timeline__rocket__value">Falcon 9 | </span>  
                            <span className="timeline__rocket__feature">Launch site:</span>
                            <span className="timeline__rocket__value">Lorem ipsum</span>
                        </div>
                        <div></div>
                    </div>
                </div><div className="timeline__block">
                <div className="timeline__dot"></div>                             
                    <div className="timeline__content">
                        <div className="timeline__date">12 May 2018</div>
                        <div className="timeline__separator"></div>
                        <div className="timeline__rocket">
                            <span className="timeline__rocket__feature">Name:</span>
                            <span className="timeline__rocket__value">Falcon 9 | </span> 
                            <span className="timeline__rocket__feature">Launch site:</span>
                            <span className="timeline__rocket__value">Lorem ipsum</span>
                        </div>
                        <div></div>
                    </div>
                </div><div className="timeline__block">
                <div className="timeline__dot"></div>                             
                    <div className="timeline__content">
                        <div className="timeline__date">12 May 2018</div>
                        <div className="timeline__separator"></div>
                        <div className="timeline__rocket">
                            <span className="timeline__rocket__feature">Name:</span>
                            <span className="timeline__rocket__value">Falcon 9 | </span> 
                            <span className="timeline__rocket__feature">Launch site:</span>
                            <span className="timeline__rocket__value">Lorem ipsum</span>
                        </div>
                        <div></div>
                    </div>
                </div><div className="timeline__block">
                <div className="timeline__dot"></div>                             
                    <div className="timeline__content">
                        <div className="timeline__date">12 May 2018</div>
                        <div className="timeline__separator"></div>
                        <div className="timeline__rocket">
                            <span className="timeline__rocket__feature">Name:</span>
                            <span className="timeline__rocket__value"> Falcon 9 | </span>
                            <span className="timeline__rocket__feature">Launch site:</span>
                            <span className="timeline__rocket__value">Lorem ipsum</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            

        )
    }

}

export default Timeline;