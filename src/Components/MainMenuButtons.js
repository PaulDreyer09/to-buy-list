import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import { Col, Row } from 'react-bootstrap';

function MainMenuButtons(props){
    return (
    <div className='MainMenuButtons container container-fluid'>
        <a onClick={props.handleTBLMainMenuButton} className='btn-block mainMenuButton' >To Buy Lists</a>
        <a className='btn-block mainMenuButton' >Shopping Lists</a>        
        <a className='btn-block mainMenuButton' >Went shopping</a>        
    </div>);
}

export default MainMenuButtons;