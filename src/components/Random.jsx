import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomCatDetails } from "../utils";
import { withDataFetch } from "../HOC/withDataFetch";

const Random = ({ data }) => {
  const [randomData, setRandomData] = useState({});

  useEffect(() => {
    if (data.id) {
      axios
        .get(`https://api.thecatapi.com/v1/images/${data.id}`)
        .then((response) => setRandomData(response.data))
        .catch((error) => console.log(error));
    }
    /*-->🎌 we can use modern approach async await or .then .catch to handle promises. I have used both to domonstrate it. */
  }, [data]);

  return (
    <div
      // -->🎌 we can use inline styline to style jsx element . It offers dynamic styling.
      style={{
        width: "90%",
        display: "flex",
        border: "1px solid silver",
        margin: "1.5rem auto",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          width: "23rem",
          aspectRatio: 1,
        }}
        src={randomData.url}
        alt={randomData.id}
      />
    </div>
  );
};

/*-->🎌 Created a higher order function (i.e. withDataFetch,in this case) to extract fetch logic which is repeating several times */
export default withDataFetch(Random, getRandomCatDetails);
