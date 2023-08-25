//your code here!

const  myList= document.getElementById('infi-list');

// Function to add new list items
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = 'New Item'; // You can set the text content here
       myList.appendChild(listItem);
     
    }
}

// Add about 10 list items by default
addListItems(10);

// Function to check if the user has scrolled to the end
function isAtEnd() {
    return myList.scrollTop + myList.clientHeight >= myList.scrollHeight;
}

// Event listener to add more items when scrolling to the end
myList.addEventListener('scroll', () => {
    if (isAtEnd()) {
        addListItems(2); // Add 2 more items
    }
});