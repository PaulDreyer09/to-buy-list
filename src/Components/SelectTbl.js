import { useState } from "react";

const SelectTbl = ({TBLList}) => {
    //console.log('SelectTbl', {TBLList}); //Display lists test

    //Change list to be displayed for adding items from the TBL to the Shopping List
    const handleSelectList = (id) => {
        /*
            
        */

    }

    //Get the value from the selected list to use as id for handleSelectList
    const onChange = (list) =>{
        let id = list.value;
        console.log(id);
        //handleSelectList(id)
    }

    //List out each ToBuyList in a select list
    return (
        <div className='SelectTbl'>
            <select name='SelectTbl' className='tblList' onChange={onChange}>   
                {TBLList.map((list, index) => {
                    console.log(list, index);
                    return <option value={index}>{list.name}</option>;})}a
            </select>


        </div>
    );
}

export default SelectTbl;