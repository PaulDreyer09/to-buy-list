import ToBuyList from './ToBuyList'

const ToBuyListsPage = (props) => 
    <div className='ToBuyListsPage'>
        {props.lists.map((list) => (<ToBuyList key={list.id} list={list} handleTBLAddItemButton={ props.handleTBLAddItemButton(list.id)}></ToBuyList>))}
    </div>


export default ToBuyListsPage;