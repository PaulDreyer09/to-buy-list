const ListItem = (props) => 
    <div className='ListItem'>
        <span>{props.listItem.name}</span>
        <div className='itemOptions'>
            <a href='#' className='addButton'><i className='fa fa-edit icon'></i></a>
            <a href='#' className='addButton'><i className='fa fa-trash icon'></i></a>
            <a href='#' className='addButton'><i className='fa fa-angle-down icon'></i></a>
        </div>  
        <div className='line'></div>      
    </div>

export default ListItem;