import {useState} from 'react';

const AddListForm = ({handleAddNewTBL}) =>{
    const [displayForm, setDisplayForm] = useState(false);
    const [formName, setFormName] = useState('');

    const onChange = (e) => {
        setFormName(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('submit clicked');
        const success = await handleAddNewTBL(formName);
        if(success){
            setFormName('');
            setDisplayForm(false);
        }
    }

    return (
        <div className='AddListForm'>
        <button onClick={() => {setDisplayForm(!displayForm)}}>{displayForm? 'Cancel' : 'New Item'}</button>
        {displayForm ?
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>List Name</label>
                    <input type='text' value={formName} onChange={onChange}/>
                    <button type='submit'>Submit</button>
                </div>
            </form> : ''
        }
            

        
    </div>
    );
    
}

export default AddListForm;