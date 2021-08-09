import ShoppingList from './ShoppingList';
import AddListForm from './AddListForm';
import { useSelector } from 'react-redux';

const ShoppingListsPage = (props) => {
    //console.log('ShoppingListsPage', props.TBLList);
    const state = useSelector(state => state.lists.shoppingLists)
    return(
        <div className='ShoppingListsPage'>
            <AddListForm />
            
            { state.length > 0 ? 
                state.map((list, index) => {
                    return <ShoppingList key={list.id} list={list}/>
                }): 'Nothing to show'}
        </div>);
    }


export default ShoppingListsPage;