import React from "react";
import { Buffer } from "buffer";
import { Comment, HeartRed } from "../assets/svg/Icons";
import "./css/ProfilePost.css";

const ProfilePost = ({ posts }) => {
  const renderPost = (post, idx) => {
    const { photo, comments, likes } = post;

    return (
      <div class="gallery-item" tabIndex="0" key={idx}>
        <img
          src={
            "data:" +
            post.photo.contentType +
            ";base64, " +
            Buffer.from(post.photo.data).toString("base64")
          }
          class="gallery-image"
          alt=""
        />
        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <span class="visually-hidden">Likes:</span>
              <HeartRed />
              {likes.length}
            </li>
            <li class="gallery-item-comments">
              <span class="visually-hidden">Comments:</span>
              <Comment />
              {comments.length}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div class="containerPost">
      <div class="gallery">
        {posts.map((post, idx) => renderPost(post, idx))}
      </div>
    </div>
  );
};

export default ProfilePost;
