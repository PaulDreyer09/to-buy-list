import ToBuyList from './ToBuyList';
import AddListForm from './AddListForm';

const ToBuyListsPage = (props) => {
    return(
    <div className='ToBuyListsPage'>
        <AddListForm handleAddNewTBL={props.handleAddNewTBL}/>
        {props.lists.length > 0 ? props.lists.map((list, index) => (
            <ToBuyList key={index} 
                listIndex={index}
                list={list}                 
                handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                handleDeleteTblListItem={props.handleDeleteTblListItem}
                handleDeleteTBL={props.handleDeleteTBL}
                toggleImportant={props.toggleImportant}></ToBuyList>)): 'Nothing to show'}
        {}
    </div>);
    }


export default ToBuyListsPage;