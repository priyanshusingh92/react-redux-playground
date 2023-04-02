import React, { useEffect, useState } from "react";
import { VIDEOS_LIST_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import ButtonList from "./ButtonList";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVideos = async () => {
    const data = await fetch(VIDEOS_LIST_URL);
    const json = await data.json();
    setVideos(json.items);
    setLoading(false);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      <ButtonList />
      {!loading &&
        videos.map((video) => (
          <Link key={video.id} to={"watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      {loading &&
        Array(50)
          .fill(null)
          .map((item,index) => <Shimmer key={index} />)}
    </div>
  );
};

export default VideoContainer;
