import React from 'react';



class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {rocket} = this.props;
        const { buttonText } = this.props;
        return (

            <button href={'#'} className="button__item">{launches}</button>

        )
    }

}

export default Button;