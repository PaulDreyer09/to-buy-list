import MainMenuButtons from './MainMenuButtons';
import ToBuyListsPage from './ToBuyListsPage';
function ContentPage(props){
    return(
        <div id='ContentPage'>{/* 
            {(props.activity == 'Main_Menu' ? <MainMenuButtons/> : 
            (props.activity == 'To_Buy_Lists' ? <ToBuyListsPage/> : <></>))}
            */}
            <ToBuyListsPage/>
        </div>        
    );
}

export default ContentPage;