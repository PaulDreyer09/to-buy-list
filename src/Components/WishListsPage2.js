import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchLists} from '../actions/listActions';

import WishList from './WishList';

class WishListsPage extends Component{
    constructor(props){
        super(props);
        this.props.fetchLists();

    }

    //Create list items from wishlists
    getLists(){
        return (
            <div>
                {this.props.lists.map((list, index) => 
                    {
                        //console.log(list)
                        return <div><WishList key={index} list={list}/></div>
                    }
                    )}
            </div>
        )
    }

    render(){
        console.log('render error here',this.props)
        return(            
            <div className='WishListsPage'>
                <h2>WishlistsPage</h2>
                {this.props.lists.length > 0 
                    ? this.getLists()
                    : <h3>No wishlists to show</h3>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {lists: state.lists.lists};
}


export default connect(mapStateToProps, {fetchLists})(WishListsPage)