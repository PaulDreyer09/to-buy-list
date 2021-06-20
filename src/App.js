import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import MainMenuButtons from './Components/MainMenuButtons';
import AppHeader from './Components/AppHeader';
import ContentPage from './Components/ContentPage';

import React, {useState} from 'react';
import ToBuyList from './Components/ToBuyList';

function App() {
  const [activity, setActivity] = useState('Main_Menu');//activity keeps track of the page that needs to be shown
  //activity names: Main_Menu, To_Buy_Lists

  const [title, setTitle] = useState('To Buy Lists');

  const [toBuyLists, setToBuyLists] = useState([   //List items for ToBuyListPage TEST use before adding database
    {id: 'l0', name: 'Groceries', displayForm: false, items: [{id: 1, name:'Apples', quantity: 2, important: false}, {id: 2, name:'Bananas', quantity: 2, important: false}]},
     {id: 'l2', name: 'Cloths', displayForm: false, items: [{id: 3, name:'Steel Point Boots', quantity: 1}, {id: 4, name:'Cargo Shorts', quantity: 2}]},
     {id: 'l3', name: 'Tools', displayForm: false, items: [{id: 5, name:'Makita Cordless SDS Drill', quantity: 1}, {id: 6, name:'10mm SDS Drill bit', quantity: 2}]},
     {id: 'l4', name: 'Games', displayForm: false, items: [{id: 7, name:'Age of Empires IV', quantity: 2}, {id: 8, name:'Starcraft Remastered HD', quantity: 2}]}]);

  const handleTBLMainMenuButton = () => { setActivity('To_Buy_Lists') };  

  const addListItem = (listId, listItem) => {
    let lists = [...toBuyLists];
    let targetList = lists[listId];    
    
    targetList.items.push(listItem);
    lists[listId] = targetList;

    setToBuyLists(lists);
  }

  const handleTBLAddItemButton = (id) => {        
          //Change displayForm to false for the list containing the clicked button
          console.log(`add ${id}`);     
  };

  //Submit new ListItem to a ToBuyList
  const handleTBLSubmitItemButton = (listId, {id, name, quantity, important}) => {
    console.log('listID', listId);
      if(!name)
          {alert('Please enter a name')}
      addListItem(listId, {id: id, name: name, quantity: quantity, important: important})
      
  }

  //Delete ListItem from ToBuyList
  const handleDeleteTblListItem = (listIndex, itemIndex) => {
      let lists = [...toBuyLists];      
      lists[listIndex].items.splice(itemIndex, 1);      
      setToBuyLists(lists);
  };

  //Toggle item being important to show a star next to the item name
  const toggleImportant = (listIndex, itemIndex) => {
    let lists = [...toBuyLists];  
    let targetList = lists[listIndex];
    let listItem = targetList.items[itemIndex];

    listItem.important = listItem.important ? false : true;
    targetList[listIndex] = listItem;

    lists[listIndex] = targetList;
    setToBuyLists(lists);
  }

  return (  
    <div className="App">
       <div>
              <AppHeader title={title}/>
              <ContentPage activity={activity} toBuyLists={toBuyLists} 
                  handleTBLMainMenuButton={handleTBLMainMenuButton}
                  handleTBLAddItemButton={handleTBLAddItemButton}
                  handleDeleteTblListItem={handleDeleteTblListItem}
                  handleTBLSubmitItemButton={handleTBLSubmitItemButton}
                  toggleImportant={toggleImportant}
              /> 
          </div>
    </div>
  );
}

export default App;
