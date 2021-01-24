import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderedAdmin(stream) {
    console.log(stream.userId);
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="content right floated">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="negative ui button"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderedList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderedAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className='header'> {stream.title} </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  renderedCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderedList()}</div>
        {this.renderedCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
