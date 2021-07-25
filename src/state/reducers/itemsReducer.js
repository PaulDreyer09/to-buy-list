import {FETCH_ITEMS, POST_ITEM, TOGGLE_ITEM_IMPORTANT} from '../action-creators/types';

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
        case TOGGLE_ITEM_IMPORTANT:
            //initialise new state data
            let newItemsList = [...state.items];
            let index = newItemsList.findIndex((element) => element.id == action.payload.id);

            newItemsList[index] = action.payload;
        
            return {...state, items: newItemsList};
        default:
            return state;
    }
}
