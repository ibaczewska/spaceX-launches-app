import React from 'react';
import '../styles/_LaunchDetails.sass';
import Hero from '../components/main/Hero';
import Timeline from '../components/main/Timeline';
import Footer from '../components/Footer';
import 'babel-polyfill';



export default class LaunchesList extends React.Component {
    state = {
        launches: [],
        buttonNames: [],
        selectedButton: 'All',
        loading: true
    }
    async componentDidMount() {
        const res = await fetch('https://api.spacexdata.com/v2/launches/all')
        const launches = await res.json()
        const buttonNames = this.getUniqueRocketNames(launches)
        buttonNames.unshift('All')
        this.setState({ launches, buttonNames, loading: false })
    }
    getUniqueRocketNames(launches) {
        const uniqueRocketNames = []

        for (const launch of launches) {
            const launchName = launch.rocket.rocket_name
            if (!uniqueRocketNames.includes(launchName)) {
                uniqueRocketNames.push(launchName)
            }
        }
        return uniqueRocketNames
    }

    // getUniqueRocketNames(launches) {
    //     return launches.reduce(
    //         (uniqueRocketNames, {rocket: {rocket_name}}) => 
    //             uniqueRocketNames.includes(rocket_name)
    //                 ? uniqueRocketNames
    //                 : [...uniqueRocketNames, rocket_name]
    //     , [])
    // }

    // const variab = condition ? valueIfTrue : valueIfFalse

    updateSelectedButton = (selectedButton) => {
        this.setState({ selectedButton })
    }
    render() {
        const { launches, buttonNames, selectedButton, loading } = this.state


        const filteredLaunches = selectedButton !== 'All'
            ? launches.filter(launch => launch.rocket.rocket_name === selectedButton)
            : launches
        return (
            <main>
                <Hero buttonNames={buttonNames} onButtonClick={this.updateSelectedButton} />
                {
                    !loading && <Timeline onTimelineClick={this.props.onTimelineClick} launches={filteredLaunches} />
                }
                <Footer />
            </main>
        )
    }
}

// export default LaunchesList;

/*
{
    condition ? component : null
    !condition && component
}
*/