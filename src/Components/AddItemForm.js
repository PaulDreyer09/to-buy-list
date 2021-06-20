import { useState } from "react";

const AddItemForm = ({listIndex, handleTBLSubmitItemButton}) => {
    const [formName, setFormName] = useState('');
    const [formQuantity, setFormQuantity] = useState('1');
    const [formImportant, setFormImportant] = useState(false);

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
                important: formImportant
            };
    
            handleTBLSubmitItemButton(listIndex, item);
        }
    return(    
        <div className='AddItemForm'>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label >Item Name</label>
                    <input type='text' onChange={handleChangeName} value={formName} placeholder='Enter item name'/>
                </div>
                <div className='form-control'>
                    <label>Quantity</label>
                    <input type='number' onChange={handleChangeQuantity} value={formQuantity}/>
                </div>
                <div className='form-control'>
                    <label>Important</label>
                    <input 
                        type='checkbox' 
                        checked={formImportant}
                        value={formImportant}
                        onChange={handleChangeImportant}
                    />
                </div>
                
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );

}

export default AddItemForm;