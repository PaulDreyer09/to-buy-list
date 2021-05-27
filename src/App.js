import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import MainMenuButtons from './Components/MainMenuButtons';
import AppHeader from './Components/AppHeader';
import ContentPage from './Components/Content';
import React, {useState} from 'react';

function App() {
  //activity names: Main_Menu, To_Buy_Lists
  const [activity, setActivity] = useState('To_Buy_Lists');

  return (  
    <div className="App">
      <AppHeader title='Home'/>
      <ContentPage activity={activity}/>  
    </div>
  );
}

export default App;
