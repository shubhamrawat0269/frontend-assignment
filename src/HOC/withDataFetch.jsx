import { useEffect, useState } from "react";

export const withDataFetch = (OriginalComponent, fetchData) => {
  return function (props) {
    const [data, setData] = useState([]);

    const fetchWrapperData = async () => {
      try {
        const res = await fetchData();
        setData(res);
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    useEffect(() => {
      fetchWrapperData();
    }, []);

    return <OriginalComponent {...props} data={data} />;
  };
};
