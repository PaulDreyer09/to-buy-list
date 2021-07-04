import ToBuyList from './ToBuyList';
import AddListForm from './AddListForm';

const ToBuyListsPage = (props) => {
    console.log('ToBuyListsPage',props.lists);
    return(
    <div className='ToBuyListsPage'>
        <AddListForm handleAddNewList={props.handleAddNewTBL}/>
        {props.lists.length > 0 ? 
            props.lists.filter((list) => {return list.listType == '0'}).map((list, index) => {
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


export default ToBuyListsPage;