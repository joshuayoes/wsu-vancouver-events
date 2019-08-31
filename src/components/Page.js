import React, { Component } from 'react'
import About from './About';
import EventsFeed from './EventsFeed'

class Page extends Component {
    render() {
        let page;

        if (this.props.page === "events"){
            page = <EventsFeed />
        } else {
            page = <About />
        }

        return (
            <div className="feed-container">
                { page }
            </div>
        )
    }
}

export default Page