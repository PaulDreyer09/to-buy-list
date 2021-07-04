import Container from 'react-bootstrap/Container';
import DropDownMenuButton from './DropDownMenuButton';

import { Col, Row } from 'react-bootstrap';

function AppHeader(props){
    return (
        <div className="AppHeader"> 
            <a className='headerBackButton' href='#MainMenu' onClick={props.handleBackButton}><i className='fa fa-arrow-left'></i></a>   
            <h1>{props.title}</h1>               
        </div>
  );
}

export default AppHeader;