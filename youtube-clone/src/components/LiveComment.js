import React from "react";

const LiveComment = ({ name, comment }) => {
  return (
    <div className="flex flex-col-[fit-content] pb-1 pr-5">
      <div className="flex">
        <img
          className="pr-4 h-8 py-1 px-4"
          alt={"profile"}
          src={
            "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
          }
        />
        <p className="pt-1 flex w-full">
          <div className="font-bold pr-2">{name}</div>
          <div>{comment}</div>
        </p>
      </div>
    </div>
  );
};

export default LiveComment;
