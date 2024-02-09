import "./App.css";
import Random from "./components/Random";
import { withDataFetch } from "./HOC/withDataFetch";
import { fetchCatsImages } from "./utils";

function App({ data }) {
  return (
    <>
      <Random role="randomData" />

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

/* Created a higher order function (i.e. withDataFetch,in this case) to extract fetch logic which is repeating several times */
export default withDataFetch(App, fetchCatsImages);
