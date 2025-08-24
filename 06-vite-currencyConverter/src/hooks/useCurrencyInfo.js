import { useEffect, useState } from "react";

export const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => {
        console.error("Failed to fetch currency data", err);
        setData({});
      });
  }, [currency]);

  return data;
};
