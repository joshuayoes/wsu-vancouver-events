import React, { Component } from 'react'
import ReadMoreReact from 'read-more-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'


//has conditional UI for if the event has an image or not
export class EventCard extends Component {  
    render() {
        return (
            <div key={this.props.guid} className="eventItem">
                {this.props.img.url ? <img src={this.props.img.url} alt={this.props.title} /> : ''}
                <h2> {this.props.title} </h2>
                <p> {this.props.beginTime } </p>
                <ReadMoreReact 
                    text={this.props.description}
                    readMoreText="Read More"
                /> 
                <div className="button-container">
                    <button> 
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer"> 
                            <FontAwesomeIcon icon={faShareSquare} /> 
                            <span className="buttonText">View on Engage</span> 
                        </a> 
                    </button>
                    <button> 
                        <a href={this.props.ics}> 
                            <FontAwesomeIcon icon={faCalendarPlus} />
                            <span className="buttonText">Add To iCal</span> 
                        </a> 
                    </button>
                    <button> 
                        <a href={this.props.ics}>
                            <FontAwesomeIcon icon={faCalendarPlus} />
                            <span className="buttonText">Add To Outlook</span>
                        </a> 
                    </button>
                </div>
            </div>
        )
    }
}

export default EventCard
