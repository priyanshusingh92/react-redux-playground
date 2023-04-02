import React, { useEffect, useState } from "react";
import { VIDEOS_LIST_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import {Link} from 'react-router-dom';

import ButtonList from "./ButtonList";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(VIDEOS_LIST_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      <ButtonList />
      {videos.map((video) => (
        <Link to={"watch?v="+video.id}>
        <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
