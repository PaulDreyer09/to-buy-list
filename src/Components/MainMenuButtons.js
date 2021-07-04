
function MainMenuButtons(props){
    return (
    <div className='MainMenuButtons container container-fluid'>
        <a onClick={() => props.handleMainMenuButton(1)} className='btn-block mainMenuButton' >To Buy Lists</a>
        <a onClick={() => props.handleMainMenuButton(2)} className='btn-block mainMenuButton' >Shopping Lists</a>        
        <a onClick={() => props.handleMainMenuButton(3)} className='btn-block mainMenuButton' >Went shopping</a>        
    </div>);
}

export default MainMenuButtons;