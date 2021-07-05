import ShoppingList from './ShoppingList';
import AddListForm from './AddListForm';

const ShoppingListsPage = (props) => {
    //console.log('ShoppingListsPage', props.TBLList);
    return(
    <div className='ShoppingListsPage'>
        <AddListForm handleAddNewList={props.handleAddNewSL}/>
        {props.SLList.length > 0 ? 
            props.SLList.map((list, index) => {
                return <ShoppingList key={index} 
                    listIndex={index}
                    list={list}            
                    TBLList={props.TBLList}     
                    handleSelectList={props.handleSelectList}
                    handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                    handleDeleteTblListItem={props.handleDeleteTblListItem}
                    handleDeleteTBL={props.handleDeleteTBL}
                    toggleImportant={props.toggleImportant}></ShoppingList>}): 'Nothing to show'}

    </div>);
    }


export default ShoppingListsPage;