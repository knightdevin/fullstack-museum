// this file creates a class-based component for all artists

import React, { Component } from 'react';
import { connect } from 'react-redux';

//import the thunks!
import { getArtists } from '../redux/artists';

class AllArtists extends Component {
  componentDidMount() {
    // here we'll dispatch all the "fetched" artists
    this.props.getArtists();
  }

  render() {
    return (
      <div>
        <h2>Our Amazing Artists</h2>
        {this.props.artists.map((artist) => {
          return (
            <div key={artist.id}>
              <p>{artist.name}</p>
              <img src={artist.imageUrl} className="artistPhotos" />
            </div>
          );
        })}
      </div>
    );
  }
}

// mapStateToProps to get data from our store (will be passe don as props)
const mapState = (state) => ({
  artists: state.artists,
});

const mapDispatch = (dispatch) => ({
  getArtists: () => dispatch(getArtists()),
});

// export the component using export default & connect
export default connect(mapState, mapDispatch)(AllArtists);
