import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, changeServiceField, updateService, resetServiceField, loadServiceData} from '../../actions/actionCreators';

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = event => { 
        const {name, value} = event.target; 
        dispatch(changeServiceField(name, value));
    }

    const handleSubmit = React.useCallback(event => { 
        event.preventDefault(); 
        if (item.isEditing) {
            dispatch(updateService(item.id, item.name, item.price));
        } else {
            dispatch(addService(item.name, item.price));
        }
        dispatch(resetServiceField());
    }, [item, dispatch]);

    const handleCancel = () => {
        dispatch(loadServiceData({
            id: '',
            name: '',
            price: '',
            isEditing: true,
        }))
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-inline">
            <div className="form-group mb-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={handleChange} value={item.name} />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="price" className="sr-only">Price</label>
                <input type="text" className="form-control" id="price" name="price" placeholder="Price" onChange={handleChange} value={item.price} />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Save</button>
            {item.isEditing && <button type="button" onClick={handleCancel} className="btn btn-secondary mb-2 ml-2">Cancel</button>}
        </form>
    )
}
export default ServiceAdd;