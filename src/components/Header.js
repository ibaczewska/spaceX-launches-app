import React from 'react';
import logo from '../assets/space_x_logo_bw_centered.png';


class Header extends React.Component {
    
    render() {
    
        return (
            
                <div className="header">
                    <div className="header__arrow"><div className="header__arrow__line"></div>Go back</div>
                    <img className="header__logo" src={logo} width='200' />
                    <div></div>
                </div>
                
        )
    }

}

export default Header;