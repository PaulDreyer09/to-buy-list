import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import MainMenuButtons from './Components/MainMenuButtons';
import AppHeader from './Components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <MainMenuButtons />  
    </div>
  );
}

export default App;
