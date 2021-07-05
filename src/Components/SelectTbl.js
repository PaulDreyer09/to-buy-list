const SelectTbl = ({TBLList, handleSelectList}) => {
    console.log('SelectTbl', TBLList);
    

    //Get the value from the selected list to use as id for handleSelectList
    const onChange = (list) =>{
        let id = list.value;
        console.log(id);
        //handleSelectList(id)
    }

    //List out each ToBuyList in a select list
    return (<div className='SelectTbl'>
        <select name='SelectTbl' className='tblList' onChange={onChange}>   
            {TBLList.map((list, index) => <option value={index}>{list.name}</option>    )}
        </select>
    </div>);
}

export default SelectTbl;