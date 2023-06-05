import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadServiceData, removeService, resetServiceField } from '../../actions/actionCreators';

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const { filter } = useSelector(state => state.serviceFilter);
    const filteredServices = items.filter(service => service.name.toLowerCase().includes(filter.toLowerCase()));
    const dispatch = useDispatch();

    const handleRemove = (id) => { 
        if (window.confirm('Вы действительно хотите удалить эту услугу?')) {
            dispatch(removeService(id));
            dispatch(resetServiceField());
        }
    };

    const handleChange = (o) => {
        dispatch(loadServiceData(o));
    }; 

    return (
        <ul className="list-group">
            {filteredServices.map(o => (
                <li key={o.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        {o.name} {o.price}
                    </div>
                    <div>
                        <button className="btn btn-change" onClick={() => handleChange(o)}>✎</button>  
                        <button className="btn btn-danger" onClick={() => handleRemove(o.id)}>✕</button>
                    </div>
                    
                </li>
            ))}
        </ul>
    )
}