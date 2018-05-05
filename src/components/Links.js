import React from 'react';



class Links extends React.Component {
    
    render() {
    
        return (
            
            <div className="links__wrapper">
                <h4 className="links__title">Mission Links</h4>
                <a href={'#'} className="links__button">reddit campaign</a>
                <a href={'#'} className="links__button">presskit</a>
                <a href={'#'} className="links__button">mission video</a>
            </div>
                
        )
    }

}

export default Links;