import { useEffect, useState } from "react";

const OMDB_KEY = "cb8c40a2";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(
    function () {
      //   callback?.();

      const controller = new AbortController();
      async function fetchMovieData() {
        try {
          setIsLoading(true);
          setErrMsg("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies data");
          }

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie Not Found");
          }

          setMovies(data.Search);
          setErrMsg("");
        } catch (error) {
          if (error.name !== "AbortError") {
            setErrMsg(error.message);
          }
        } finally {
          setIsLoading(false);
          setErrMsg("");
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setErrMsg("");
        return;
      }

      //   handleCloseMovie();
      fetchMovieData();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, errMsg };
}
