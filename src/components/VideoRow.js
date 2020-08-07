import React from "react";
import "./VideoRow.css";

/**
 * @author
 * @function videoRow
 **/

const videoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <h5>
          {channel} {subs} Susbcriber {views} viwes {timestamp}
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default videoRow;
