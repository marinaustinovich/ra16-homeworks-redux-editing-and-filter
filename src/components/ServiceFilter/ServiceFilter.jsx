import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilter } from '../../actions/actionCreators';

function ServiceFilter() {
    const dispatch = useDispatch();
    const { filter } = useSelector(state => state.serviceFilter);

    const handleChange = e => {
        dispatch(setFilter(e.target.value));
    }

    const handleReset = () => {
        dispatch(resetFilter());
    }

    return (
        <div className="service-filter form-group">
            <input type="text" value={filter} onChange={handleChange} placeholder="Filter" className="form-control" />
            <button onClick={handleReset} className="btn btn-primary mt-2">Reset filter</button>
        </div>
    );
}

export default ServiceFilter;