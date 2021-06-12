import ToBuyList from './ToBuyList'

const ToBuyListsPage = (props) => {
    return(
    <div className='ToBuyListsPage'>
        {props.lists.map((list, index) => (
            <ToBuyList key={index} 
                listIndex={index}
                list={list} 
                handleTBLAddItemButton={props.handleTBLAddItemButton}
                handleSubmitItemButton={props.handleTBLSubmitItemButton}
                handleDeleteTblListItem={props.handleDeleteTblListItem}></ToBuyList>))}
    </div>);
    }


export default ToBuyListsPage;