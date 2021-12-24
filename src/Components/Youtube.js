import React, { Component } from 'react';
import '../youtube.css'

const API = 'AIzaSyDp9zBtqS-rOGZJUlpRqUNGCqXfQFJyOfQ';
const maxResults = 1;
const channelId = `UCWwgaK7x0_FR1goeSRazfsQ`;
var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

export class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    };
    clicked() {
        fetch(finalUrl)
            .then((response) => response.json())
            .then((json) => {

                const resultyt = json.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                this.setState({ resultyt });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        console.log(this.state.resultyt);
        return (
            <div>
                <div className='youtube-btn-container'><button onClick={this.clicked} className='youtube-btn'>Some of the available Samsung devices we offer</button></div>

                {
                    this.state.resultyt.map((link, i) => {
                        var frame = <div key={i} className='youtube-container'><iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>;
                        return frame;
                    })
                }
                {this.frame}
            </div >
        )
    }
}

export default Youtube
