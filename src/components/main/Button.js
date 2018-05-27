import React from 'react';



class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        launches: []
    }
    componentDidMount() {
        fetch('https://api.spacexdata.com/v2/launches/all')
        .then (res => res.json)
        .then(json => this.setState({launches: json.rocket.rocket_name }));
    }
    render() {
        const {rocket} = this.props;
        const { buttonText } = this.props;
        return (

            <button href={'#'} className="button__item">{this.state.launches}</button>

        )
    }

}

export default Button;