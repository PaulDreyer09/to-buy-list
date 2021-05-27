import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import MainMenuButtons from './Components/MainMenuButtons';
import AppHeader from './Components/AppHeader';
import ContentPage from './Components/Content';

function App() {
  return (
    <div className="App">
      <AppHeader title='Home'/>
      <ContentPage />  
    </div>
  );
}

export default App;
