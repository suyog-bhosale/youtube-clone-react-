import React from "react";
import "./SidebarRow.css";

/**
 * @author
 * @function SidebarRow
 **/

const SidebarRow = ({ Icon, title }) => {
  return (
    <div className="SidebarRow">
      <Icon className="sidebarIcon" />
      <h2 className="sidebartitle">{title}</h2>
    </div>
  );
};

export default SidebarRow;
