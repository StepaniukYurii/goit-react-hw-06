import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchContainer}>
    <label className={styles.label} htmlFor="search">
      Find contact by name
    </label>
    <input
      className={styles.SearchBox}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default SearchBox;
