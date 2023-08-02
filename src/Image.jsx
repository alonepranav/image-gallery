import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Image({ photos }) {

  const { id } = useParams();

  const data = photos.find((photo) => {
    return photo.id === +id;
  });

  return (
    <div className="image">
      {!data ? (
        <h1>Image No Found 👻</h1>
      ) : (
        <section>
          <div className="img">
            <img src={data.largeImageURL} alt="" />
          </div>
          <div className="text">
            <p>{data.user}</p>
            <h3>Views : {data.views}</h3>
            <h3>Downloads : {data.downloads}</h3>
            <h3>Likes : {data.likes}</h3>

            <Link to={"/"}>
              <button>Gallery</button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
