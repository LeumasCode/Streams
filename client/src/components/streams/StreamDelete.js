import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../actions";

const StreamDelete = (props) => {
  // const state = useSelector(state => state.)
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

  return (
    <div>
      stream delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete the stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
