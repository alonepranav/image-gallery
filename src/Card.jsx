import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Card = ({ largeImageURL, user, views, downloads, likes, id, tags }) => {
  return (
    <div className="card">
      <div className="img">
        <Link to={`/image/${id}`}>
          <img src={largeImageURL} alt={tags} />
        </Link>
      </div>

      <div className="text">
        <p>{user}</p>
        <h3>Views : {views}</h3>
        <h3>Dowloads : {downloads}</h3>
        <h3>Likes : {likes}</h3>

        <Link to={`/image/${id}`}>
          <button>View Image</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
