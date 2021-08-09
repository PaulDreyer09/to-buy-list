import React, { useEffect, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {listActionCreators} from '../state/index';
import WishList from './WishList';
import AddListForm from './AddListForm';



const WishListsPage = (props) => {   
    const state = useSelector(state => state.lists.wishLists);   

    const getLists = () => {
        let component = '';
        if(state.length > 0){            
            component = state.map((list, index) => {
                return <WishList key={index} list={list} listIndex={index}/>
            })
        }
        return component;
    }
    return(
        <div className='WishListsPage'>
            <AddListForm/>
            { state.length > 0 ? <div>{getLists()}</div>: <div>Items not loaded</div>}         
        </div>
    
    )
}

export default WishListsPage;