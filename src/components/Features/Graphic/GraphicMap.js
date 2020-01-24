import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../MapStyles/Map.css';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
const someCords = [
  {
    lat: 38.966547,
    lng: -94.581934,
    text: "Artisan Graphic Design"
  },
  {
    lat: 38.8991893,
    lng: -94.5828128,
    text: "WebWorks of KC"
  },
  {
    lat: 38.9205196,
    lng: -94.438007,
    text: "Willoughby Design"
  }
]

class GraphicMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.100105,
      lng: -94.5781416
    },
    zoom: 10
  };
  constructor(props) {
    super(props);

    this.state = {
        clicked: false,
        currentToastMessage: '',
    }
}
clickMarker = (message) => (event) => {
  this.setState({
      clicked: !this.state.clicked,
      currentToastMessage: message
  })
}

  render() {
    let toast = <div></div>;

    if(this.state.clicked) {
        toast = (
            <div className="scotts-toast">
                {this.state.currentToastMessage}
            </div>
        )
    }
    const htmlArray = someCords.map((item, index) => {
      return (
        <div
        className="test" onClick={this.clickMarker(item.clickMessage)}
        lat={item.lat}
        lng={item.lng}
    >
        {item.text}
    </div>
      )
    })
    return (
      // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '80%' }}>
          {toast}
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {htmlArray}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GraphicMap;