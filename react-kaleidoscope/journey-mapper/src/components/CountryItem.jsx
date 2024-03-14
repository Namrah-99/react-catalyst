import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <img
          className={styles.flag}
          src={`https://flagcdn.com/256x192/${country.countryCode.toLowerCase()}.png`}
        />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
