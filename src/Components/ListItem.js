const ListItem = (props) => 
    <div className='ListItem'>
        <span className='col-md-6'>{props.listItem.name}</span>
        <div className='itemOptions'>
            <a href='#' className='addButton col-ms-1'><i className='fa fa-edit icon'></i></a>
            <a href='#' className='addButton col-ms-1'><i className='fa fa-trash icon'></i></a>
            <a href='#' className='addButton col-ms-1'><i className='fa fa-angle-down icon'></i></a>

        </div>  
        <div class='line'></div>      
    </div>

export default ListItem;