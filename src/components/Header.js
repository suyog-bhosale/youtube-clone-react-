import React, { useState } from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [inputSerch, SetinputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.digitaldips.pk/wp-content/uploads/2018/08/new-youtube-logo-720x340.png"
            alt="logoimg"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          type="text"
          value={inputSerch}
          onChange={(e) => SetinputSearch(e.target.value)}
          placeholder="search"
        />
        <Link to={`/search/${inputSerch}`}>
          <SearchSharpIcon className="header__button" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallSharpIcon className="headerIcon" />
        <AppsSharpIcon className="headerIcon" />
        <NotificationsSharpIcon className="headerIcon" />
        <Avatar
          alt="suyog bhosale"
          src="https://images.pexels.com/photos/4423850/pexels-photo-4423850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div>
  );
};

export default Header;
