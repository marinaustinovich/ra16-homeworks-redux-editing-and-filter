import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index.js";
import { resetFilter, setFilter } from "../../store/actions";

export const ServiceFilter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.serviceFilter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetFilter());
  };

  return (
    <div className="service-filter form-group">
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Filter"
        className="form-control"
      />
      <button onClick={handleReset} className="btn btn-primary mt-2">
        Reset filter
      </button>
    </div>
  );
};
