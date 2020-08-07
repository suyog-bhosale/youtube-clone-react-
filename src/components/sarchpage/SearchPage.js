import React from "react";
import "./SearchPage.css";
import FilterListIcon from "@material-ui/icons/FilterList";
import ChannleRow from "./ChannleRow";
import VideoRow from "../../components/VideoRow";

/**
 * @author
 * @function SearchPage
 **/

const SearchPage = (props) => {
  return (
    <div className="SearchPage">
      <div className="SearchPage__filter">
        <FilterListIcon />
        <h2>filter</h2>
      </div>
      <hr></hr>
      <ChannleRow
        image="https://images.pexels.com/photos/3230267/pexels-photo-3230267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        channle="suyog bhosale"
        varified
        subs="66k"
        noFOvides={330}
        description="you just goy no chillss fire man 1995 action role-playing game developed and published by Square for the Super Famicom. The third installment in"
      />

      <hr />

      <VideoRow
        views="1.2M"
        subs="450k"
        description="A blog (a truncation of ) is a discussion or informational website published on the World Wide Web consisting of discrete, often "
        timestamp="45mins"
        channel="suyog bhosale"
        title="let satrt programing"
        image="https://images.pexels.com/photos/3230267/pexels-photo-3230267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <VideoRow
        views="1.2M"
        subs="450k"
        description="A blog (a truncation of ) is a discussion or informational website published on the World Wide Web consisting of discrete, often "
        timestamp="45mins"
        channel="suyog bhosale"
        title="let satrt programing"
        image="https://images.pexels.com/photos/3230267/pexels-photo-3230267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <VideoRow
        views="1.2M"
        subs="450k"
        description="A blog (a truncation of ) is a discussion or informational website published on the World Wide Web consisting of discrete, often "
        timestamp="45mins"
        channel="suyog bhosale"
        title="let satrt programing"
        image="https://images.pexels.com/photos/3230267/pexels-photo-3230267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  );
};

export default SearchPage;
