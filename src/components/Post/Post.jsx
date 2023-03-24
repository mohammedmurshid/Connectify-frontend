import React, { useState } from "react";
import "./Post.css";
import Like from "../../img/like.png";
import notLike from "../../img/notlike.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import { useSelector } from "react-redux";
import { reactPost } from "../../api/PostRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    reactPost(data._id, user._id); // sending the info to the backend
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1); // unlikes the post if the post is liked and vice versa
  };

  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReactions">
        <img
          src={liked ? Like : notLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} Likes
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
