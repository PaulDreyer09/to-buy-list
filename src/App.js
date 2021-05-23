import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

import { Col, Row } from 'react-bootstrap';
import MainMenuButtons from './Components/MainMenuButtons';
import AppHeader from './Components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Container fluid>
        <MainMenuButtons />     
        
        
      </Container>
    </div>
  );
}

export default App;
