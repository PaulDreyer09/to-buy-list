import {itemActionCreators} from '../state/index';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import React ,{ useState } from 'react';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const {updateItem, deleteItem} = bindActionCreators(itemActionCreators, dispatch)
    const [showDetails, setShowDetails] = useState(false);

    //Toggle Important on item
    const handleDoubleClick = () => {
        let item = props.item;
        item.important = !item.important;
        updateItem(item);
    }

    const handleEditItemButton = () => {
        props.handleEditItemButton(props.item.id);
    }

    const handleDeleteButton = () => {
        deleteItem(props.item.id)
    }

    const handleArrowClicked = () => {
        setShowDetails(!showDetails)
    }



    //console.log(props.toggleImportant(props.listIndex, props.itemIndex));
    return( 
    <div title='Double click to toggle important' onDoubleClick={handleDoubleClick} className='ListItem'>        
        {props.listItem.important ? <i className='fa fa-star'></i>: ''}
        <span>{props.listItem.name}</span>
        <div className='itemOptions'>
            <a href='#' className='addButton' onClick={handleEditItemButton}><i className='fa fa-edit icon'></i></a>
            <a href='#' className='addButton' onClick={handleDeleteButton}><i className='fa fa-trash icon'></i></a>
            <a href='#' className='addButton' onClick={handleArrowClicked}><i className={showDetails? 'fa fa-angle-down icon' : 'fa fa-angle-up icon'}></i></a>
        </div>
        {showDetails? <div className="container listItemDetails">
            <span>Quantity: {props.listItem.quantity}</span>
        </div> : ''}        
        <div className='line'></div>      
    </div>
    );
}


export default ListItem;