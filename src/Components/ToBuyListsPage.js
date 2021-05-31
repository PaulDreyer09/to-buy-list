import ToBuyList from './ToBuyList'



const ToBuyListsPage = (props) => 
    <div className='ToBuyListsPage'>
        {props.lists.map((list) => (<ToBuyList name={list.name} listItems={list.items}></ToBuyList>))}
    </div>


export default ToBuyListsPage;