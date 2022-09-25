import { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = (url) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: false,
  });
  const { data, loading, error } = state;
  useEffect(() => {
    async function fetchData() {
      setState((o) => ({ ...o, loading: true }));
      try {
        const res = await axios.get(url);
        setState((o) => ({ ...o, data: res.data }));
      } catch (err) {
        setState((o) => ({ ...o, error: err }));
      }
      setState((o) => ({ ...o, loading: false }));
    }
    fetchData();
  }, [url]);
  const reFetch = async () => {
    setState((o) => ({ ...o, loading: true }));
    try {
      const res = await axios.get(url);
      setState((o) => ({ ...o, data: res.data }));
    } catch (err) {
      setState((o) => ({ ...o, error: err }));
    }
    setState((o) => ({ ...o, loading: false }));
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
