import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import './LandingPage.css';



class LandingPage extends Component {
    state = {
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
    // Need to create dispatch route. Not high priority 
    sendContactMessage = (event) => {
        this.props.dispatch({});
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
        this.props.history.push('/features/photographer');
    }

    render() {

        return (
            <div className="container">
                <div className="release-container">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <div className="main-section" id="main">
                                <div className="release-yourself">
                                    <h2 className="release">
                                        Release Yourself
                                    </h2>
                                    <p>
                                        Everything you'll ever need to successfully release your next music project.
                                        Find local producers, graphic designers, and videographers that align with your vision
                                        and get to work!
                                    </p>
                                </div>
                                <div>
                                    <h3 className="member">Already a Member?</h3>
                                    <button
                                        className="btn btn_sizeFull"
                                        onClick={this.onLogin}
                                    >
                                        Login
                                </button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="team-heading">
                    <h2 className="team-header">Meet Your Team</h2>
                    <p>Begin building out a timeline for you next song release. Schedule sessions with your producer,
                        talk overall themes with your graphic designer, and shoot promotional material for social media
                        with your photographer. Feel confident knowing when your vision will be seen and heard.
                        </p>
                </div>
                <div className="features-container">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Box className="producer-container">
                                <Button onClick={this.producerRole}>
                                    <div>
                                        <div className="producer">
                                            <h3>Producer</h3>
                                        </div>
                                        <div className="producer-text">
                                            <p>Discover how arranging, recording, and mixing can help turn
                                                your demo into a chart topping success.
                                    </p>
                                        </div>
                                    </div>
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="graphic-container">
                                <Button onClick={this.graphicRole}>
                                    <div>
                                        <div className="graphic">
                                            <h3>Graphic Designer</h3>
                                        </div>
                                        <div className="graphic-text">
                                            <p>Meet one on one to discuss your album art.
                                            High quality images that can be used across all platforms.
                                    </p>
                                        </div>
                                    </div>
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="video-container">
                                <Button onClick={this.videoRole}>
                                    <div>
                                        <div className="video">
                                            <h3>Photographer</h3>
                                        </div>
                                        <div className="video-text">
                                            <p>Strategize over where you want to engage with your listeners through photos,
                                            promo clips, and music videos.
                                                </p>
                                        </div>
                                    </div>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <div className="ready-section">
                        <h2 className="ready-header">Release Ready</h2>
                        <p>
                            Take away all the fear of knowing where to start with your next music project. Get ready
                            to assemble the team that will guide you through every step of the music releasing process.
                            </p>
                    </div>
                </div>
                <div className="about-section" id="about">
                    <h2 className="about-header">Our Passion Is Your Ambition</h2>
                    <p>
                        We know how hard it can be to find the help you need while developing a creative
                        atmosphere you only get by meeting in person. Our goal is to align you with the perfect
                        team that will not only complete the vision, but give direction along the way on how to
                        release project. You will feel confident knowing your project will be seen and heard.
                    </p>
                </div>
                <div className="contact-section" id="contact">
                    <h3 className="contact-text">Write Us A Verse</h3>
                    <div>
                        <label htmlFor="name">
                            <TextField
                                variant="outlined"
                                type="text"
                                name="Name"
                                placeholder="Name"
                                value={this.state.contact.name}
                                onChange={this.handleInputChangeFor('contact')}
                            />
                        </label>
                        <label htmlFor="email">
                            <TextField
                                variant="outlined"
                                type="text"
                                name="Email"
                                placeholder="Email"
                                value={this.state.contact.email}
                                onChange={this.handleInputChangeFor('contact')}
                            />
                        </label>
                        </div>
                        <br></br>
                        <div>
                        <label htmlFor="message">
                            <TextField
                                variant="outlined"
                                multiline
                                fullWidth
                                rowsMax="4"
                                type="text"
                                name="Message"
                                placeholder="Message"
                                value={this.state.contact.message}
                                onChange={this.handleInputChangeFor('contact')}
                            />
                        </label>
                        </div>
                        <br></br>
                    <div className="contact-button">
                        <Button variant="contained" color="primary" onClick={this.sendContactMessage}>Send Message</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
