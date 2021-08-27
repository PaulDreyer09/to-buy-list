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
    const listItems = useSelector(state => state.items.items.filter((item => item.listId === props.list.id))); 
    const didSelectList = useSelector(state => state.lists.didSelectList);
    const selectedList = useSelector(state => state.lists.selectedList);
    const selectedListItems = useSelector(state => (selectedList === {}) ? [] : state.items.items.filter(item => {return item.listId === selectedList.id} ))

    const [displayAddNewItemForm, setDisplayAddNewItemForm] = useState(false);
    const [displayAddItemFromListForm, setDisplayAddItemFromListForm] = useState(false);

    const [displayAddItemForm, setDisplayAddItemForm] = useState(false);    
    const [displayListItems, setDisplayListItems] = useState(false);

    const [displayEditItemForm, setDisplayEditItemForm] = useState(false);
    const [displayEditListForm, setDisplayEditListForm] = useState(false);    
    const [editItemId, setEditItemId] = useState(undefined);

    const dispatch = useDispatch();
    const {deleteList, removeSelectedList} = bindActionCreators(listActionCreators, dispatch);
    const {deleteItem, removeItemListData} = bindActionCreators(itemActionCreators, dispatch)

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

    
    //Reset the data of the selectList and selectItemList
    const handleResetFormData = () => {
        removeSelectedList();
        removeItemListData();
    }

    //Turns off the display for both form types
    const handleResetForm = () => {
        setDisplayAddItemFromListForm(false);
        setDisplayAddNewItemForm(false);
    }


    //toggle displayAddForm
    const handleAddItemButton = () => {
        if(displayEditItemForm){
            setDisplayEditItemForm(false);
        }else{
            setDisplayAddItemForm(!displayAddItemForm);
        }        
        if(displayAddItemFromListForm) setDisplayAddItemFromListForm(false)
        handleResetFormData();
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
        handleResetFormData();

        console.log(didSelectList)
    }

    const handleAddItemFromList = () => {        
        setDisplayAddItemFromListForm(true);
        setDisplayAddNewItemForm(false);
      
    }

    const handleCompleteShopping = () => {
        if(window.confirm('Are you sure you are complete with this list and want to remove the items?')){
            console.log('Removing items from shopping list')
            listItems.forEach(item => {
                console.log('Delete item ', item.id);
                deleteItem(item.id);
            });
        }else{
            console.log('Shopping list completion aborted')
        }

    }

    //Generate EditItemForm for the item selected
    const getEditItemForm = () => {
        const itemIndex = listItems.findIndex((obj) => obj.id === editItemId);
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

    const getAddItemForm = () =>{
        return <AddItemForm 
            listId={props.list.id}
            formData={
            {name : '', 
            quantity : 1, 
            important : false}}                    
        /> 
    }

    const getSelectList = () => {
        return <SelectList resetForm={handleResetForm} resetFormData={handleResetFormData}/>;
    }

    const getEditListForm = () => {
        return <EditListForm 
            list={props.list} 
            handleCloseListEditForm={handleCloseListEditForm}
        />
    }

    const getSelectItemList = () => {
        return <SelectItemList  
            resetForm={handleResetForm} 
            resetFormData={handleResetFormData}
            wishListId = {selectedList.id} 
            shoppingListId = {props.list.id}
            listItems = {selectedListItems} 
            checkItems = {selectedListItems.map(item => {return {name: item.name, checked: false}})}
        />  
    }
    



    return(
        <div className='WishList shadow-box container'>
            <div className='listHeader row'>      
                <h4 className='col-11 button' onClick={handleDropDownButton}>{props.list.name}</h4>
                <a className='button' onClick={handleDropDownButton}><i className={`fa ${displayListItems ? 'fa-angle-down' : 'fa-angle-up'} col-1 button dropDownButton`}></i></a>
                <div className='listOptions'>
                    <a onClick={handleAddItemButton}><i className='fa fa-plus button listOption'> {displayAddItemForm | displayEditItemForm ? 'Close' : 'Add Item'}</i></a>|
                    <a onClick={handleEditListButton}> <i className='fa fa-edit button listOption'> Edit list</i></a>|
                    <a onClick={handleDeleteListButton}> <i className='fa fa-edit button listOption'> Delete list</i></a>

                </div>
            </div>

            <div className='form-container'>
            { displayEditListForm? getEditListForm(): ''}  
            {
                //Display a form to add a new item only after Add Item is clicked
                //Also close all other forms                
                displayAddItemForm?
                <div className='addFromButtons'>
                    <button className='btn btn-dark btnAddFrom' onClick={handleAddItemFromList}>From WishList</button>
                    <button className='btn btn-dark btnAddFrom' onClick={handleNewItem}>New Item</button>
                    {
                        displayAddNewItemForm ? getAddItemForm()
                        : displayAddItemFromListForm?  getSelectList() : '' 
                    }
                    { didSelectList ? getSelectItemList() : ''}
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
                    <button className='btn btn-dark' onClick={handleCompleteShopping}>Completed Shopping</button>
                </div>
                : 'No items to show') : ''
            }   
            
            
        </div>);
}
export default ShoppingList
