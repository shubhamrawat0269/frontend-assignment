import axios from "axios";

//🎌 fetching Cats Images using axios method get
export const fetchCatsImages = async () => {
  try {
    let res = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_VTcWRJw4VlzqxNqZyYhHqtvM88ZkZ5QfiefAVfxoTKVZngFGKQ8LZJqpSb4L6ojN`
    );
    // console.log(res.data);
    // setData(res.data);
    return res.data;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export const getRandomCatDetails = async () => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?has_breeds=1`
    );
    // console.log(response);
    return response.data[0];
    // setRandomDataId(response.data[0]);
  } catch (error) {
    console.log(error);
    return null;
  }
};
