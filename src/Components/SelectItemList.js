import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { itemActionCreators } from '../state';



const SelectItemList = ({shoppingListId, listItems, resetForm, resetFormData}) => {
    const dispatch = useDispatch();

    const selectedItems = useSelector(state => state.items.selectItemsList)
    const {updateItem, checkItem, } = bindActionCreators(itemActionCreators, dispatch);

    console.log(selectedItems);


    const handleCheckItem = (index) => {
        
        const item = selectedItems[index];
        console.log('checked item ' + item.checked)
        checkItem(item.data.id)
    }

    const onChange = (event) => {        
        let index = event.target.value;
        
        handleCheckItem(index)
    }

    const updateItems = (items) => {
        console.log(items);
        items.forEach(item => {
            item.listId = shoppingListId;
            updateItem(item);
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const updateItemsList = selectedItems.filter((item, index) => {
            const result = item.checked;
            return result;
        }).map(item => item.data);
        console.log(updateItemsList);
        updateItems(updateItemsList);
        resetFormData();
        resetForm();
    }

    return (
        <div className='SelectItemList'>
            <form onSubmit={onSubmit}>
                <ul>
                    {listItems.map((item, index) => 
                    {
                        return <li key={index}>
                            <label><input   
                            index={index} 
                            type="checkbox" 
                            value={index} 
                            checked={
                                selectedItems[index].checked} 
                            onChange={onChange}/>{item.name}</label>
                        
                        </li>
                    })}
                </ul>
                <button className='col-2 btn btn-dark col-md-offset-2' type='submit'>Submit</button>
            </form>

            
        </div>
    )
}

export default SelectItemList;