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
    [{id: 'l0', name: 'Groceries', items: [{id: 1, name:'Apples', quantity: 2}, {id: 2, name:'Bananas', quantity: 2}]},
                {id: 'l2', name: 'Cloths', items: [{id: 3, name:'Steel Point Boots', quantity: 1}, {id: 4, name:'Cargo Shorts', quantity: 2}]},
                {id: 'l3', name: 'Tools', items: [{id: 5, name:'Makita Cordless SDS Drill', quantity: 1}, {id: 6, name:'10mm SDS Drill bit', quantity: 2}]},
                {id: 'l4', name: 'Games', items: [{id: 7, name:'Age of Empires IV', quantity: 2}, {id: 8, name:'Starcraft Remastered HD', quantity: 2}]}]

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
