document.addEventListener('DOMContentLoaded', function () {
    fetchItems();
});

function fetchItems() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNDMxMzE3LCJpYXQiOjE3MDI0MzEwMTcsImp0aSI6ImFhYjZhNjc0MWRkZjQwMjA4YzkyNGY4ZjI4NGRhYzc4IiwidXNlcl9pZCI6MX0.P2xDQL81S0svAasKnU1JIG5WxRYmOMn_09zltdOOaB0';

    fetch('http://localhost:8000/apia/item/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayItems(data))
        .catch(error => console.error('Error:', error));
}

function displayItems(items) {
    const itemsContainer = document.getElementById('items');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });
}
