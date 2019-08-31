import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faShareSquare, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component {
    constructor(props){
        super(props)
        this.viewAbout = this.viewAbout.bind(this);
        this.viewEvents = this.viewEvents.bind(this);
    }

    viewAbout(){
        this.props.changePage("about")
    }

    viewEvents(){
        this.props.changePage("events")
    }

    render() {
        return (
            <nav>
                <a href="https://www.vancouver.wsu.edu/" className="nav-wsu-home">
                    <FontAwesomeIcon icon={faShareSquare} />
                    WSU Home
                </a>
                <span onClick={this.viewEvents} className="nav-events">
                    <FontAwesomeIcon icon={faCalendarDay} />
                    Events
                </span>
                <span onClick={this.viewAbout} className="nav-about">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    About
                </span>
            </nav>
        )
    }
}

export default Navigation