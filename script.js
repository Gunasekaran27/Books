var overlaybox = document.querySelector(".overlay");
var popupbox = document.querySelector(".popup");
var buttonselect = document.getElementById("add-popup-button");

buttonselect.addEventListener("click", function() {
    overlaybox.style.display = "block";
    popupbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel");

cancelbutton.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent form submission
    overlaybox.style.display = "none";
    popupbox.style.display = "none";
});

var addbutton = document.getElementById("add");
var container = document.querySelector(".container");
var inputbooktitle = document.getElementById("bookname");
var inputbookauthor = document.getElementById("author");
var inputbookcontent = document.getElementById("bookcontent");

addbutton.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Create a new div for the book
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    
    // Insert book details into the div
    div.innerHTML = `
        <h2>${inputbooktitle.value}</h2>
        <h5>${inputbookauthor.value}</h5>
        <p>${inputbookcontent.value}</p>
        <button class="delete-button">Delete</button>
    `;
    
    // Append the new book to the container
    container.append(div);
    
    // Close the popup after adding the book
    overlaybox.style.display = "none";
    popupbox.style.display = "none";

    // Add delete button functionality to the new book container
    var deleteButton = div.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {
        div.remove();  // Remove the book container when delete is clicked
    });

    // Optionally, clear the input fields after adding the book
    inputbooktitle.value = '';
    inputbookauthor.value = '';
    inputbookcontent.value = '';
});

// Attach delete event listener to existing delete buttons
document.querySelectorAll('.delete-button').forEach(function(deleteButton) {
    deleteButton.addEventListener("click", function() {
        var bookContainer = this.closest('.book-container');
        bookContainer.remove(); // Remove the book container
    });
});