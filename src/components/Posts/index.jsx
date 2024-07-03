import PropTypes from "prop-types";
import React from 'react';
import { PostCard } from "../PostCard"
import "./styles.css";

export const Posts = ({ posts = [] }) => {
  return(
    <div className="posts">
      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}

Posts.defaultProps = {
  posts: [],
}

Posts.propTypes = {
  posts: PropTypes.array,
}
