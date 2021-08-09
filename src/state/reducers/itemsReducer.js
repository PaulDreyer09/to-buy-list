import SelectItemList from '../../Components/SelectItemList';
import {FETCH_ITEMS, POST_ITEM, UPDATE_ITEM, DELETE_ITEM, SELECT_ITEM_LIST_DATA, REMOVE_ITEM_LIST_DATA, CHECK_SELECT_ITEM} from '../action-creators/types';

const initialState = {items: [], selectItemsList: []};

export default (state = initialState, action) => {
    //let newItemsList = [...state.items];
    switch (action.type) {
        //Fetch items from api and update state
        //Payload: array of listItem objects
        case FETCH_ITEMS:       
            return {...state, items: action.payload};
        //Payload: new created list item
        case POST_ITEM:
            let createdItem = action.payload;
            let listAfterPost =  [...state.items];
            listAfterPost.push(createdItem);

            return {...state, items: listAfterPost}
        //Payload: listItem with needed changes applied to it
        case UPDATE_ITEM:
            //initialise new state data
            let newItemsList = [...state.items];
            let index = newItemsList.findIndex((element) => element.id === action.payload.id);

            newItemsList[index] = action.payload;
        
            return {...state, items: newItemsList};
        //Payload: listItem id that needs to be deleted
        case DELETE_ITEM:
            //delete item from list            
            let deleteItemsList = [...state.items]
            const itemIndex = deleteItemsList.findIndex((item) => item.id == action.payload);

            if(itemIndex > -1){
                deleteItemsList.splice(itemIndex, 1);
            }
            return{...state, items: deleteItemsList,};    
            
        //The following 3 actions are for the SelectItemsList for ShoppingList component to add item to a shopping list from a wishlist

        //Payload: list id to select as the selectItemsList
        //Select all items for the corresponding list and add a checked value for checking if the item is checked in a select list
        case SELECT_ITEM_LIST_DATA: 
            let selectItemList = state.items.filter((item) => item.listId == action.payload);
            selectItemList = selectItemList.map((item) => {return {data: item, checked: false}});
            return{...state, selectItemsList: selectItemList};

        //Payload: none
        //Clear the selectItemsList so the data would be reinitialised as bugs were caused without reinitialisation
        case REMOVE_ITEM_LIST_DATA:
            return{...state, selectItemsList: []};

        //Payload: itemId for item to be checked
        //Toggle checked for item in selectItemList
        case CHECK_SELECT_ITEM:
            let selectItemsListAfterCheck = [...state.selectItemsList];
            const checkId = action.payload;
                       
            const checkIndex = selectItemsListAfterCheck.findIndex(item => item.data.id === checkId)
            if(checkIndex >= 0){
                const itemToCheck = selectItemsListAfterCheck[checkIndex];
                itemToCheck.checked = !itemToCheck.checked;
                selectItemsListAfterCheck[checkIndex] = itemToCheck;

                return{...state, selectItemsList: selectItemsListAfterCheck}
            } 
            else{
                console.log('Cannot find item to check id: ', checkId);
                return {...state};
            }

            

        default:
            return state;
    }
}
