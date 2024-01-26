import { useSelector, useDispatch } from "react-redux";
import {
  loadServiceData,
  removeService,
  resetServiceField,
} from "../../store/actions";
import { RootState } from "../../store/index.js";
import { ServiceFormState } from "../../reducers";
import { useCallback } from "react";

export const ServiceList = () => {
  const items = useSelector((state: RootState) => state.serviceList);
  const { filter } = useSelector((state: RootState) => state.serviceFilter);
  const filteredServices: ServiceFormState[] = items.filter(
    (service: ServiceFormState) =>
      service.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    (id: string) => {
      if (window.confirm("Вы действительно хотите удалить эту услугу?")) {
        dispatch(removeService(id));
        dispatch(resetServiceField());
      }
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (o: ServiceFormState) => {
      dispatch(loadServiceData(o));
    },
    [dispatch]
  );

  return (
    <ul className="list-group">
      {filteredServices.map((o) => (
        <li
          key={o.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            {o.name} {o.price}
          </div>
          <div>
            <button className="btn btn-change" onClick={() => handleChange(o)}>
              ✎
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(o.id)}
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
