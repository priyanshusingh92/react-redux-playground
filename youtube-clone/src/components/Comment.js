import React from "react";

const Comment = ({name,comment}) => {
  return (
    <div className="mt-3 flex flex-col bg-slate-200 rounded-lg w-[fit-content] pb-3 pr-5 max-w-[135vh]">
      <div className="flex basis-10">
        <img
          className="pr-4 h-8 py-1 px-4"
          alt={"profile"}
          src={
            "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
          }
        />
        <p className="font-bold pt-1">{name}</p>
      </div>
      <div className="pl-[3.25rem]"> {comment}</div>
    </div>
  );
};

export default Comment;
