import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from './Components/AppHeader';
import ContentPage from './Components/ContentPage';
import {bindActionCreators} from 'redux';
import {listActionCreators, itemActionCreators} from './state/index'


function App() {
  const activities = [
    {title: 'Main Menu' ,name: 'Main_Menu'},
    {title: 'Wishlists' ,name: 'Wish_Lists_Page'},
    {title: 'Shopping Lists' ,name: 'Shopping_Lists'},
    {title: 'Went Shopping' ,name: 'Went_Shopping'},]

  const [activity, setActivity] = useState('Main_Menu');//activity keeps track of the page that needs to be shown
  //activity names: Main_Menu, To_Buy_Lists

  const [title, setTitle] = useState('Main Menu');

  //List items for ToBuyListPage TEST use before adding database

  const state = useSelector(state => state.list);

  const dispatch = useDispatch();
  const {fetchLists} = bindActionCreators(listActionCreators, dispatch);
  const {fetchItems} = bindActionCreators(itemActionCreators, dispatch);

  useEffect(() => {    
    fetchLists();
    fetchItems();        
  },[state, fetchLists, fetchItems]);
  
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

  return (  

    <div className="App">
       <div><AppHeader 
                  title={title} 
                  handleBackButton={handleBackButton}
                  displayBackButton={displayBackButton}
              />
              <ContentPage 
                  activity={activity} 
                  handleMainMenuButton={handleMainMenuButton}                  

              /> 

          </div>
    </div>
  );


}

export default App;
