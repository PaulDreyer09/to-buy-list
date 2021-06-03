import ToBuyList from './ToBuyList'

const ToBuyListsPage = (props) => 
    <div className='ToBuyListsPage'>
        {props.lists.map((list) => (<ToBuyList key={list.id} name={list.name} listItems={list.items}></ToBuyList>))}
    </div>


export default ToBuyListsPage;