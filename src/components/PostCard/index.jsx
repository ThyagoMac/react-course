import PropTypes from "prop-types";
import React from 'react';
import "./styles.css";

export const PostCard = ({ post }) => {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h2>({post.id}) {post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}
