import MainMenuButtons from './MainMenuButtons';
import ShoppingListsPage from './ShoppingListsPage';
import WishListsPage from './WishListsPage';
function ContentPage(props){    
    return(
        <div id='ContentPage'>
            {(props.activity === 'Main_Menu' ? <MainMenuButtons handleMainMenuButton={props.handleMainMenuButton}/> : 
                (props.activity === 'Wish_Lists_Page' ? 
                    <WishListsPage/>
                :(props.activity === 'Shopping_Lists' ? 
                    <ShoppingListsPage /> 
                : '')
                )
            )}
        </div>        
    );
}

export default ContentPage;