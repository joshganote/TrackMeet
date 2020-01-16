import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class TemplateClass extends Component {
    state = {
        heading: 'Write Us A Verse',
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
    
    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
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
                    <div>
                        <button onClick={this.sendContactMessage}>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);