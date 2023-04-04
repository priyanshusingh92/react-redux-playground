import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import ButtonList from "./ButtonList";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((state) => state.videos.videos)

  return (
    <div className="flex flex-wrap">
      <ButtonList />
      {videos.length>0  &&
        videos.map((video) => (
       
          <Link key={video.id.videoId} to={"watch?v=" + (video.id?.videoId)}>
            <VideoCard key={video.id.videoId} info={video} />
          </Link>
        ))}
      {videos.length===0 &&
        Array(50)
          .fill(null)
          .map((item,index) => <Shimmer key={index} />)}
    </div>
  );
};

export default VideoContainer;
