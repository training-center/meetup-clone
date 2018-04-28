import React, { Fragment, PureComponent } from 'react'

export default class Map extends PureComponent {
  componentDidMount () {
    const myInitMap = initMap(this.props.address)
    window.initMap = window.initMap || myInitMap

    if (!document.querySelector('#react-maps')) {
      this.scriptContainer.appendChild(this.createScript())
    }
  }

  createScript () {
    const script = document.createElement('script')
    script.src = '//maps.googleapis.com/maps/api/js?v=3&key=AIzaSyD3WtWkd2aSNPwJqOmtDkICIo8Y6Buy1oE&callback=initMap'
    script.id = 'react-maps'
    return script
  }

  render () {
    return (
      <Fragment>
        <div id='map' style={{ height: 200 }} />
        <div ref={node => this.scriptContainer = node} />
      </Fragment>
    )
  }
}

const initMap = (address) => () => {
  console.log('initMap')
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18
  });
  var geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder, map, address);
}

function geocodeAddress(geocoder, resultsMap, address) {
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
