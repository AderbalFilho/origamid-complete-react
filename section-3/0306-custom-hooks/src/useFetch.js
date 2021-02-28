import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (err) {
      json = null;

      setError(err);
    } finally {
      setData(json);
      setLoading(false);

      return { response, json };
    }
  }, []);

  return { data, error, loading, request };
};

export default useFetch;
