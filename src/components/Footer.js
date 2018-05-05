import React from 'react';



class Footer extends React.Component {
    
    render() {
    
        return (
            
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
                
        )
    }

}

export default Footer;