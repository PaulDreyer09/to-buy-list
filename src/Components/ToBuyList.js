import ListItem from './ListItem';

const ToBuyList = (props) => 
<div class='glow-box'>
    <div className='ToBuyList shadow-box container'>
        <h4>{props.name}</h4>        
        {props.listItems.map((listItem) => (<ListItem key={listItem.id.toString()} listItem={listItem}/>))}
        <div class='line'></div>
    </div>
</div>

export default ToBuyList