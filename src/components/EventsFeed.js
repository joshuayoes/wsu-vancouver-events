import React, { Component } from 'react'
import EventCard from './EventCard'
import Parser from 'rss-parser'
import { parse as HTMLParser } from 'node-html-parser'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class EventsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        //makes request to Engage RSS feed

        //Uses rss-parser to turn RSS into JSON
        //https://www.npmjs.com/package/rss-parser
        let parser = new Parser();

        // Note: some RSS feeds can't be loaded in the browser due to CORS security.
        // To get around this, you can use a proxy.
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        const RSS_FEED = 'https://vancouver-wsu.campuslabs.com/engage/events.rss'
        parser.parseURL(CORS_PROXY + RSS_FEED)
            .then(feed => {
                this.setState({
                    events: feed.items,
                    isLoaded: true
                });    
            })
            .catch(error => console.log(error));
    };
    
    render() {
        //iterates through each event and pass RSS info through props
        const eventItems = this.state.events.map(event => {
            //prevents undefined error if there is no event img
            let img = event.enclosure;
            if (event.enclosure === undefined) {
                img = {url: null}
            };

            //Uses node-html-parser to grab content from incomplete RSS JSON
            //https://www.npmjs.com/package/node-html-parser

            //parse description from RSS feed
            let root = HTMLParser(event.content);
            let description = root.childNodes[0].childNodes[3].text;

            //parse begin time from RSS feed
            let beginTime = root.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0].rawText;

            //creates URL to grab event data on click
            let ics = `${event.link}.ics`;

            //TO DO: write query for Google Calendar
            //let googleCalendar = `${event.link}/googlepublish/`;

            //pass each event property into props
            return (<EventCard 
                key={event.guid}
                img={img}
                title={event.title}
                author={event.author}
                beginTime={beginTime}
                description={description}
                link={event.link}
                ics={ics}
            />)
        });
        
        //UI while waiting for RSS fetch request 
        if (this.state.isLoaded === false){
            return (
                <React.Fragment>
                    <h1>WSU Vancouver Events</h1>
                    <div className="loader">
                        <Loader 
                            type="ThreeDots"
                            color="#981e32"
                            height={100}
                            width={100}
                        />
                    </div>
                </React.Fragment>
            )
        //UI once RSS fetch request has loaded 
        } else { 
            return (
                <div className="eventsCard">
                    <h1>WSU Vancouver Events</h1>
                    { eventItems }
                </div>
            )
        }
    }
}

export default EventsFeed;