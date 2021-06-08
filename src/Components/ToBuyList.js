import ListItem from './ListItem';

const ToBuyList = (props) => 
<div className='ToBuyList shadow-box container'>
    
    <div className='listHeader row'>
        <h4 className='col-8'>{props.list.name}</h4>
        {
            //Display a form to add a new item only after Add Item is clicked
            //Also close all other forms
        //props.handleTBLAddItemButton(props.list.id)
            props.list.displayForm ? <p>Hi ho</p> : <></>
        }
        <a onClick={props.handleTBLAddItemButton(props.list.id)} className='addItemButton col-3 button'>
            Add Item
        </a>
        <i className='fa fa-angle-down col-1 button'></i>
    </div>
    <div className='listContent'>
        {props.list.items.map((listItem) => (<ListItem key={listItem.id.toString()} listItem={listItem}/>))}
    </div>
    
    
</div>
export default ToBuyList
