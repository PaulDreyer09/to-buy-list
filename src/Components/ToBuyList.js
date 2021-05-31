const ToBuyList = (props) => 
<div className='ToBuyList container'>
    <h4>{props.name}</h4>
    {props.listItems.map((listItem) => <div className='row'>{listItem.name}</div>)}
</div>


export default ToBuyList