import React from "react";
import "./Post.css";
import Like from "../../img/like.png";
import notLike from "../../img/notlike.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />

      <div className="postReactions">
        <img src={data.liked ? Like : notLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} Likes
      </span>

      <div className="details">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
