import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../actions";

const StreamDelete = (props) => {
  const stream = useSelector((state) => state.streams[props.match.params.id]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(props.match.params.id));
  }, [props, dispatch]);

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
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
