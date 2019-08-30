import React, { Component } from 'react'
import EventCard from './EventCard'
import Parser from 'rss-parser'
import { parse as HTMLParser } from 'node-html-parser'

class EventsFeed extends Component {
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
                this.setState({
                    events: data.items
                })
            })
    }
    
    render() {
        //iterates through each event and pass RSS info through props
        const eventItems = this.state.events.map(event => {
            //prevents error if there is no event img
            let img = event.enclosure;
            if (event.enclosure === undefined) {
                img = {url: null}
            };

            //parse description from RSS feed
            let root = HTMLParser(event.content);
            let description = root.childNodes[0].childNodes[3].text;

            //parse begin time from RSS feed
            let beginTime = root.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0].rawText;

            return (<EventCard 
                key={event.guid}
                img={img}
                title={event.title}
                author={event.author}
                beginTime={beginTime}
                description={description}
                link={event.link}
            />)
        });

        return (
            <div className="eventsCard">
                <h1>WSUV Events</h1>
                { eventItems }
            </div>
            
        )
    }
}

export default EventsFeed;