import React, { useState, useEffect } from "react";
import { fetchStream } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const StreamShow = ({ match }) => {
  const dispatch = useDispatch();

  const stream = useSelector((state) => state.streams[match.params.id]);

  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);


  
  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
