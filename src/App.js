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
          if(item.listId == list.id){
            listItems.push({
              id: item.id,
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

  const addListItem = async (listId, listItem) => {
    // let lists = [...toBuyLists];
    // let targetList = lists[listId];    
    
    // targetList.items.push(listItem);
    // lists[listId] = targetList;

    // setToBuyLists(lists);

    const newItem = {listId: listId, ...listItem};
    const res = await fetch('http://localhost:5000/listItems', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newItem)
    });

    const data = await res.json();
    console.log(data);
    
    //Add task to list
    let lists = [...toBuyLists];
    lists[listId].items.push({
      id: data.id,
      name: data.name,
      quantity: data.quantity,
      important: data.important });
    
      setToBuyLists(lists);

  }
  
  const deleteListItem = async (listIndex, listItemId) => {
    await fetch(`http://localhost:5000/listItems/${listItemId}`, {method: 'DELETE'});
    let lists = [...toBuyLists];
    let targetList = lists[listIndex].items;

    lists[listIndex].items = targetList.filter((listItem) => (listItem.id != listItemId));

    setToBuyLists(lists);
  }

  const handleTBLMainMenuButton = () => { setActivity('To_Buy_Lists') };  

  //Submit new ListItem to a ToBuyList
  const handleTBLSubmitItemButton = (listId, {id, name, quantity, important}) => {
      if(!name)
          {alert('Please enter a name')}
      addListItem(listId, {id: id, name: name, quantity: quantity, important: important})
      
  }

  //Delete ListItem from ToBuyList
  const handleDeleteTblListItem = (listIndex, listItemIndex) => {
      const listItemId = toBuyLists[listIndex].items[listItemIndex].id;
      deleteListItem(listIndex, listItemId);
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
                  handleDeleteTblListItem={handleDeleteTblListItem}
                  handleTBLSubmitItemButton={handleTBLSubmitItemButton}
                  toggleImportant={toggleImportant}
              /> 
          </div>
    </div>
  );
}

export default App;
