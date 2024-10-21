import React from "react";
import "./posts.css";
const Posts = ({ title, description, imageUrl, handleDelete, id }) => {
  return (
    <div className="post-outer-container">
      <div className="post-image-container">
        <img src={imageUrl} />
      </div>
      <div className="post-content-container">
        <div className="post-content-title-container">{title}</div>
        <div className="post-content-date-container">{description}</div>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default Posts;
