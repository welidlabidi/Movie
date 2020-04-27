import React from "react";

const Trailer = (props) => {
  let url = `https://www.youtube.com/embed/${props.trailer}`;
  return (
    <div className="iframe">
      <embed
        style={{ width: "580px", height: "350px" }}
        frameBorder="0"
        type="video/webm"
        src={url}
      />
    </div>
  );
};

export default Trailer;
