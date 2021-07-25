import {FETCH_LISTS, FETCH_ITEMS} from  './types';

export const fetchLists = () => (dispatch) =>{
    console.log('fetchList action called');
    fetch('http://localhost:5000/lists')
    .then(res => res.json())
    .then((lists) => {
        //console.log('fetchLists', lists)
        return dispatch({type: FETCH_LISTS, payload: lists})
    });
}
