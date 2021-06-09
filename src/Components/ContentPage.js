import MainMenuButtons from './MainMenuButtons';
import ToBuyListsPage from './ToBuyListsPage';
function ContentPage(props){
    
    return(
        <div id='ContentPage'>           
            
            {(props.activity == 'Main_Menu' ? <MainMenuButtons handleTBLMainMenuButton={props.handleTBLMainMenuButton}/> : 
            (props.activity == 'To_Buy_Lists' ? 
                <ToBuyListsPage lists={props.toBuyLists} 
                handleTBLAddItemButton={ props.handleTBLAddItemButton}
                handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}/> : 
                <div className='Placeholder for last activity'></div>))}
 
        </div>        
    );
}

export default ContentPage;