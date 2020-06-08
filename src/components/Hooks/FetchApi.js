import { useState, useEffect } from "react";

import { POPULAR_BASE_URL } from "../../config";

export const FetchApi = (searchTerm) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endPoint) => {
    setError(false);
    setLoading(true);
    const isLoadMore = endPoint.search("page");
    try {
      const result = await (await fetch(endPoint)).json();
      //console.log(result);
      setState((prevState) => ({
        ...prevState,
        movies:
          isLoadMore !== -1
            ? [...prevState.movies, ...result.results]
            : [...result.results],

        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };
  //fetch movies initially on mount
  useEffect(() => {
    if (sessionStorage.homeState) {
      // console.log("Grabbing from session storage");
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      console.log("Grabbing from API");
      fetchMovies(POPULAR_BASE_URL);
    }
  }, []);
  //saving data to session
  useEffect(() => {
    if (!searchTerm) {
      //console.log("writting to session storage");
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return [{ state, loading, error }, fetchMovies];
};
