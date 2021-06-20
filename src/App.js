import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import MainMenuButtons from './Components/MainMenuButtons';
import AppHeader from './Components/AppHeader';
import ContentPage from './Components/ContentPage';

import React, {useEffect, useState} from 'react';
import ToBuyList from './Components/ToBuyList';

function App() {
  const [activity, setActivity] = useState('Main_Menu');//activity keeps track of the page that needs to be shown
  //activity names: Main_Menu, To_Buy_Lists

  const [title, setTitle] = useState('To Buy Lists');

  //List items for ToBuyListPage TEST use before adding database
  const [toBuyLists, setToBuyLists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listsFromServer = await fetchLists();
      const listItemsFromServer = await fetchListItems();

      //Object holding all the lists and their listItems
      let toBuyLists = [];
      
      //Create list objects
      listsFromServer.map((list, listIndex) => {   
        let listItems = [];

        //traverse through the list and create listitems from each items data
        listItemsFromServer.map((item) => {
          if(item == null){
            console.log("Eh something went wrong getting the lists");
          }
          if(item.listId === list.id){
            listItems.push({
              name: item.name, 
              quantity: item.quantity, 
              important: item.important}
              );
          }
        })

        toBuyLists.push({id: list.id, name: list.name, items: listItems, displayForm: false});
      })
            
      setToBuyLists(toBuyLists) ;
    }
    getData();
    
  }, []);

  //Fetch Lists
  const fetchLists = async () => {
    //fetch resources from json server
    const res = await fetch('http://localhost:5000/lists');
    const data = await res.json();
    return data;
  }

  //Fetch List items
  const fetchListItems = async () => {
    //fetch resources from json server
    const res = await fetch('http://localhost:5000/listItems');
    const data = await res.json();
    return data;
  }

  const addListItem = (listId, listItem) => {
    let lists = [...toBuyLists];
    let targetList = lists[listId];    
    
    targetList.items.push(listItem);
    lists[listId] = targetList;

    setToBuyLists(lists);
  }

  const handleTBLMainMenuButton = () => { setActivity('To_Buy_Lists') };  

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
