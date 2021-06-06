import Container from 'react-bootstrap/Container';
import DropDownMenuButton from './DropDownMenuButton';

import { Col, Row } from 'react-bootstrap';

function AppHeader(props){
    return (
        <div fluid className="AppHeader container">
            <div>
                <span><DropDownMenuButton/></span>
                
            </div>
            <div>
                <h1>{props.title}</h1>
            </div>       
        </div>
  );
}

export default AppHeader;