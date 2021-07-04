import MainMenuButtons from './MainMenuButtons';
import ToBuyListsPage from './ToBuyListsPage';
import ShoppingListsPage from './ShoppingListsPage';
function ContentPage(props){    
    return(
        <div id='ContentPage'>           
            
            {(props.activity == 'Main_Menu' ? <MainMenuButtons handleMainMenuButton={props.handleMainMenuButton}/> : 
                (props.activity == 'To_Buy_Lists' ? 
                    <ToBuyListsPage 
                    lists={props.itemLists} 
                    handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                    handleDeleteTblListItem={props.handleDeleteTblListItem}
                    handleDeleteTBL={props.handleDeleteTBL}
                    handleAddNewTBL={props.handleAddNewTBL}
                    toggleImportant={props.toggleImportant}/> 
                        : 
                    (props.activity == 'Shopping_Lists' ? 
                        <ShoppingListsPage 
                        lists={props.itemLists} 
                        handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                        handleDeleteTblListItem={props.handleDeleteTblListItem}
                        handleDeleteTBL={props.handleDeleteTBL}
                        handleAddNewTBL={props.handleAddNewTBL}
                        toggleImportant={props.toggleImportant}/> 
                        : 
                    '')
                )
            )}
        </div>        
    );
}

export default ContentPage;