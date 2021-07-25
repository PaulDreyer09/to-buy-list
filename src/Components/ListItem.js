import {itemActionCreators} from '../state/index';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const {toggleItemImportant} = bindActionCreators(itemActionCreators, dispatch)
    const toggleImportant = () => {
        toggleItemImportant(props.item, props.itemIndex)
    }
    //console.log(props.toggleImportant(props.listIndex, props.itemIndex));
    return( 
    <div onDoubleClick={toggleImportant} className='ListItem'>        
        {props.listItem.important ? <i className='fa fa-star'></i>: ''}
        <span>{props.listItem.name}</span>
        <div className='itemOptions'>
            <a href='#' className='addButton'><i className='fa fa-edit icon'></i></a>
            <a href='#' onClick={() => props.handleDeleteTblListItem(props.listIndex, props.itemIndex)} className='addButton'><i className='fa fa-trash icon'></i></a>
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