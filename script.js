var form = document.getElementById('sheet'); // Removed '#' from ID selector
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(form), // Removed '#' from ID selector
    }).then(
        response => response.json()
    ).then(html => {
        // Open 'd.html' in a new window
        window.open('done.html', '_blank');
    });
});
