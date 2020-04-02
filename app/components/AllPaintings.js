import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getPaintings, createPainting } from "../redux/paintings";

class AllPaintings extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      year: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getPaintings();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const paintingInfo = { name: this.state.name, year: this.state.year };
    this.props.createPainting(paintingInfo);
    this.setState({ name: "", year: "" });
  }

  render() {
    return (
      <div>
        <h2>Add a new painting</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            value={this.state.year}
            name="year"
          />
          <button type="submit">Submit</button>
        </form>

        <h2>All paintings</h2>
        {this.props.paintings.map(painting => {
          return (
            <div key={painting.id}>
              <p>{painting.name}</p>
              <button type="button">Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = state => ({
  paintings: state.paintings
});

const mapDispatch = dispatch => ({
  getPaintings: () => dispatch(getPaintings()),
  createPainting: paintingInfo => dispatch(createPainting(paintingInfo))
});

export default connect(mapState, mapDispatch)(AllPaintings);
