import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      console.log(result);
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e} Some error occured`);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
