import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <SidebarRow Icon={LibraryAddIcon} title="Libary" />
    </div>
  );
};

export default Sidebar;
