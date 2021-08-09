import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { listActionCreators } from "../state";
import { itemActionCreators } from "../state";

const SelectList = ({resetFormData}) => {
    const lists = useSelector(state => state.lists.wishLists);
    const dispatch = useDispatch();
    const {selectList} = bindActionCreators(listActionCreators, dispatch);
    const {setSelectItemListData} = bindActionCreators(itemActionCreators, dispatch);

    //Get the value from the selected list to use as id for selectList
    const onChange = (event) => {
        let index = event.target.value; 
        if(index >= 0){             
            let list = lists[index];
            selectList(list.id);
            setSelectItemListData(list.id);
        }
        else{
            resetFormData();
        }
    }

    //List out each ToBuyList in a select list
    return (
        <div className='SelectList'>
            <select name='SelectList' className='tblList' onChange={onChange}>
                <option key='-1' value='-1'>Select wishlist</option>
                {lists.map((list, index) => {
                    return <option key={index} value={index}>{list.name}</option>;})}
            </select>
        </div>
    );
}

export default SelectList;