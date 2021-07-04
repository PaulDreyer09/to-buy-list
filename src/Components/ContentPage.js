import MainMenuButtons from './MainMenuButtons';
import ToBuyListsPage from './ToBuyListsPage';
function ContentPage(props){    
    return(
        <div id='ContentPage'>           
            
            {(props.activity == 'Main_Menu' ? <MainMenuButtons handleMainMenuButton={props.handleMainMenuButton}/> : 
            (props.activity == 'To_Buy_Lists' ? 
                <ToBuyListsPage 
                    lists={props.toBuyLists} 
                    handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                    handleDeleteTblListItem={props.handleDeleteTblListItem}
                    handleDeleteTBL={props.handleDeleteTBL}
                    handleAddNewTBL={props.handleAddNewTBL}
                    toggleImportant={props.toggleImportant}/> : 
                <div className='Placeholder for last activity'></div>))}
 
        </div>        
    );
}

export default ContentPage;