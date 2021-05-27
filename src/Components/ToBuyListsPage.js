let wishLists = [{name: 'Groceries'},
{name: 'Cloths'},
{name: 'Tools'},
{name: 'Games'}];

let ToBuyListsPage = () => (
    <div className='ToBuyListsPage'>
        {wishLists.map((list) => (<h3>list.name</h3>))}
    </div>
);

export default ToBuyListsPage;