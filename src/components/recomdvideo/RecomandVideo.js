import React from "react";
import "./RecomandVideos.css";
import VideoCard from "./VideoCard";

/**
 * @author
 * @function RecomandVideos
 **/

const RecomandVideos = (props) => {
  return (
    <div className="RecomandVideos">
      <h2>Recommended</h2>
      <div className="row__videos">
        <VideoCard
          title="how to bacome programmer"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          channel="suyog bhosale"
          image="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <VideoCard
          title="how to bacome programmer"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          channel="suyog bhosale"
          image="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <VideoCard
          title="how to bacome programmer"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          channel="suyog bhosale"
          image="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <VideoCard
          title="how to bacome programmer"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          channel="suyog bhosale"
          image="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div>
  );
};

export default RecomandVideos;
