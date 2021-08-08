import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { itemActionCreators } from '../state';
import { useDispatch } from 'react-redux';

const SelectItemList = ({shoppingListId, listItems, checkItems}) => {
    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const selectedItems = useSelector(state => state.items.selectItemsList)
    const {updateItem, checkItem} = bindActionCreators(itemActionCreators, dispatch);

    console.log(selectedItems);


    const handleCheckItem = (index) => {
        
        const item = selectedItems[index];
        console.log('checked item ' + item.checked)
        checkItem(item.data.id)
        // newCheckedItems[index] = {id: item.id, name: item.name, checked: !item.checked}
        // setCheckedItems(newCheckedItems);
    }

    const onChange = (event) => {        
        let index = event.target.value;
        let selectedItem = listItems[index].id;
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
            const result = item.id === selectedItems[index].data.id && selectedItems[index].checked;
            return result;
        })
        updateItems(updateItemsList);
    }

    return (
        <div className='SelectItemList'>
            <form onSubmit={onSubmit}>
                <ul>
                    {listItems.map((item, index) => 
                    {
                        return <li key={index}>
                            <input   
                            index={index} 
                            type="checkbox" 
                            value={index} 
                            checked={
                                selectedItems[index].checked} 
                            onChange={onChange}/>
                        {item.name}
                        </li>
                    })}
                </ul>
                <button className='col-2 btn btn-dark col-md-offset-2' type='submit'>Submit</button>
            </form>

            
        </div>
    )
}

export default SelectItemList;