document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the modal message
    const modal = document.getElementById('popup-modal');
    modal.style.display = 'block';

    // Clear the form fields
    this.reset();

    // Hide the modal after 2 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000);
});