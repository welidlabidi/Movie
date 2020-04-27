import React from "react";

const Trailer = (props) => {
  let youtubeUrl = `https://www.youtube.com/embed/${props.trailer}`;
  return (
    <div className="iframe">
      <embed
        style={{ width: "580px", height: "350px" }}
        /*         frameBorder="0"
         */ type="video/webm"
        src={youtubeUrl}
      />
    </div>
  );
};

export default Trailer;
