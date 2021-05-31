import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import MainMenuButtons from './Components/MainMenuButtons';
import AppHeader from './Components/AppHeader';
import ContentPage from './Components/ContentPage';
import React, {useState} from 'react';

function App() {
  //activity names: Main_Menu, To_Buy_Lists
  //activity keeps track of the page that needs to be shown
  const [activity, setActivity] = useState('Main_Menu');
  //Header title
  const [title, setTitle] = useState('To Buy Lists')
  //List items for ToBuyListPage TEST use before adding database
  const [toBuyLists, setToBuyLists] = useState(
    [{name: 'Groceries', items: [{name:'Apples', quantity: 2}, {name:'Bananas', quantity: 2}]},
                {name: 'Cloths', items: [{name:'Steel Point Boots', quantity: 1}, {name:'Cargo Shorts', quantity: 2}]},
                {name: 'Tools', items: [{name:'Makita Cordless SDS Drill', quantity: 1}, {name:'10mm SDS Drill bit', quantity: 2}]},
                {name: 'Games', items: [{name:'Age of Empires IV', quantity: 2}, {name:'Starcraft Remastered HD', quantity: 2}]}]

  );

  let handleTBLMainMenuButton = () =>{ setActivity('To_Buy_Lists') };  

  return (  
    <div className="App">
      <AppHeader title={title}/>
      <ContentPage activity={activity} toBuyLists={toBuyLists} 
        handleTBLMainMenuButton={handleTBLMainMenuButton}/>  
    </div>
  );
}

export default App;
