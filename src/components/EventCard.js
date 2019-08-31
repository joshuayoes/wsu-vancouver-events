import React, { Component } from 'react'
import ReadMoreReact from 'read-more-react'

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
                    <button> <a href={this.props.link} target="_blank" rel="noopener noreferrer">  View on Engage  </a> </button>
                    <button> <a href={this.props.ics}> Add To iCal </a> </button>
                    <button> <a href={this.props.ics}> Add To Outlook </a> </button>
                </div>
            </div>
        )
    }
}

export default EventCard
