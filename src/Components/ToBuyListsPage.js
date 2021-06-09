import ToBuyList from './ToBuyList'

const ToBuyListsPage = (props) => {
    console.log(props.handleTBLSubmitItemButton);
    return(
    <div className='ToBuyListsPage'>
        {props.lists.map((list, index) => (
            <ToBuyList key={index} 
                list={list} 
                handleTBLAddItemButton={ props.handleTBLAddItemButton(list.id)}
                handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}></ToBuyList>))}
    </div>);
    }


export default ToBuyListsPage;