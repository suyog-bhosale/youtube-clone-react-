import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
/**
 * @author
 * @function VideoCard
 **/

const VideoCard = ({
  image,
  title,
  channel,
  channelImage,
  views,
  timestamp,
}) => {
  return (
    <div>
      <img className="videocard_image" src={channelImage} alt="img" />
      <div className="videoCard_info">
        <Avatar className="videCard_avtar" alt={channel} src={image} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
