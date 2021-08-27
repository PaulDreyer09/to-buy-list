
function MainMenuButtons(props){
    return (
    <div className='MainMenuButtons container container-fluid'>
        <a onClick={() => props.handleMainMenuButton(1)} className='btn-block mainMenuButton' >Wishlists</a>
        <a onClick={() => props.handleMainMenuButton(2)} className='btn-block mainMenuButton' >Shopping Lists</a>
    </div>);
}

export default MainMenuButtons;