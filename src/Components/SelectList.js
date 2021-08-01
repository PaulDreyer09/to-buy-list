import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { listActionCreators } from "../state";

const SelectList = ({}) => {
    const lists = useSelector(state => state.lists.wishLists);
    const dispatch = useDispatch();
    const {selectList} = bindActionCreators(listActionCreators, dispatch);

    //Change list to be displayed for adding items from the TBL to the Shopping List
    const handleSelectList = (id) => {

    }

    //Get the value from the selected list to use as id for selectList
    const onChange = (event) =>{
        let index = event.target.value;  
        let list = lists[index];

        selectList(list.id);
    }

    //List out each ToBuyList in a select list
    return (
        <div className='SelectList'>
            <select name='SelectList' className='tblList' onChange={onChange}>   
                {lists.map((list, index) => {
                    return <option key={index} value={index}>{list.name}</option>;})}
            </select>


        </div>
    );
}

export default SelectList;