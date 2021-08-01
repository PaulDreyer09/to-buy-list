import {POST_LIST, FETCH_LISTS, DELETE_LIST, UPDATE_LIST} from  '../action-creators/types';

const initialState = {    
    wishLists: [],
    shoppingLists: [],
}

export default function(state = initialState, action){
    switch (action.type) {
        //Payload: array of list objects
        case FETCH_LISTS: 
            //console.log('FETCH_LISTS action called')
            let lists = action.payload;

            //Split Lists into wishlists and shoppinglists
            let wishListsData = lists.filter((list) => list.listType == 0);
            let shoppingListsData = lists.filter((list) => list.listType == 1);
            return {...state, wishLists: wishListsData, shoppingLists: shoppingListsData};

        //Payload: list object
        case POST_LIST:
            const postList = action.payload;
            let afterPostLists = undefined;

            //push list to wishlists or shoppinglists depending on listType
            if(postList.listType == 0){
                afterPostLists = [...state.wishLists];
                afterPostLists.push(postList);
                return {...state, wishLists: afterPostLists}
            }
            else{
                afterPostLists = [...state.shoppingLists];
                afterPostLists.push(postList);
                return {...state, shoppingLists: afterPostLists}
            }

        //Payload: list id
        case DELETE_LIST:
            let afterDeleteLists = undefined;
            let listToDelete = action.payload;
            let deleteIndex = -1;
            

            if(listToDelete.listType == 0){
                afterDeleteLists = [...state.wishLists];
                deleteIndex = afterDeleteLists.findIndex((obj) => obj.id == listToDelete.id);
                console.log('DELETE_INDEX',deleteIndex);
                afterDeleteLists.splice(deleteIndex, 1);
                return {...state, wishLists: afterDeleteLists};
            }
            else{
                afterDeleteLists = [...state.shoppingLists];
                deleteIndex = afterDeleteLists.findIndex((obj) => obj.id == listToDelete.id);
                afterDeleteLists.splice(deleteIndex, 1);
                return {...state, shoppingLists: afterDeleteLists};
            }

        default:
            return state;
    }
}