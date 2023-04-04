import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import { COMMENT_DATA } from "../utils/constants";

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
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="Jeremy Renner BREAKS DOWN During First Interview Since Snow Plow Accident"
        frameBorder="0"
        autoPlay
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold py-3">Comments :-</h1>
      <div className="mt-5">
        <CommentList comments={COMMENT_DATA} />
      </div>
    </div>
  );
};

export default WatchPage;
