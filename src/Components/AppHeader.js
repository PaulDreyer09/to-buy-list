import Container from 'react-bootstrap/Container';
import DropDownMenuButton from './DropDownMenuButton';

import { Col, Row } from 'react-bootstrap';

function AppHeader(props){
    return (
        <div fluid className="AppHeader container container-fluid">
            <div className='row'>
                <div className='col-2'>
                    <span><DropDownMenuButton/></span>
                </div>
                <div className='col-8'>
                    <h1>{props.title}</h1>
                </div>  
            </div>        
        </div>
  );
}

export default AppHeader;