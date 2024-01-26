import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index.ts";
import {
  ServiceFormState,
  ServiceType,
  loadServiceData,
  removeService,
  resetServiceField,
} from "../../store/slices/index.ts";
import { useCallback } from "react";

export const ServiceList = () => {
  const dispatch = useDispatch();
  const { serviceList } = useSelector((state: RootState) => state.serviceList);
  const filter = useSelector((state: RootState) => state.serviceFilter.filter);

  const filteredServices: ServiceType[] = serviceList.filter(
    (service: ServiceType) =>
      service.name.toLowerCase().includes(filter.toLowerCase())
  );

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
    (o: ServiceType) => {
      const preparedData: ServiceFormState = {
        ...o,
        price: o.price.toString(),
        isEditing: true,
      };
      dispatch(loadServiceData(preparedData));
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
