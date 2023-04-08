import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import { COMMENT_DATA } from "../utils/constants";
import LiveComment from "./LiveComment";
import { setComments } from "../utils/chatSlice";
import { generateRandomText, getRandomName } from "./Helper";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const messages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("")

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      const name = getRandomName();
      dispatch(
        setComments({
          name,
          comment: generateRandomText(20),
        })
      );
    }, 800);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const sendBtnHandler=(e)=>{
    e.preventDefault();
    dispatch(setComments({name:"Priyanshu", comment:msg}))
    setMsg("")
  }

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
      <div className="rounded-lg mr-5 flex-row w-full h-[400px] border-solid border-black border-2">
        <div className="rounded-lg w-full mb-2 pl-2 h-[30px] relative bg-slate-300 shadow-lg"> Live Chat</div>
        <div className="h-[350px] overflow-y-scroll">
          {messages.map((message, i) => (
            <LiveComment
              key={i}
              name={message.name}
              comment={message.comment}
            />
          ))}
        </div>
        <form className="flex w-full" onSubmit={(e)=>sendBtnHandler(e)}>
          <input value={msg} onChange={(e) => setMsg(e.target.value)} className="rounded-l-lg w-full p-1 border-solid border-black border-2" type="text"/>
          <button type="button" onClick={(e)=>sendBtnHandler(e)} className="border-solid border-black border-2 bg-green-100 p-2 rounded-r-lg">Send</button>
        </form>
      </div>
    </div>
  );
};

export default WatchPage;
