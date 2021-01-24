import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = ({ match }) => {
  const stream = useSelector((state) => state.streams[match.params.id]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);

  const actions = (
    <React.Fragment>
      <button
        onClick={() => dispatch(deleteStream(match.params.id))}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = !stream
    ? `Are you sure you want to delete this stream`
    : `Are you sure you want to delete the stream with title: ${stream.title}`;

  return (
    <Modal
      title="Delete Stream"
      content={renderContent}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

export default StreamDelete;
