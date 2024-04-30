import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { citiesData } from "./citiesData";

// const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : citiesData,
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const getCity = useCallback(
    async function getCity(cityId) {
      if (cityId === currentCity.id) return;

      dispatch({ type: "loading" });
      try {
        // const response = await fetch(`${BASE_URL}/cities/${cityId}`);
        // const data = await response.json();
        const data = citiesData.find((city) => city.id === cityId);
        localStorage.setItem("currentCity", JSON.stringify(data));
        dispatch({ type: "city/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city ... ",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      // const response = await fetch(`${BASE_URL}/cities`, {
      //   method: "POST",
      //   body: JSON.stringify(newCity),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const data = await response.json();
      const data = {
        ...newCity,
        id: (
          Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000
        ).toString(),
      };
      localStorage.setItem("currentCity", JSON.stringify(data));
      dispatch({
        type: "city/created",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city.",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      // await fetch(`${BASE_URL}/cities/${id}`, {
      //   method: "DELETE",
      // });
      localStorage.setItem("currentCity", {});
      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city.",
      });
    }
  }

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        // const response = await fetch(`${BASE_URL}/cities`);
        // const data = await response.json();
        const citiesFromStorage = localStorage.getItem("cities");
        if (citiesFromStorage) {
          dispatch({
            type: "cities/loaded",
            payload: JSON.parse(citiesFromStorage),
          });
        }
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities ... ",
        });
      }
    }

    fetchCities();
  }, []);

  useEffect(() => {
    // Update localStorage after state changes
    localStorage.setItem("cities", JSON.stringify(cities));

    // Dependency array: update only on cities state change
  }, [cities]);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
