import React, { Component } from 'react'
import ReadMoreReact from 'read-more-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare, faCalendarPlus, faClock } from '@fortawesome/free-solid-svg-icons'


//has conditional UI for if the event has an image or not
export class EventCard extends Component {  
    render() {
        return (
            <div key={this.props.guid} className="eventItem">
                {this.props.img.url ? <img src={this.props.img.url} alt={this.props.title} /> : ''}
                <h2> {this.props.title} </h2>
                <p className="eventTime"> 
                    <FontAwesomeIcon icon={faClock} />
                    {this.props.beginTime } 
                </p>
                <ReadMoreReact 
                    text={this.props.description}
                    readMoreText="Read More"
                /> 
                <div className="button-container">
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer"> 
                        <button>
                            <FontAwesomeIcon icon={faShareSquare} /> 
                            <span className="buttonText">View on Engage</span> 

                        </button>
                    </a> 
                    <a href={this.props.ics}> 
                        <button>
                            <FontAwesomeIcon icon={faCalendarPlus} />
                            <span className="buttonText">Add To iCal</span> 
                        </button>
                    </a> 
                    <a href={this.props.ics}>
                        <button>
                            <FontAwesomeIcon icon={faCalendarPlus} />
                            <span className="buttonText">Add To Outlook</span>
                        </button>
                    </a> 
                </div>
            </div>
        )
    }
}

export default EventCard
