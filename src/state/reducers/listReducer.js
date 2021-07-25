import {FETCH_ITEMS, FETCH_LISTS} from  '../action-creators/types';

const initialState = {    
    wishLists: [],
    shoppingLists: [],
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_LISTS: 
            //console.log('FETCH_LISTS action called')
            let lists = action.payload;

            //Split Lists into wishlists and shoppinglists
            let wishListsData = lists.filter((list) => list.listType == 0);
            let shoppingListsData = lists.filter((list) => list.listType == 1);
            return {...state, wishLists: wishListsData, shoppingLists: shoppingListsData};
        default:
            return state;
    }
}