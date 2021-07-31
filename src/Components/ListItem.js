import {itemActionCreators} from '../state/index';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const {updateItem, deleteItem} = bindActionCreators(itemActionCreators, dispatch)

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



    //console.log(props.toggleImportant(props.listIndex, props.itemIndex));
    return( 
    <div onDoubleClick={handleDoubleClick} className='ListItem'>        
        {props.listItem.important ? <i className='fa fa-star'></i>: ''}
        <span>{props.listItem.name}</span>
        <div className='itemOptions'>
            <a href='#' className='addButton' onClick={handleEditItemButton}><i className='fa fa-edit icon'></i></a>
            <a href='#' className='addButton' onClick={handleDeleteButton}><i className='fa fa-trash icon'></i></a>
            <a href='#' className='addButton'><i className='fa fa-angle-down icon'></i></a>
        </div>
        <div className="container listItemDetails">
            <span>Quantity: {props.listItem.quantity}</span>
        </div>        
        <div className='line'></div>      
    </div>
    );
}


export default ListItem;