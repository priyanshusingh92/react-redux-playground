import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import ButtonList from "./ButtonList";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((state) => state.videos.videos).map((video) => {
    if (typeof(video.id) !== "string") {
      video.id1 = video.id.videoId;
    } else{
      video.id1 = video.id;
    }
    return video ;
  });

  return (
    <div className="flex flex-wrap">
      <ButtonList />
      {videos &&
        videos.length > 0 &&
        videos.map((video) => (
          <Link key={Math.random()} to={"watch?v=" + video.id1}>
            <VideoCard key={Math.random()} info={video} />
          </Link>
        ))}
      {(!videos || videos?.length === 0) &&
        Array(50)
          .fill(null)
          .map((item, index) => <Shimmer key={index} />)}
    </div>
  );
};

export default VideoContainer;
