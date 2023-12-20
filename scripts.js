// api.js
document.addEventListener('DOMContentLoaded', function () {
    fetchItems()
})
function fetchItems() {
    const token = localStorage.getItem('accessToken');

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

