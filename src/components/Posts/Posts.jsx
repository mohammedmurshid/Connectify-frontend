import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { getTimelinePosts } from "../../actions/PostAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData); // getting the user data from authReducer
  const { posts, loading } = useSelector((state) => state.postReducer); // getting the post data and loading from postReducer

  // to fetch posts at the start of our application, we use useEffect
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
