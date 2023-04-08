import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import { COMMENT_DATA, NAME_GENERATOR_URL } from "../utils/constants";
import LiveComment from "./LiveComment";
import { setComments } from "../utils/chatSlice";
import { generateRandomText, getRandomName } from "./Helper";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const messages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  const getName = async () => {
    const data = await fetch(NAME_GENERATOR_URL);
    const json = await data.json();
    return getRandomName(json.data);
  };

  useEffect(() => {
    const interval = setInterval(async() => {
      const name = await getName();
      dispatch(
        setComments({
          name,
          comment: generateRandomText(20),
        })
      );
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <div className="flex w-full">
      <div className="px-5 flex-row row-reverse">
        <iframe
          width="800"
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
      <div className="p-2 w-full h-[400px] border-solid border-black border-2 overflow-scroll">
       {messages.map((message,i)=> (<LiveComment key={i} name={message.name} comment={message.comment} />))} 
      </div>
    </div>
  );
};

export default WatchPage;
