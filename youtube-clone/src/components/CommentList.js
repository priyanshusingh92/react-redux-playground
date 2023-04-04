import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <div key={Math.random()}>
          <Comment key={Math.random()} {...comment} />
          <div  key={Math.random()}  className="ml-4 border-black border-solid border-l-[1px]">
            <CommentList  key={Math.random()} comments={comment?.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
