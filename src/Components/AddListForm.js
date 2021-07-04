import {useState} from 'react';

const AddListForm = ({handleAddNewList}) =>{
    const [displayForm, setDisplayForm] = useState(false);
    const [formName, setFormName] = useState('');

    //Form name text change
    const onChange = (e) => {
        setFormName(e.target.value);
    }

    //Form submit
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('submit clicked');
        const success = await handleAddNewList(formName);
        if(success){
            setFormName('');
            setDisplayForm(false);
        }
    }

    return (
        <div className='AddListForm  shadow-box'>

        
        {displayForm ?
            <form onSubmit={onSubmit}>
                <div className='row container container-fluid'>
                    <label className='col-2'>List Name</label>
                    <input className='col-6' type='text'  value={formName} onChange={onChange}/>
                    <button className='col-2 btn btn-dark col-md-offset-2' type='submit'>Submit</button>
                    <button className='btn btn-dark col-2' onClick={() => {setDisplayForm(!displayForm)}}>Cancel</button>
                </div>
            </form> : 
            <button className='btn btn-dark btn-block' onClick={() => {setDisplayForm(!displayForm)}}>New List</button>
        }
            

        
    </div>
    );
    
}

export default AddListForm;