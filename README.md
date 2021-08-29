# To-Buy-List React-redux wishlist -> shoppinglist app

This app is a react redux shopping list app which you use first to create a wishlist for items you may want to buy in the future. Once you wish to go shopping you create a shopping list and select items from your wishlist to add to the shopping list before going shoppings.

## Technologies

1) UI framework: React js (https://reactjs.org/)
2) State management: React-redux (https://react-redux.js.org/)
3) API: Json server fake API (https://www.npmjs.com/package/json-server)

# Setup

## Starting json server
This app uses a db.json file to save json data for the shopping/wishlists and the items within those lists
1) Open your console and navigate to the project folder or build folder
2) Start the database server with the command "npm run server"

## Starting runtime server
1) Open your console and navigate to the project folder or build folder
2) Run the command "npm install" and wait for the installation to finish
2) Start the runtime server with the command "npm start"
3) The app will be accessable from https://localhost:5000

# App usage

## App navigation

## Main menu

1) The app starts in the main menu component with 2 buttons, Wishlist and shopping list
2) The wish lists button opens up the wishlists page where you first create a wishlist to add wishlist items.
3) The shopping lists button opens up the shopping lists page to move items from a wishlist to a shopping list.

## Wishlists page

1) Add a new wishlist by clicking on the New List button at the top of the page
2) You can add items, edit the list name or delete the list with the buttons at the top of the wishlist component
3) Add items by clicking the Add Item button
4) To display the items of the list you are using, click the dropdown button at the top right corner of the wishlist component
5) You can edit the item or delete the item you created using the buttons on the right side of the item in the list
6) By double clicking on a wishlist item you mark it as important, displaying a star on the side of the name

## Shopping Lists page

1) Add a new shopping list by clicking on the New List button at the top of the page
2) You can add items, edit the list name or delete the list with the buttons at the top of the shopping list component
3) Add items by clicking the Add Item button, then you may choose to add an item from a shopping list or create a new item from scratch
4) To display the items of the list you are using, click the dropdown button at the top right corner of the shopping list component
5) You can edit the item or delete the item you created using the buttons on the right side of the item in the list
6) By double clicking on a shopping list item you mark it as important, displaying a star on the side of the name
7) When you have finished shopping and want to complete the shopping list, at the bottom of a wishlist that is open, click the "Completed Shopping" button