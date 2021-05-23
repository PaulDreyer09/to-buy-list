import Container from 'react-bootstrap/Container';

import { Col, Row } from 'react-bootstrap';

function AppHeader(){
    return (
        <Container fluid className="AppHeader">
            <Row>
            <span>[ ]</span>
            <h1>Home</h1>
            </Row>        
        </Container>
  );
}

export default AppHeader;