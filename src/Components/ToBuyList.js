import React, { useState } from 'react';
import ListItem from './ListItem';
import AddItemForm from './AddItemForm';

const ToBuyList = (props) => {
    const [displayForm, setDisplayForm] = useState(false);

    //toggle displayAddForm
    const handleAddButton = () => {
        setDisplayForm(!displayForm);
    }

    return(
        <div className='ToBuyList shadow-box container'>
            <div className='listHeader row'>
                <h4 className='col-8'>{props.list.name}</h4>
                
                <a href='#' onClick={handleAddButton} className='addItemButton col-3 button'>
                    Add Item
                </a>
                <i className='fa fa-angle-down col-1 button'></i>
            </div>
            {
                    //Display a form to add a new item only after Add Item is clicked
                    //Also close all other forms
                    displayForm?
                    <AddItemForm 
                    listIndex={props.listIndex}
                    handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}/>:''                    
            }
            {props.list.items.length > 0 ? 
                <div className='listContent'>
                    {props.list.items.map((listItem, index) => (<ListItem 
                    key={index} 
                    listIndex={props.listIndex} 
                    itemIndex={index} 
                    listItem={listItem} 
                    handleDeleteTblListItem={props.handleDeleteTblListItem}
                    toggleImportant={props.toggleImportant}/>))}
                </div>
                : 'No items to show'
            }  
            
            
        </div>);
}
export default ToBuyList
