import SelectItemList from '../../Components/SelectItemList';
import {FETCH_ITEMS, POST_ITEM, UPDATE_ITEM, DELETE_ITEM, SELECT_ITEM_LIST_DATA} from '../action-creators/types';

const initialState = {items: [], selectItemsList: []};

export default (state = initialState, action) => {
    let newItemsList = [...state.items];
    

    switch (action.type) {
        //Fetch items from api and update state
        //Payload: array of listItem objects
        case FETCH_ITEMS:       
            return {...state, items: action.payload};
        //Payload: new created list item
        case POST_ITEM:
            let createdItem = action.payload;
            let listAfterPost =  [...state.items];
            listAfterPost.push(createdItem) ;
            console.log("created item reducer", action);          
            return {...state, items: listAfterPost}
        //Payload: listItem with needed changes applied to it
        case UPDATE_ITEM:
            //initialise new state data
            let newItemsList = [...state.items];
            let index = newItemsList.findIndex((element) => element.id == action.payload.id);

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
            return{...state, items: deleteItemsList};    
            
        case SELECT_ITEM_LIST_DATA: 
            let selectItemsList = state.items.filter((item) => item.listId == action.payload);
            return{...state, selectItemsList: selectItemsList};

        default:
            return state;
    }
}
