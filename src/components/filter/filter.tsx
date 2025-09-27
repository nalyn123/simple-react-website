import "./filter.scss";
import { DatePicker, Dropdown, Input } from "@components/index";

const data = [
  {
    key: 0,
    value: "test",
  },
  {
    key: 1,
    value: "test2",
  },
];

const Filter = () => {
  return (
    <div className="products__filter">
      <div className="products__filter__filter">
        <div className="row">
          <div className="col col-12 col-sm-3 col-md-6">
            <div className="products__filter__search">
              <Input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="col col-12 col-sm-3 col-md-2">
            <Dropdown data={data} placeholder="Sort By" onChange={() => {}} />
          </div>

          <div className="col col-12 col-sm-3 col-md-2">
            <DatePicker onChange={() => {}} />
          </div>

          <div className="col col-12 col-sm-3 col-md-2">
            <button className="products__filter__submit">Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
