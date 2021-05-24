import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import { Col, Row } from 'react-bootstrap';

function MainMenuButtons(){
    return (
    <div className='MainMenuButtons container container-fluid'>
        <div className='row'>
            <button className='btn btn-primary btn-block' >To Buy Lists</button>
        </div>
        <div className='row'>
          <button className='btn btn-primary btn-block' >Shopping Lists</button>
        </div>
        <div className='row'>
          <button className='btn btn-primary btn-block' >Went shopping</button>
        </div>
    </div>);
}

export default MainMenuButtons;