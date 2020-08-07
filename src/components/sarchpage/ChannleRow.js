import React from "react";
import "./ChannleRow.css";
import { Avatar } from "@material-ui/core";

/**
 * @author
 * @function ChannleRow
 **/

const ChannleRow = ({ image, channle, subs, noFOvides, description }) => {
  return (
    <div className="channleRow">
      <Avatar className="channle__logo" alt={channle} src={image} />
      <div className="channleTExt">
        <h4>{channle}</h4>
        <p>
          {noFOvides}videos . {subs} suscribers
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannleRow;
