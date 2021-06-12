import React, { useRef } from 'react';
import ListItem from './ListItem';

const ToBuyList = (props) => {
    let list = useRef();
    let addToList = () => {
        props.handleTBLSubmitItemButton()();
        
        /*
            We stopped here
            Need to make this function accept parameters for the item and try to make it a normal function call from here
        */
    }
    return(
        <div className='ToBuyList shadow-box container'>
            <div className='listHeader row'>
                <h4 className='col-8'>{props.list.name}</h4>
                
                <a onClick={() => props.handleTBLAddItemButton(props.list.id)} className='addItemButton col-3 button'>
                    Add Item
                </a>
                <i className='fa fa-angle-down col-1 button'></i>
            </div>
            {
                    //Display a form to add a new item only after Add Item is clicked
                    //Also close all other forms
                    props.list.displayForm ? 
                    <div className='listItemForm'>
                        <form onSubmit={Event.preventDefault, addToList}>
                            <label htmlFor='formName'>Item Name</label>
                            <input type='text' id='formName' placeholder='Enter item name'></input>
                            <input type='submit' value='Submit'/>
                        </form>
                    </div>
                    : <></>
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
