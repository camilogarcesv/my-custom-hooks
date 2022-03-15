const useFetch = (input, { auto, ...init }) => {
  const [result, setResult] = useState([null, null, true]);

  const fetcher = useCallback(
    (query, config) =>
      fetch(query, config)
        .then((res) => res.json())
        .then((data) => setUsers([null, data, false]))
        .catch((err) => setResult([err, null, false])),
    [input, init]
  );

  useEffect(() => {
    if (auto) fetcher(input, init);
  }, []); // if you want to fetch data only once, do this.

  return [...result, fetcher];
  //fetcher(refetch) function or can be used for post api call
};
