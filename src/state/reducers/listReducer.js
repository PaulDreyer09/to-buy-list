import {POST_LIST, FETCH_LISTS, DELETE_LIST, UPDATE_LIST, SELECT_LIST, REMOVE_SELECT_LIST} from  '../action-creators/types';

const initialState = {    
    wishLists: [],
    shoppingLists: [],
    selectedList: {},
    didSelectList: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Payload: array of list objects
        case FETCH_LISTS: 
            //console.log('FETCH_LISTS action called')
            let lists = action.payload;

            //Split Lists into wishlists and shoppinglists
            let wishListsData = lists.filter((list) => list.listType === 0);
            let shoppingListsData = lists.filter((list) => list.listType !== 0);
            return {...state, wishLists: wishListsData, shoppingLists: shoppingListsData};

        //Payload: list object
        case POST_LIST:
            const postList = action.payload;
            let afterPostLists = undefined;

            //push list to wishlists or shoppinglists depending on listType
            if(postList.listType === 0){
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
            let deleteIndex = undefined;
            

            if(listToDelete.listType === 0){
                afterDeleteLists = [...state.wishLists];
                deleteIndex = afterDeleteLists.findIndex((obj) => obj.id === listToDelete.id);
                //console.log('DELETE_INDEX',deleteIndex);
                afterDeleteLists.splice(deleteIndex, 1);
                return {...state, wishLists: afterDeleteLists};
            }
            else{
                afterDeleteLists = [...state.shoppingLists];
                deleteIndex = afterDeleteLists.findIndex((obj) => obj.id === listToDelete.id);
                afterDeleteLists.splice(deleteIndex, 1);
                return {...state, shoppingLists: afterDeleteLists};
            }
        
        case UPDATE_LIST:
            //Wishlist or Shopping
            let afterUpdateList = undefined;
            let updatedItem = action.payload;
            let updateIndex = undefined;
            
            if(updatedItem.listType === 0){
                afterUpdateList = [...state.wishLists];
                updateIndex = afterUpdateList.findIndex((obj) => obj.id === updatedItem.id);
                //console.log('DELETE_INDEX',updateIndex);
                afterUpdateList.splice(updateIndex, 1, updatedItem);
                return {...state, wishLists: afterUpdateList};
            }
            else{
                afterUpdateList = [...state.shoppingLists];
                updateIndex = afterUpdateList.findIndex((obj) => obj.id === updatedItem.id);
                afterUpdateList.splice(updateIndex, 1, updatedItem);
                return {...state, shoppingLists: afterUpdateList};
            }

            case SELECT_LIST: 
                let selectedListId = action.payload
                let selectedListIndex = state.wishLists.findIndex(list => list.id === selectedListId);
                let selectedList = state.wishLists[selectedListIndex];

                return {...state, selectedList: selectedList, didSelectList: true};

            case REMOVE_SELECT_LIST:
                return {...state, selectedList: {}, didSelectList: false};
        default:
            return state;
    }
}