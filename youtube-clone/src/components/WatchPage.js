import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  return (
    <div className="px-5">
      <iframe
        width="900"
        height="400"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="Jeremy Renner BREAKS DOWN During First Interview Since Snow Plow Accident"
        frameBorder="0"
        autoPlay
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
