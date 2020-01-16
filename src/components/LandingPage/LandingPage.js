import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material UI
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
{/* <IconButton>
                        <CheckCircleOutlineIcon />
                    </IconButton>  */}

class LandingPage extends Component {
    state = {
        heading: 'TrackMeet',
        team: 'Meet Your Team',
        release: 'Release Ready',
        contact: {
            message: '',
            email: '',
            name: ''
        },
    };

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            contact: {
                ...this.state.contact,
                message: '',
                email: '',
                name: '',
            },
            [propertyName]: event.target.value,
        });
    }

    onLogin = (event) => {
        this.props.history.push('/login');
    }
    producerRole = (event) => {
        this.props.history.push('/features/producer');
    }
    graphicRole = (event) => {
        this.props.history.push('/features/graphic-designer');
    }
    videoRole = (event) => {
        this.props.history.push('/features/videographer');
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.heading}</h1>

                <div className="grid">
                    <div className="grid-col grid-col_8">
                        <h2>Release Yourself</h2>
                        <p>
                            Everything you'll ever need to successfully release your next music project.
                            Find local producers, graphic designers, and videographers that align with your vision
                            and get to work!
                        </p>
                    </div>
                    <div className="grid-col grid-col_4">
                        <h3>Already a Member?</h3>
                        <button
                            className="btn btn_sizeFull"
                            onClick={this.onLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
                <h2>{this.state.team}</h2>
                <p>Begin building out a timeline for you next song release. Schedule sessions with your producer,
                    talk overall themes with your graphic designer, and shoot promotional material for social media
                    with your videographer. Feel confident knowing when your vision will be seen and heard.
                </p>
                <div>
                    <button onClick={this.producerRole}>
                        <h3>Producer</h3>
                        <p>Discover how arranging, recording, and mixing can help turn
                            your demo into a chart topping success.
                        </p>
                    </button>
                    <span>
                        <button onClick={this.graphicRole}>
                            <h3>Graphic Designer</h3>
                            <p>Meet one on one to discuss how you want your music to be presented.
                                High quality images that can be used across all platforms.
                        </p>
                        </button>
                    </span>
                    <span>
                        <button onClick={this.videoRole}>
                            <h3>Videographer</h3>
                            <p>Strategize over where you want to engage with your listeners through photos,
                                promo clips, and music videos.
                        </p>
                        </button>
                    </span>
                </div>
                <div>
                    <h3>{this.state.release}</h3>
                    <p>
                        Take away all the fear of knowing where to start with your next music project. Get ready
                        to assemble the team that will guide you through every step of the music releasing process.
                    </p>
                    <p>Need 3 images here</p>
                </div>
                <div>
                    <h3>Write Us A Verse</h3>
                    <div>
                        <label htmlFor="message">
                            <input
                                type="text"
                                name="Message"
                                placeholder="Message"
                                value={this.state.contact.message}
                                onChange={this.handleInputChangeFor('contact')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            <input
                                type="text"
                                name="Email"
                                placeholder="Email"
                                value={this.state.contact.email}
                                onChange={this.handleInputChangeFor('contact')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name">
                            <input
                                type="text"
                                name="Name"
                                placeholder="Name"
                                value={this.state.contact.name}
                                onChange={this.handleInputChangeFor('contact')}
                            />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
