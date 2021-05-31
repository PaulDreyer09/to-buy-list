import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import { Col, Row } from 'react-bootstrap';

function MainMenuButtons(props){
    return (
    <div className='MainMenuButtons container container-fluid'>
        <div className='row'>
            <button onClick={props.handleTBLMainMenuButton} className='btn btn-block' >To Buy Lists</button>
        </div>
        <div className='row'>
          <button className='btn btn-block' >Shopping Lists</button>
        </div>
        <div className='row'>
          <button className='btn btn-block' >Went shopping</button>
        </div>
    </div>);
}

export default MainMenuButtons;