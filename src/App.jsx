import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Random from "./Random";

function App() {
  const [data, setData] = useState([]);

  // fetching Cats Images using axios method get
  const fetchCatsImages = async () => {
    try {
      let res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_VTcWRJw4VlzqxNqZyYhHqtvM88ZkZ5QfiefAVfxoTKVZngFGKQ8LZJqpSb4L6ojN`
      );
      // console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log("Error", error);
      return null;
    }
  };

  useEffect(() => {
    fetchCatsImages();
  }, []);
  return (
    <>
      <Random />

      <h1 style={{ textAlign: "center" }}>Cats List with their Abilities</h1>
      <div className="main__div">
        {data.map((cat) => {
          const {
            wikipedia_url,
            country_codes,
            life_span,
            adaptability,
            cat_friendly,
            child_friendly,
            energy_level,
          } = cat.breeds[0];
          return (
            <div key={cat.id}>
              <a href={wikipedia_url} target="_blank" alt={cat.id}>
                <img src={cat.url} alt={cat.id} />
              </a>
              <div className="cat__info">
                <span>
                  Origin : <span className="number">{country_codes}</span>
                </span>
                <span>
                  Life : <span className="number">{life_span}</span>
                </span>
                <span>
                  Adaptibility : <span className="number">{adaptability}</span>
                </span>
              </div>
              <div className="cat__info">
                <span>
                  Friendly : <span className="number">{cat_friendly}</span>
                </span>
                <span>
                  Child : <span className="number">{child_friendly}</span>
                </span>
                <span>
                  Energy : <span className="number">{energy_level}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
