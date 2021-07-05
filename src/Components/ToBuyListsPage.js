import ToBuyList from './ToBuyList';
import AddListForm from './AddListForm';

const ToBuyListsPage = (props) => {
    console.log('ToBuyListsPage',props.TBLList);
    return(
    <div className='ToBuyListsPage'>
        <AddListForm handleAddNewList={props.handleAddNewTBL}/>
        {props.TBLList.length > 0 ? 
            props.TBLList.map((list, index) => {
                console.log(list)
                return <ToBuyList key={index} 
                    listIndex={index}
                    list={list}                 
                    handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                    handleDeleteTBLListItem={props.handleDeleteTBLListItem}
                    handleDeleteTBL={props.handleDeleteTBL}
                    toggleImportant={props.toggleImportant}></ToBuyList>}): 'Nothing to show'}

    </div>);
    }


export default ToBuyListsPage;