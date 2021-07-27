import {FETCH_ITEMS, POST_ITEM, TOGGLE_ITEM_IMPORTANT, DELETE_ITEM} from './types';

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

//PATCH TOGGLE ITEM IMPORTANT
//Toggle important true or false in item
//input item object
export const toggleItemImportant = (item) => (dispatch) => {
    item.important = !item.important;
    fetch(`http://localhost:5000/listItems/${item.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    })
    .then(res => res.json)
    .then(data => dispatch({type: TOGGLE_ITEM_IMPORTANT, payload: item}))
}

//DELETE ITEM
//Parameter: item id
export const deleteItem = (itemId) => (dispatch ) => {
    fetch(`http://localhost:5000/listItems/${itemId}`, {method: 'DELETE'})
    .then(() => dispatch({type: DELETE_ITEM, payload: itemId}))
}
