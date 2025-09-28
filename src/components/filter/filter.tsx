import { Close, FilterIcon } from "@assets/images";
import { useFilter } from "./filter-model";
import styles from "./filter.module.scss";
import { DatePicker, Dropdown, Input } from "@components/index";

const Filter = () => {
  const {
    isOpen,
    searchInput,
    sortData,
    onSortBy,
    onDateChange,
    onFilterClick,
    onFilterClose,
  } = useFilter();
  return (
    <div className={styles["products__filter"]}>
      <button
        type="button"
        className={styles["products__filter__btn"]}
        onClick={onFilterClick}
      >
        <img src={FilterIcon} alt="filter" />
      </button>

      <div
        className={`${styles["products__filter__filter"]} ${
          isOpen ? styles["products__filter__filter--active"] : ""
        }`}
      >
        <button
          type="button"
          className={styles["close"]}
          onClick={onFilterClose}
        >
          <img src={Close} alt="close" />
        </button>

        <div className="row">
          <div className="col col-12 col-sm-3 col-md-6">
            <div className={styles["products__filter__search"]}>
              <Input {...searchInput} />
            </div>
          </div>

          <div className="col col-12 col-sm-3 col-md-2">
            <Dropdown
              data={sortData}
              placeholder="Sort By"
              onChange={({ key }) => onSortBy(key)}
            />
          </div>

          <div className="col col-12 col-sm-3 col-md-2">
            <DatePicker onChange={(e: any) => onDateChange(e)} />
          </div>

          {/* <div className="col col-12 col-sm-3 col-md-2">
            <button className="products__filter__submit">Filter</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
