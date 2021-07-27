import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import ListItem from './ListItem';
import AddItemForm from './AddItemForm';

const WishList = (props) => {
    const state = useSelector(state => state.items); 

    const [displayAddForm, setDisplayAddForm] = useState(false);    
    const [displayListItems, setDisplayListItems] = useState(true);
    const [displayEditItemForm, setDisplayEditItemForm] = useState(false);
    const [editItemId, setEditItemId] = useState(undefined);

    console.log('state error', state.items);

    const listItems = state.items.filter((item => item.listId == props.list.id));

    const getList = () => {        
        return listItems.map((listItem, index) => (
            <ListItem 
                key={index} 
                item={listItem}
                listId={props.list.id} 
                itemIndex={index} 
                listItem={listItem}
                handleEditItemButton={handleEditItemButton}     
            />))
    }

    //toggle displayAddForm
    const handleAddItemButton = () => {
        setDisplayAddForm(!displayAddForm);
    }

    //toggle display form to edit an item
    const handleEditItemButton = (itemId) => {
        setDisplayEditItemForm()
        setEditItemId(itemId);
    }

    const handleDropDownButton = () => {
        setDisplayListItems(!displayListItems);
    }

    const handleEditListButton = () => {
        
    }

    const handleDeleteListButton = () => {
        //props.handleDeleteTBL(props.list.id);
    }

    const handleTBLSubmitItemButton = () => {

    }


    return(
        <div className='WishList ToBuyList shadow-box container'>
            <div className='listHeader row'>
                <h4 className='col-11'>{props.list.name}</h4>
                <a className='button' onClick={handleDropDownButton}><i className={`fa ${displayListItems ? 'fa-angle-down' : 'fa-angle-up'} col-1 button dropDownButton`}></i></a>
                <div className='listOptions'>
                    <a onClick={handleAddItemButton}><i className='fa fa-plus button listOption'> {displayAddForm ? 'Close' : 'Add Item'}</i></a>|
                    <a onClick={handleEditListButton}> <i className='fa fa-edit button listOption'> Edit list</i></a>|
                    <a onClick={handleDeleteListButton}> <i className='fa fa-edit button listOption'> Delete list</i></a>

                </div>
            </div>
            {
                    //Display a form to add a new item only after Add Item is clicked
                    //Also close all other forms
                    displayAddForm?
                    <AddItemForm 
                        listId={props.list.id}
                        formData={
                            {name : '', 
                            quantity : 1, 
                            important : false}}
                        
                    />:''                    
            }
            
            {//Show message if no items are in the list
                displayListItems ? (
                listItems.length > 0 ? 
                <div className='listContent'>
                    {getList()}
                </div>
                : 'No items to show') : ''
            }   
            
            
        </div>);
}
export default WishList
