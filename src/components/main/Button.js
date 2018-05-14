import React from 'react';



class Button extends React.Component {
    
    render() {
        const { buttonText } = this.props;
        return (

            <button href={'#'} className="button__item">{ buttonText }</button>

        )
    }

}

export default Button;