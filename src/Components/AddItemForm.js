import { useState } from "react";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { itemActionCreators } from '../state/index';

const AddItemForm = ({listId, formData}) => {

    const dispatch = useDispatch();
    const {postItem} = bindActionCreators(itemActionCreators, dispatch);

    const [formName, setFormName] = useState(formData.name);
    const [formQuantity, setFormQuantity] = useState(formData.quantity);
    const [formImportant, setFormImportant] = useState(formData.important);

    const handleChangeName = (e) => {
        setFormName(e.target.value);
    }

    //Changing form quantity
    const handleChangeQuantity = (e) => {
        //prevent non valid or negative numbers
        const quantity = (e.target.validity.valid) ? 
            (e.target.value < 0 ? 0 : e.target.value) : formQuantity;

        setFormQuantity(quantity);
    }

    const handleChangeImportant = (e) => {
        setFormImportant(e.currentTarget.checked)
    }

    //Create new item and add to current buy list
    const onSubmit = (event) =>{
        event.preventDefault();

        const item = {            
            name: formName, 
            quantity: formQuantity, 
            important: formImportant,
            listId: listId,
        };

        postItem(item);

        setFormName('');
        setFormQuantity('1');
        setFormImportant(false);
    }

    //Close
    
    return(    
        <div className='AddItemForm well'>
            <form onSubmit={onSubmit}>
                <div className='row'>
                    <label className='col-2'>Item Name</label>
                    <input className='col-10' type='text' onChange={handleChangeName} value={formName} placeholder='Enter item name'/>
                </div>
                <div className='row'>
                    <label className='col-2'>Quantity</label>
                    <input className='col-10' type='number' onChange={handleChangeQuantity} value={formQuantity}/>
                </div>
                <div className='row'>
                    <div className='col-2'>
                    <label>Important</label>
                    <input 
                        className='submitItemButton' 
                        type='checkbox' 
                        checked={formImportant}
                        value={formImportant}
                        onChange={handleChangeImportant}
                    />
                    </div>
                    
                </div>
                
                <input type='submit' value='Submit'/>
            </form>
            <hr/>
        </div>
    );

}

export default AddItemForm;