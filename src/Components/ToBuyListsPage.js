import ToBuyList from './ToBuyList';
import AddListForm from './AddListForm';

const ToBuyListsPage = (props) => {
    console.log(props.handleAddNewTBL);
    console.log(props.handleTBLSubmitItemButton)
    return(
    <div className='ToBuyListsPage'>
        <AddListForm handleAddNewTBL={props.handleAddNewTBL}/>
        {props.lists.length > 0 ? props.lists.map((list, index) => (
            <ToBuyList key={index} 
                listIndex={index}
                list={list}                 
                handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                handleDeleteTblListItem={props.handleDeleteTblListItem}
                toggleImportant={props.toggleImportant}></ToBuyList>)): 'Nothing to show'}
        {}
    </div>);
    }


export default ToBuyListsPage;