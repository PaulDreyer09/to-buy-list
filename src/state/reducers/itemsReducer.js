import {FETCH_ITEMS, POST_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../action-creators/types';

const initialState = {items: [],};

export default (state = initialState, action) => {
    let newItemsList = [...state.items];

    switch (action.type) {
        //Fetch items from api and update state
        case FETCH_ITEMS:       
            return {...state, items: action.payload};
        //Toggle item important in api and update state
        case POST_ITEM:
            let createdItem = action.payload;
            let listAfterPost =  [...state.items];
            listAfterPost.push(createdItem) ;
            console.log("created item reducer", action);          
            return {...state, items: listAfterPost}
        case UPDATE_ITEM:
            //initialise new state data
            let newItemsList = [...state.items];
            let index = newItemsList.findIndex((element) => element.id == action.payload.id);

            newItemsList[index] = action.payload;
        
            return {...state, items: newItemsList};
        case DELETE_ITEM:
            //delete item from list            
            let deleteItemsList = [...state.items]
            const itemIndex = deleteItemsList.findIndex((item) => item.id == action.payload);
            if(itemIndex > -1){
                deleteItemsList.splice(itemIndex, 1);
            }
            return{...state, items: deleteItemsList};            

        default:
            return state;
    }
}
