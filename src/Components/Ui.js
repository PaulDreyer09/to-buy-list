import { Component } from "react";
import MainMenuButtons from './MainMenuButtons';
import AppHeader from './AppHeader';
import ContentPage from './ContentPage';

class UI extends Component{
    constructor(props){
        super(props);
        this.state={
            
            activity: 'Main_Menu',  //activity keeps track of the page that needs to be shown
                                    //activity names: Main_Menu, To_Buy_Lists

            title: 'To Buy Lists',  //Header title
            
            toBuyLists: [   //List items for ToBuyListPage TEST use before adding database
                {id: 'l0', name: 'Groceries', displayForm: false, items: [{id: 1, name:'Apples', quantity: 2}, {id: 2, name:'Bananas', quantity: 2}]},
                {id: 'l2', name: 'Cloths', displayForm: false, items: [{id: 3, name:'Steel Point Boots', quantity: 1}, {id: 4, name:'Cargo Shorts', quantity: 2}]},
                {id: 'l3', name: 'Tools', displayForm: false, items: [{id: 5, name:'Makita Cordless SDS Drill', quantity: 1}, {id: 6, name:'10mm SDS Drill bit', quantity: 2}]},
                {id: 'l4', name: 'Games', displayForm: false, items: [{id: 7, name:'Age of Empires IV', quantity: 2}, {id: 8, name:'Starcraft Remastered HD', quantity: 2}]}],
            
        };

    }
    
    handleTBLMainMenuButton = () => { this.setState({activity: 'To_Buy_Lists'}) };  


    //Delete ListItem from ToBuyList
    handleDeleteTblListItem = (listId, itemId) => {
        let lists = this.state.toBuyLists;
        
        let targetList = lists[listId];
        console.log(targetList);
        targetList.items.splice(itemId, 1);
        console.log(targetList);
        lists[listId] = targetList
        this.setState({toBuyLists: lists});

        console.log('delete', listId);
    }

    
    render(){
        return (
            <div>
                <AppHeader title={this.state.title}/>
                <ContentPage activity={this.state.activity} toBuyLists={this.state.toBuyLists} 
                    handleTBLMainMenuButton={this.handleTBLMainMenuButton}
                    handleTBLAddItemButton={this.handleTBLAddItemButton}
                    handleDeleteTblListItem={this.handleDeleteTblListItem}
                    handleTBLSubmitItemButton={() => this.handleTBLSubmitItemButton}
                /> 
            </div>
        )
    }
}

export default UI;