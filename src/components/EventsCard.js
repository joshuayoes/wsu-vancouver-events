import React, { Component } from 'react'
import Parser from 'rss-parser'
import HTMLParser from 'node-html-parser'

class EventsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        let parser = new Parser();

        parser.parseURL('https://vancouver-wsu.campuslabs.com/engage/events.rss')
            .then(data => {
                //let root = HTMLParser.parse('data.items.content[1]')
                //console.log(root);
            
                this.setState({events: data.items})
        });
    }
    
    render() {
        const eventItems = this.state.events.map(event => (
            <div key={event.guid} className="eventItem">
                <h2> {event.title} </h2>
                <p> {event.contentSnippet} </p>
            </div>
        ));
        return (
            <div className="eventsCard">
                <h1>Events</h1>
                { eventItems }
            </div>
        )
    }
}

export default EventsCard;