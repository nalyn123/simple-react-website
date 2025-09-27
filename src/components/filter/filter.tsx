import { useFilter } from "./filter-model";
import "./filter.scss";
import { DatePicker, Dropdown, Input } from "@components/index";

const Filter = () => {
  const { searchInput, sortData, onSortBy, onDateChange } = useFilter();
  return (
    <div className="products__filter">
      <div className="products__filter__filter">
        <div className="row">
          <div className="col col-12 col-sm-3 col-md-6">
            <div className="products__filter__search">
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
