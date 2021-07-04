import AppHeader from './Components/AppHeader';
import ContentPage from './Components/ContentPage';
import React, {useEffect, useState} from 'react';

function App() {
  const activities = [
  {title: 'Main Menu' ,name: 'Main_Menu'},
  {title: 'To Buy Lists' ,name: 'To_Buy_Lists'},
  {title: 'Shopping Lists' ,name: 'Shopping_Lists'},
  {title: 'Went Shopping' ,name: 'Went_Shopping'},]

  const [activity, setActivity] = useState('Main_Menu');//activity keeps track of the page that needs to be shown
  //activity names: Main_Menu, To_Buy_Lists

  const [title, setTitle] = useState('Main Menu');

  //List items for ToBuyListPage TEST use before adding database
  const [itemLists, setItemLists] = useState([]);

  //Get data from server on start
  useEffect(() => {
    const getData = async () => {
      const listsFromServer = await fetchitemLists();
      const listItemsFromServer = await fetchListItems();

      //Object holding all the lists and their listItems
      let itemLists = [];
      
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

        itemLists.push({id: list.id, name: list.name, items: listItems, displayForm: false, listType: list.listType});
      })          
      setItemLists(itemLists) ;
    }
    getData();
    
  }, []);

  //Fetch itemLists
  const fetchitemLists = async () => {
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

  //POST list item
  const addListItem = async (listId, listItem) => {
    const newItem = {listId: listId, ...listItem};
    const res = await fetch('http://localhost:5000/listItems', 
    {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newItem)
    });

    const data = await res.json();
    console.log(data);
    
    //Add task to list
    let lists = [...itemLists];
    lists[listId].items.push({
      id: data.id,
      name: data.name,
      quantity: data.quantity,
      important: data.important });
    
      setItemLists(lists);

  }
  
  //DELETE list item
  const deleteListItem = async (listIndex, listItemId) => {
    await fetch(`http://localhost:5000/listItems/${listItemId}`, {method: 'DELETE'});

    //Update state
    let lists = [...itemLists];
    let targetList = lists[listIndex].items;

    lists[listIndex].items = targetList.filter((listItem) => (listItem.id != listItemId));

    setItemLists(lists);
  }

  //POST toBuyList
  //listType: 0 = ToBuyList, 1 = ShoppingList
  const AddList = async (listName, listType) => {
    const newList = {name: listName, listType: listType}
    const res = await fetch('http://localhost:5000/lists', {
      method:'POST',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify(newList)
    });
    const data = await res.json();
    console.log('POST newList', data);

    //Update state    
    setItemLists([...itemLists, {...data, items: []}]);   
  }

  //DELETE toBuyList

  //Add toBuyList
  const handleAddNewTBL = async (listName) => {
    if(!listName){
      alert('Please enter list Name');
      return false;
    }
    else{
      AddList(listName, 0);
      return true;
    }
  }

    //Add ShoppingList
    const handleAddNewSL = async (listName) => {
      if(!listName){
        alert('Please enter list Name');
        return false;
      }
      else{
        AddList(listName, 1);
        return true;
      }
    }

  //Delete toBuyList
  const handleDeleteTBL = async (listId) => {
    const listIndex = itemLists.findIndex((list) => list.id == listId);

    if(listIndex < 0){
      alert('Something went wront trying to delete toBuyList');
      return false;
    }
    else{
      let targetList = itemLists[listIndex];

      //All items must be deleted from the list to avoid having items with no parent list
      if(targetList.items.length != 0){
        alert('Please delete all items from the list first');
        return false;
      }
      else{
        //Detele the list        
        await fetch(`http://localhost:5000/lists/${listId}`, {method:'DELETE'});

        //Update state
        setItemLists(itemLists.filter((list) => list.id != listId));
      }      
    }
  }

  //Handle changing activities from passing an activity object from activies
  const changeActivity = (activityObj) => {
    setActivity(activityObj.name);
    setTitle(activityObj.title);
  }

  //State to display back button or not
  const [displayBackButton, setDisplayBackButton] = useState(false);

  //Change Activities at main menu
  const handleMainMenuButton = (index) => {
    changeActivity(activities[index])
    setDisplayBackButton(true);
  }  

  //Change activity back to Main_Menu
  const handleBackButton = () => {
    changeActivity(activities[0]);    
    setDisplayBackButton(false);
  };

  //Submit new ListItem to a ToBuyList
  const handleTBLSubmitItemButton = (listId, {id, name, quantity, important}) => {
      if(!name){
        alert('Please enter a name')
      }
      else{
        addListItem(listId, {id: id, name: name, quantity: quantity, important: important})
      }      
  }

  //Delete ListItem from ToBuyList
  const handleDeleteTblListItem = (listIndex, listItemIndex) => {
      const listItemId = itemLists[listIndex].items[listItemIndex].id;
      deleteListItem(listIndex, listItemId);
  };

  //Toggle item being important to show a star next to the item name
  const toggleImportant = (listIndex, itemIndex) => {
    let lists = [...itemLists];  
    let targetList = lists[listIndex];
    let listItem = targetList.items[itemIndex];

    listItem.important = listItem.important ? false : true;
    targetList[listIndex] = listItem;

    lists[listIndex] = targetList;
    setItemLists(lists);
  }

  console.log(itemLists);

  return (  
    <div className="App">
       <div>
              <AppHeader 
                  title={title} 
                  handleBackButton={handleBackButton}
                  displayBackButton={displayBackButton}/>
              <ContentPage 
                  activity={activity} 
                  itemLists={itemLists} 
                  handleAddNewTBL={handleAddNewTBL}
                  handleAddNewSL={handleAddNewSL}
                  handleDeleteTBL={handleDeleteTBL}
                  handleMainMenuButton={handleMainMenuButton}                  
                  handleDeleteTblListItem={handleDeleteTblListItem}
                  handleTBLSubmitItemButton={handleTBLSubmitItemButton}                  
                  toggleImportant={toggleImportant}/> 
          </div>
    </div>
  );
}

export default App;
