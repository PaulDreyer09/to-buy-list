import MainMenuButtons from './MainMenuButtons';
import ToBuyListsPage from './ToBuyListsPage';
function ContentPage(props){
    
    return(
        <div id='ContentPage'>           
            
            {(props.activity == 'Main_Menu' ? <MainMenuButtons handleTBLMainMenuButton={props.handleTBLMainMenuButton}/> : 
            (props.activity == 'To_Buy_Lists' ? <ToBuyListsPage lists={props.toBuyLists}/> : <></>))}
 
        </div>        
    );
}

export default ContentPage;