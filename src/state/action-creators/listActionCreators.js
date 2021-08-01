import {FETCH_LISTS, POST_LIST, DELETE_LIST, UPDATE_LIST, SELECT_LIST} from  './types';

export const fetchLists = () => (dispatch) =>{
    console.log('fetchList action called');
    fetch('http://localhost:5000/lists')
    .then(res => res.json())
    .then((data) => {
        //console.log('fetchLists', lists)
        return dispatch({type: FETCH_LISTS, payload: data})
    });
}

//POST LIST
//Parameter: list object to be created
export const postList = (list) => (dispatch) => {
    console.log('POST LIST', list);
    fetch('http://localhost:5000/lists', {
        method: 'POST', 
        headers: {'Content-type' : 'application/json'}, 
        body: JSON.stringify(list)})
    .then(res => res.json())
    .then((data) => {
        dispatch({type: POST_LIST, payload: data});
    })    
}

//Delete all items from list before deleting list
//Parameter: List object to be deleted
export const deleteList = (list) => (dispatch) => {
    //console.log('DELETE LIST');
    console.log(list.id)
    fetch(`http://localhost:5000/lists/${list.id}`, {method: 'DELETE'})
    .then(() => dispatch({type: DELETE_LIST, payload: list}));
}

//UPDATE LIST
//Parameter: List object with the needed changes applied to it, DO NOT EDIT ID
export const updateList = (list) => (dispatch) => {    
    fetch(`http://localhost:5000/lists/${list.id}`, {
        method: 'PATCH', 
        headers: {'Content-Type' : 'application/json'}, 
        body: JSON.stringify(list)
    })
    .then(res => res.json)
    .then(data => dispatch({type: UPDATE_LIST, payload: list}));
}

export const selectList = (listId) => (dispatch) => {
    dispatch({type: SELECT_LIST, payload: listId});
}

