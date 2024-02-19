import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce(
    (arr, city, index) =>
      !arr.map((el) => el.country).includes(city.country)
        ? [
            ...arr,
            {
              country: city.country,
              emoji: city.emoji,
              key: `${city.country}-${index}`,
            },
          ]
        : arr,
    []
  );

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
