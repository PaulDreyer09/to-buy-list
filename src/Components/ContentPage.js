import MainMenuButtons from './MainMenuButtons';
import ToBuyListsPage from './ToBuyListsPage';
import ShoppingListsPage from './ShoppingListsPage';
function ContentPage(props){    
    console.log('ContentPage',props.TBLList);
    return(
        <div id='ContentPage'>           
            
            {(props.activity == 'Main_Menu' ? <MainMenuButtons handleMainMenuButton={props.handleMainMenuButton}/> : 
                (props.activity == 'To_Buy_Lists' ? 
                    <ToBuyListsPage 
                    TBLList={props.TBLList} 
                    handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                    handleDeleteTBLListItem={props.handleDeleteTBLListItem}
                    handleDeleteTBL={props.handleDeleteTBL}
                    handleAddNewTBL={props.handleAddNewTBL}
                    toggleImportant={props.toggleImportant}/> 
                        : 
                    (props.activity == 'Shopping_Lists' ? 
                        <ShoppingListsPage 
                        SLList={props.SLList} 
                        TBLList={props.TBLList} 
                        handleTBLSubmitItemButton={props.handleTBLSubmitItemButton}
                        handleDeleteTBLListItem={props.handleDeleteTBLListItem}
                        handleDeleteTBL={props.handleDeleteTBL}
                        handleAddNewSL={props.handleAddNewSL}
                        toggleImportant={props.toggleImportant}/> 
                        : 
                    '')
                )
            )}
        </div>        
    );
}

export default ContentPage;