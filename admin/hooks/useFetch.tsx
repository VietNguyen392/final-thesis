import { useEffect, useState } from 'react';
import { instance } from 'utils/_axios';
//* use to get instance data form server when no need filter function in component
const useFetch = (url: string) => {
  const [state, setState] = useState({
    datum: [],
    loading: false,
    error: false,
  });
  const { datum, loading, error } = state;
  useEffect(() => {
    async function fetchData() {
      setState((o) => ({ ...o, loading: true }));
      try {
        const res = await instance.get(url);
        setState((o) => ({ ...o, datum: res.data }));
      } catch (err: any) {
        setState((o) => ({ ...o, error: err }));
      }
      setState((o) => ({ ...o, loading: false }));
    }
    fetchData();
  }, [url]);
  const reFetch = async () => {
    setState((o) => ({ ...o, loading: true }));
    try {
      const res = await instance.get(url);
      setState((o) => ({ ...o, datum: res.data }));
    } catch (err: any) {
      setState((o) => ({ ...o, error: err }));
    }
    setState((o) => ({ ...o, loading: false }));
  };
  return { datum, loading, error, reFetch };
};

export default useFetch;
