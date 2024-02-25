document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get comment value
    var comment = document.getElementById("comment").value;

    // Do something with the comment value (for example, log it)
    console.log("Comment:", comment);

    // You can send the comment value to a server using AJAX here if needed

    // Reset form
    this.reset();
});