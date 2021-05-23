import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import { Col, Row } from 'react-bootstrap';

function MainMenuButtons(){
    return (
    <Container className='MainMenuButtons'>
        <Row><Col xs={6}>
          <Button block>To Buy Lists</Button>
          </Col></Row>
        <Row><Button>Shopping Lists</Button></Row>
        <Row><Button>Went shopping</Button></Row>
    </Container>);
}

export default MainMenuButtons;