function AppHeader(props){
    return (
        <div className="AppHeader"> 
            {props.displayBackButton ? <a className='headerBackButton' href='#MainMenu' onClick={props.handleBackButton}><i className='fa fa-arrow-left'></i></a> : ''}
            <h1>{props.title}</h1>               
        </div>
  );
}

export default AppHeader;