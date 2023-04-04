import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
    console.log(props)
  return (
    <div>
      {props.comments.map((comment, index) => (
        <div key={index}>
          <Comment key={index} {...comment} />
          <div  key={index}  className="ml-4 border-black border-solid border-l-[1px]">
            <CommentList  key={index} comments={comment?.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
