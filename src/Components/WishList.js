import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listActionCreators } from '../state';
import ListItem from './ListItem';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';

const WishList = (props) => {
    const state = useSelector(state => state.items); 

    const [displayAddForm, setDisplayAddForm] = useState(false);    
    const [displayListItems, setDisplayListItems] = useState(true);
    const [displayEditItemForm, setDisplayEditItemForm] = useState(false);
    const [editItemId, setEditItemId] = useState(undefined);

    const dispatch = useDispatch();
    const {deleteList} = bindActionCreators(listActionCreators, dispatch);

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
        if(displayEditItemForm){
            setDisplayEditItemForm(false);
        }else{
            setDisplayAddForm(!displayAddForm);
        }

        
    }

    const handleDropDownButton = () => {
        setDisplayListItems(!displayListItems);
    }

    const handleEditListButton = () => {
        
    }

    const handleDeleteListButton = () => {
        if(listItems.length === 0){
            console.log('DELETE LIST BUTTON PRESSED ON LIST', props.list.id);
            deleteList(props.list);
        }
        else{
            alert('Delete all items from list before deleting.');
        }
        
    }

    //Set state for item to be edited and toggle display for the form to edit item
    const handleEditItemButton = (id) => {
        setDisplayAddForm(false);
        setDisplayEditItemForm(!displayEditItemForm);
        setEditItemId(id);
    }

    const handleSubmitEditItem = (item) => {        
        setDisplayEditItemForm(false);
    }

    //Generate EditItemForm for the item selected
    const getEditItemForm = () => {
        const itemIndex = listItems.findIndex((obj) => obj.id == editItemId);
        const item = listItems[itemIndex];
        console.log('EDIT ITEM',item)
        
        return <EditItemForm 
            listId={props.list.id}
            itemId={item.id}
            formData={{                   
                name: item.name, 
                quantity: item.quantity, 
                important: item.important
            }}
            handleSubmitEditItem={handleSubmitEditItem}
        />
    }


    return(
        <div className='WishList ToBuyList shadow-box container'>
            <div className='listHeader row'>
                <h4 className='col-11'>{props.list.name}</h4>
                <a className='button' onClick={handleDropDownButton}><i className={`fa ${displayListItems ? 'fa-angle-down' : 'fa-angle-up'} col-1 button dropDownButton`}></i></a>
                <div className='listOptions'>
                    <a onClick={handleAddItemButton}><i className='fa fa-plus button listOption'> {displayAddForm | displayEditItemForm ? 'Close' : 'Add Item'}</i></a>|
                    <a onClick={handleEditListButton}> <i className='fa fa-edit button listOption'> Edit list</i></a>|
                    <a onClick={handleDeleteListButton}> <i className='fa fa-edit button listOption'> Delete list</i></a>

                </div>
            </div>
            <div className='form-container'>
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
                    
                />:displayEditItemForm?
                getEditItemForm(): ''                                  
               
            }
            </div>
            
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
