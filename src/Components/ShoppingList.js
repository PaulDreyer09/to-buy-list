import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemActionCreators, listActionCreators } from '../state';
import { bindActionCreators } from 'redux';

import ListItem from './ListItem';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import EditListForm from './EditListForm';
import SelectList from './SelectList';
import SelectItemList from './SelectItemList';

const ShoppingList = (props) => {    
    const listItems = useSelector(state => state.items.items.filter((item => item.listId == props.list.id))); 
    const wishLists = useSelector(state => state.lists.wishLists);
    const didSelectList = useSelector(state => state.lists.didSelectList);
    const selectedList = useSelector(state => state.lists.selectedList);
    const selectedListItems = useSelector(state => (selectedList == undefined) ? [] : state.items.items.filter(item => {return item.listId == selectedList.id} ))
    console.log(selectedListItems);

    const [displayAddNewItemForm, setDisplayAddNewItemForm] = useState(false);
    const [displayAddItemFromListForm, setDisplayAddItemFromListForm] = useState(false);

    const [displayAddItemForm, setDisplayAddItemForm] = useState(false);    
    const [displayListItems, setDisplayListItems] = useState(true);

    const [displayEditItemForm, setDisplayEditItemForm] = useState(false);
    const [displayEditListForm, setDisplayEditListForm] = useState(false);    
    const [editItemId, setEditItemId] = useState(undefined);

    //const [didSelectList, setDidSelectList] = useState(false);

    const dispatch = useDispatch();
    const {deleteList, removeSelectedList} = bindActionCreators(listActionCreators, dispatch);
    const {removeItemListData} = bindActionCreators(itemActionCreators, dispatch)

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
            setDisplayAddItemForm(!displayAddItemForm);
        }        
        if(displayAddItemFromListForm) setDisplayAddItemFromListForm(false)
        removeSelectedList();
        removeItemListData();  
    }

    const handleDropDownButton = () => {
        setDisplayListItems(!displayListItems);
    }

    const handleEditListButton = () => {
        setDisplayEditListForm(true);
    }

    const handleDeleteListButton = () => {
        if(listItems.length === 0){
            //console.log('DELETE LIST BUTTON PRESSED ON LIST', props.list.id);
            deleteList(props.list);
        }
        else{
            alert('Delete all items from list before deleting.');
        }
        
    }

    //Set state for item to be edited and toggle display for the form to edit item
    const handleEditItemButton = (id) => {
        setDisplayAddItemForm(false);
        setDisplayEditItemForm(!displayEditItemForm);
        setEditItemId(id);
    }

    const handleSubmitEditItem = (item) => {        
        setDisplayEditItemForm(false);
    }

    const handleCloseListEditForm = () => {
        setDisplayEditListForm(false);
    }

    const handleNewItem = () => {
        setDisplayAddNewItemForm(true);
        setDisplayAddItemFromListForm(false);
        removeSelectedList();
        removeItemListData();

        console.log(didSelectList)
    }

    const handleAddItemFromList = () => {        
        setDisplayAddItemFromListForm(true);
        setDisplayAddNewItemForm(false);
      
    }

    //Generate EditItemForm for the item selected
    const getEditItemForm = () => {
        const itemIndex = listItems.findIndex((obj) => obj.id == editItemId);
        const item = listItems[itemIndex];
        
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
        <div className='WishList shadow-box container'>
            <div className='listHeader row'>      
                <h4 className='col-11'>{props.list.name}</h4>
                <a className='button' onClick={handleDropDownButton}><i className={`fa ${displayListItems ? 'fa-angle-down' : 'fa-angle-up'} col-1 button dropDownButton`}></i></a>
                <div className='listOptions'>
                    <a onClick={handleAddItemButton}><i className='fa fa-plus button listOption'> {displayAddItemForm | displayEditItemForm ? 'Close' : 'Add Item'}</i></a>|
                    <a onClick={handleEditListButton}> <i className='fa fa-edit button listOption'> Edit list</i></a>|
                    <a onClick={handleDeleteListButton}> <i className='fa fa-edit button listOption'> Delete list</i></a>

                </div>
            </div>
            <div className='form-container'>
            
            {//Display form to edit List name
                displayEditListForm? 
                <EditListForm 
                    list={props.list} 
                    handleCloseListEditForm={handleCloseListEditForm}
                /> : ''
            }  
            {
                //Display a form to add a new item only after Add Item is clicked
                //Also close all other forms                
                displayAddItemForm?
                <div>
                    <button onClick={handleAddItemFromList}>From WishList</button>
                    <button onClick={handleNewItem}>New Item</button>
                    {displayAddNewItemForm ?
                        <AddItemForm 
                            listId={props.list.id}
                            formData={
                            {name : '', 
                            quantity : 1, 
                            important : false}}                    
                        /> 
                        : displayAddItemFromListForm? <SelectList/> 
                        : ''
                    }
                    { didSelectList ? <SelectItemList 
                        wishListId = {selectedList.id} 
                        shoppingListId = {props.list.id}
                        listItems = {selectedListItems} 
                        checkItems = {selectedListItems.map(item => {return {name: item.name, checked: false}})}/>  
                        : ''
                    }
                </div>
                :displayEditItemForm?
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
export default ShoppingList
