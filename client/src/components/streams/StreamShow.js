import React, { useRef, useEffect } from "react";
import flv from "flv.js";
import { fetchStream } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const StreamShow = ({ match }) => {
  const dispatch = useDispatch();
  const videoRef = useRef();

  const stream = useSelector((state) => state.streams[match.params.id]);

  //TODO fetching the stream on componentDidMount
  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);

  //TODO setting up flv player
  useEffect(() => {
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${match.params.id}.flv`,
    });

    player.attachMediaElement(videoRef.current);
    player.load();
  }, []);

  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls={true} />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
