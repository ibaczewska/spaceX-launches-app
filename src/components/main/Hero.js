import React from 'react';
import heroLogo from '../../assets/space_x_logo_bw_centered.png';
import heroMoon from '../../assets/moon.png';
import Button from '../main/Button';
import launches from '../../assets/launches.json';


export class Hero extends React.Component {

   
     
    render() {
    
        return (
            
                <div className="hero">
                    <div></div>
                    <div className="hero__items">
                        <img className="hero__item__moon" src={heroMoon} width="700" alt=""/>
                        <img className="hero__item__logo"src={heroLogo} width="400" alt="SpaceX logo"/>
                        <h4 className="hero__item__paragraph">Launches 2018</h4>
                        <div className="button__wrapper">
                        {/* {
                            this.state.launches.map( flight =>  (<Button key={flight.rocket.rocket_id} flight={flight}  />
                            ))
                        }
                            */}
                           
                            <Button  buttonText="Falcon 9"/>
                            <Button buttonText="Falcon Heavy"/>
                            <Button buttonText="Dragon"/>
                        </div>
                        
                        
                    </div>
                    <div></div>
                </div>
                
        )
    }

}



export default Hero;