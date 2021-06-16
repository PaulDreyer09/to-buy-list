import ToBuyList from './ToBuyList'

const ToBuyListsPage = (props) => {
    return(
    <div className='ToBuyListsPage'>
        {props.lists.map((list, index) => (
            <ToBuyList key={index} 
                listIndex={index}
                list={list} 
                handleTBLAddItemButton={props.handleTBLAddItemButton}
                handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                handleDeleteTblListItem={props.handleDeleteTblListItem}
                toggleImportant={props.toggleImportant}></ToBuyList>))}
    </div>);
    }


export default ToBuyListsPage;