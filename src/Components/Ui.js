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
    addMethod(){

    }
    handleTBLAddItemButton = (id) => {
        return () => { 
            //Change displayForm to false for the list containing the clicked button
            //This method returns another method so each button has its own method that points directly to its list
            let index = this.state.toBuyLists.findIndex(x => x.id === id);
            if(index !== -1){
                let temp = this.state.toBuyLists[index];
                let tempList = this.state.toBuyLists;
                temp.displayForm = true;
                tempList[index] = temp;
                this.setState({toBuyLists: tempList});
            }else{
                console.log('Dude what did you click?');
            }
        }
    };

    
    render(){
        return (
            <div>
                <AppHeader title={this.state.title}/>
                <ContentPage activity={this.state.activity} toBuyLists={this.state.toBuyLists} 
                    handleTBLMainMenuButton={this.handleTBLMainMenuButton}
                    handleTBLAddItemButton={ () => this.handleTBLAddItemButton}
                /> 
            </div>
        )
    }
}

export default UI;