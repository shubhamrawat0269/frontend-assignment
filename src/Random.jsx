import axios from "axios";
import { useEffect, useState } from "react";

const Random = () => {
  const [randomDataId, setRandomDataId] = useState("");
  const [randomData, setRandomData] = useState({});
  const getRandomCatDetails = async () => {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?has_breeds=1`
    );

    setRandomDataId(response.data[0].id);
  };
  useEffect(() => {
    getRandomCatDetails();
  }, []);

  useEffect(() => {
    if (randomDataId) {
      axios
        .get(`https://api.thecatapi.com/v1/images/${randomDataId}`)
        .then((response) => {
          console.log(response);
          setRandomData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [randomDataId]);

  return (
    <div
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

export default Random;
