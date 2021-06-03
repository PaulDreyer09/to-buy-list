import ListItem from './ListItem';

const ToBuyList = (props) => 
<div className='ToBuyList container'>
    <h4>{props.name}</h4>
    
    {props.listItems.map((listItem) => (<ListItem key={listItem.id.toString()} listItem={listItem}/>))}
</div>


export default ToBuyList