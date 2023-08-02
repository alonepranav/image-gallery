import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const get_Link = (query = "") => {
  return `https://pixabay.com/api/?key=36084451-16dce68c59df28941565a6f2c&q=${query}&image_type=photo`;
};

function Home({ photos, setPhotos }) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (query = "") => {
    try {
      const res = await fetch(get_Link(query));
      const datA = await res.json();
      if (datA) setLoading(false);

      setPhotos(datA.hits);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image.trim() !== "") fetchData(image.trim());
  };

  const Loading = () => {
    return <h1>Loading Images ... 🔃</h1>;
  };

  return (
    <div className="App">
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <h1>Image Gallery</h1>
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <button type="submit">Search Image</button>
            </form>
          </div>
          <div className="gallery">
            {photos.map((item, ind) => {
              return <Card key={ind} {...{ ...item }} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
