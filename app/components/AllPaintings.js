// we'll create a class-based component for paintings

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import your thunks
import { getPaintings, createPainting } from '../redux/paintings';

class AllPaintings extends Component {
  // we'll create a form on this page...so we'll do a constructor function:
  constructor() {
    super();
    this.state = {
      name: '',
      year: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // dispatch fetch all paintings
    this.props.getPaintings();
  }

  // this will allow us to change the forms
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // this will allow us to handle submits into forms
  handleSubmit(event) {
    event.preventDefault(); // this will prevent page from refreshing

    // we'll store the name & year into a single varialbe...
    const paintingInfo = { name: this.state.name, year: this.state.year };
    this.props.createPainting(paintingInfo);
    this.setState({ name: '', year: '' });
  }

  render() {
    return (
      <div>
        <h2>Add a new painting</h2>
        <form onSubmit={(event) => this.handleChange(event)}>
          <input
            onChange={(event) => this.handleChange(event)}
            type="text"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={(event) => this.handleChange(event)}
            type="text"
            value={this.state.year}
            name="year"
          />
          <button type="submit">Submit</button>
        </form>

        <h2>Our Presitious Collection</h2>
        {this.props.paintings.map((painting) => {
          return (
            <div key={painting.id}>
              <p>{painting.name}</p>
              <img src={painting.imageUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

// will need a mapStateToProps here (allows us to get the piece of state from our store data)
const mapState = (state) => ({
  paintings: state.paintings,
});

// also need a mapDispatchToProps here:
const mapDispatch = (dispatch) => ({
  getPaintings: () => dispatch(getPaintings()),
  createPainting: (paintingInfo) => dispatch(createPainting(paintingInfo)),
});

// now export the component using export default
export default connect(mapState, mapDispatch)(AllPaintings);
