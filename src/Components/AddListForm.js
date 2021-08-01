import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listActionCreators } from '../state';

//listType prop : 0 for WishList 1 for ShoppingList
const AddListForm = ({listType}) =>{
    const [displayListForm, setDisplayListForm] = useState(false);
    const [formName, setFormName] = useState('');

    const dispatch = useDispatch();
    const {postList} = bindActionCreators(listActionCreators, dispatch)

    //Form name text change
    const onChange = (e) => {
        setFormName(e.target.value);
    }

    //Form submit
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('submit form clicked');
        const list = {name: formName, listType: 0};

        postList(list);

        setFormName('');
        setDisplayListForm(false);
        
    }

    return (
        <div className='AddListForm  shadow-box'>
        
        {displayListForm ?
            <form onSubmit={onSubmit}>
                <div className='row container container-fluid'>
                    <label className='col-2'>List Name</label>
                    <input className='col-6' type='text'  value={formName} onChange={onChange}/>
                    <button className='col-2 btn btn-dark col-md-offset-2' type='submit'>Submit</button>
                    <button className='btn btn-dark col-2' onClick={() => {setDisplayListForm(!displayListForm)}}>Cancel</button>
                </div>
            </form> : 
            <button className='btn btn-dark btn-block' onClick={() => {setDisplayListForm(!displayListForm)}}>New List</button>
        }
            

        
    </div>
    );
    
}

export default AddListForm;