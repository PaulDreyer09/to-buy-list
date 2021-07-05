import React, { useState } from 'react';
import ListItem from './ListItem';
import SelectTbl from './SelectTbl';

const ShoppingList = (props) => {
    console.log('ShoppingList', props.TBLList)
    const [displayForm, setDisplayForm] = useState(false);
    const [displayListItems, setDisplayListItems] = useState(true);

    //toggle displayAddForm
    const handleAddItemButton = () => {
        setDisplayForm(!displayForm);
    }

    //display addFromListForm
    const DisplayListToAddItemsFrom = (listIndex) =>{

    }

    const handleDropDownButton = () => {
        setDisplayListItems(!displayListItems);
    }

    const handleEditListButton = () => {
        
    }

    const handleDeleteListButton = () => {
        props.handleDeleteTBL(props.list.id);
    }

    return(
        <div className='ShoppingList shadow-box container'>
            <div className='listHeader row'>
                <h4 className='col-11'>{props.list.name}</h4>
                <a className='button' onClick={handleDropDownButton}><i className={`fa ${displayListItems ? 'fa-angle-down' : 'fa-angle-up'} col-1 button dropDownButton`}></i></a>
                <div className='listOptions'>
                    <a onClick={handleAddItemButton}><i className='fa fa-plus button listOption'> {displayForm ? 'Close' : 'Add Item'}</i></a>|
                    <a onClick={handleEditListButton}> <i className='fa fa-edit button listOption'> Edit list</i></a>|
                    <a onClick={handleDeleteListButton}> <i className='fa fa-edit button listOption'> Delete list</i></a>
                </div>
            </div>
            {
                    //Display a form to add a new item only after Add Item is clicked
                    //Also close all other forms
                    displayForm?
                    <SelectTbl 
                    TBLList={props.TBLList}
                    handleSelectList={props.handleTBLSubmitItemButton}/>:''                    
            }            
            {
                //Show message if no items are in the list
                displayListItems ? (
                props.list.items.length > 0 ? 
                <div className='listContent'>
                    {props.list.items.map((listItem, index) => (<ListItem 
                    key={index} 
                    listIndex={props.listIndex} 
                    itemIndex={index} 
                    listItem={listItem} 
                    handleDeleteTBLListItem={props.handleDeleteTBLListItem}
                    toggleImportant={props.toggleImportant}/>))}
                </div>
                : 'No items to show') : ''
            }  
            
            
        </div>);
}
export default ShoppingList
