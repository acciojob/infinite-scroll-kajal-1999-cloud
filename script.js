//your code here!

//your code here!
// Function to add more list items
function addMoreItems() {
    const list = document.getElementById('infi-list');
    const lastListItem = list.lastElementChild;

    for (let i = 1; i <= 2; i++) {
        const newItem = document.createElement('li');
        newItem.textContent = `List Item ${list.childElementCount + i}`;
        list.appendChild(newItem);
    }
}

// Event listener to detect when the user scrolls to the end of the list
document.addEventListener('scroll', function () {
    const list = document.getElementById('infi-list');
    const lastListItem = list.lastElementChild;
    const lastItemOffset = lastListItem.offsetTop + lastListItem.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastItemOffset - 20) {
        // Load more items when the user is near the end of the list
        addMoreItems();
    }
});

// Initially add about 10 list items
addMoreItems();