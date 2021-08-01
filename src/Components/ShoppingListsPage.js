import ShoppingList from './ShoppingList';
import AddListForm from './AddListForm';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listActionCreators } from '../state';

const ShoppingListsPage = (props) => {
    //console.log('ShoppingListsPage', props.TBLList);
    const state = useSelector(state => state.lists.shoppingLists)
    console.log(state);
    return(
    <div className='ShoppingListsPage'>
        <AddListForm />
        
        { state.length > 0 ? 
            state.map((list, index) => {
                return <ShoppingList list={list}/>
            }): 'Nothing to show'}
    </div>);
    }


export default ShoppingListsPage;