import {FETCH_ITEMS, POST_ITEM, UPDATE_ITEM, DELETE_ITEM, SELECT_ITEM_LIST_DATA, REMOVE_ITEM_LIST_DATA, CHECK_SELECT_ITEM} from './types';

//FETCH ITEMS
export const fetchItems = () => (dispatch) => {
    //console.log("fetchItems action called");
    fetch('http://localhost:5000/listItems')
    .then(res => res.json())
    .then(listItems => {
        return dispatch({type: FETCH_ITEMS, payload: listItems})
    });
}

//POST ITEM
//Parameter: created item object
export const postItem = (newItem) => (dispatch) => {
    console.log('POST ITEM', newItem);
    fetch('http://localhost:5000/listItems', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newItem),
    })
    .then(res => res.json())
    .then(data => {
        console.log('post data',data);
        return dispatch({type: POST_ITEM, payload: data})
    })
}

//UPDATE ITEM
//Parameter: item object with changes applied, DO NOT EDIT ID
export const updateItem = (item) => (dispatch) => {
    fetch(`http://localhost:5000/listItems/${item.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    })
    .then(res => res.json)
    .then(data => dispatch({type: UPDATE_ITEM, payload: item}))
}



//DELETE ITEM
//Parameter: item id
export const deleteItem = (itemId) => (dispatch ) => {
    fetch(`http://localhost:5000/listItems/${itemId}`, {method: 'DELETE'})
    .then(() => dispatch({type: DELETE_ITEM, payload: itemId}))
}

//Initialise items list data for SelectItemsList component
//Parameters: list of items from the selected list
export const setSelectItemListData = (listId) => (dispatch) =>{
    dispatch({type: SELECT_ITEM_LIST_DATA, payload: listId});
}

export const removeItemListData = () => (dispatch) =>{
    dispatch({type: REMOVE_ITEM_LIST_DATA, payload: {}});
}

export const checkItem = (itemId) => (dispatch) => {
    dispatch({type: CHECK_SELECT_ITEM, payload: itemId});
}

//const [selectedItems, setSelectedItems] = useState(listItems.map(item => {return {name: item.name, checked: false}}));