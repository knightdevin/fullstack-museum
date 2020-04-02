import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  getPaintings,
  createPainting,
  deletePainting,
  updatePainting
} from "../redux/paintings";

class AllPaintings extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      year: "",
      editName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  handleDelete(paintingId) {
    this.props.deletePainting(paintingId);
  }

  handleEdit(e, paintingId) {
    e.preventDefault();
    const newPaintingInfo = { name: this.state.editName };

    // const res = await axios.put(
    //   `/api/paintings/${paintingId}`,
    //   newPaintingInfo
    // );

    this.props.updatePainting(paintingId, newPaintingInfo);
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
              <button
                type="button"
                onClick={() => this.handleDelete(painting.id)}
              >
                Delete
              </button>

              <p>Don't ever write a form like this please</p>
              <form onSubmit={e => this.handleEdit(e, painting.id)}>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="editName"
                  value={this.state.editName}
                />
                <button type="submit">Submit</button>
              </form>
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
  createPainting: paintingInfo => dispatch(createPainting(paintingInfo)),
  deletePainting: paintingId => dispatch(deletePainting(paintingId)),
  updatePainting: (paintingId, info) =>
    dispatch(updatePainting(paintingId, info))
});

export default connect(mapState, mapDispatch)(AllPaintings);
