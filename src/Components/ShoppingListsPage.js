import ToBuyList from './ToBuyList';
import AddListForm from './AddListForm';

const ShoppingListsPage = (props) => {
    return(
    <div className='ShoppingListsPage'>
        <AddListForm handleAddNewSL={props.handleAddNewSL}/>
        {props.lists.length > 0 ? 
            props.lists.filter((list) => {return list.listType == '1'}).map((list, index) => {
                console.log(list)
                return <ToBuyList key={index} 
                    listIndex={index}
                    list={list}                 
                    handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                    handleDeleteTblListItem={props.handleDeleteTblListItem}
                    handleDeleteTBL={props.handleDeleteTBL}
                    toggleImportant={props.toggleImportant}></ToBuyList>}): 'Nothing to show'}

    </div>);
    }


export default ShoppingListsPage;