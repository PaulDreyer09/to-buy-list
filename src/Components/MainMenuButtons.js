
function MainMenuButtons(props){
    return (
    <div className='MainMenuButtons container container-fluid'>
        <a onClick={() => props.handleMainMenuButton('To_Buy_Lists')} className='btn-block mainMenuButton' >To Buy Lists</a>
        <a onClick={() => props.handleMainMenuButton('Shopping_Lists')} className='btn-block mainMenuButton' >Shopping Lists</a>        
        <a onClick={() => props.handleMainMenuButton('Went_Shopping')} className='btn-block mainMenuButton' >Went shopping</a>        
    </div>);
}

export default MainMenuButtons;