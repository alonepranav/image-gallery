import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const get_Link = (query = "") => {
  return `https://pixabay.com/api/?key=36084451-16dce68c59df28941565a6f2c&q=${query}&image_type=photo`;
};

function Home({ photos, setPhotos }) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (query = "") => {
    const res = await fetch(get_Link(query));
    const datA = await res.json();
    if (datA) setLoading(false);
    setPhotos(datA.hits);
  }, [setPhotos]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image.trim() !== "") fetchData(image.trim());
  };

  const Loading = () => {
    return <h1>Loading Images ... 🔃</h1>;
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Image Gallery using React</h1>
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
              return <Card key={ind} {...item} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
