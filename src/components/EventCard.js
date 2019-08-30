import React, { Component } from 'react'

export class EventCard extends Component {  
    static defaultProps = {
        img: null
    }
    

    render() {
        return (
            <div key={this.props.guid} className="eventItem">
                {this.props.img.url ? <img src={this.props.img.url} alt={this.props.title} /> : ''}
                <h2> {this.props.title} </h2>
                <p> {this.props.beginTime } </p>
                <p> { this.props.description } </p>
                <button> <a href={this.props.link} target="_blank" rel="noopener noreferrer">  See More  </a> </button>
            </div>
        )
    }
}

export default EventCard
