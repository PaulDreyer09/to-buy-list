import React, { useEffect, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {listActionCreators} from '../state/index';
import WishList from './WishList';
import AddListForm from './AddListForm';



const WishListsPage = (props) => {   
    const state = useSelector(state => state.lists);   

    //const dispatch = useDispatch();
    //const {fetchLists} = bindActionCreators(listActionCreators,dispatch );

    const getLists = () => {
        let component = '';
        if(state.wishLists.length > 0){            
            component = state.wishLists.map((list, index) => {
                return <WishList key={index} list={list} listIndex={index}/>
            })
        }
        return component;
    }
    return(
        <div className='ToBuyListsPage'>
            <AddListForm/>
            { state.wishLists.length > 0 ? <div>{getLists()}</div>: <div>Items not loaded</div>}         
        </div>
    
    )
}

export default WishListsPage;