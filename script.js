let routes = [];
let finances = {
    balance: 100000, // Starting balance
};

function addRoute() {
    const routeName = document.getElementById('route-name').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const popularity = parseInt(document.getElementById('popularity').value);

    if (routeName && !isNaN(distance) && !isNaN(popularity)) {
        const route = {
            name: routeName,
            distance: distance,
            popularity: popularity,
        };

        // Add the route to the routes array
        routes.push(route);

        // Deduct expenses for adding a new route
        const routeCost = calculateRouteCost(distance);
        finances.balance -= routeCost;

        // Update UI
        displayRoutes();
        displayFinancialOverview();
    }
}

function calculateRouteCost(distance) {
    // Basic cost calculation for demonstration purposes
    return distance * 10;
}

function displayRoutes() {
    const routesContainer = document.getElementById('routes-container');
    routesContainer.innerHTML = '<h2>Routes Management</h2>';

    if (routes.length === 0) {
        routesContainer.innerHTML += '<p>No routes added yet.</p>';
    } else {
        routesContainer.innerHTML += '<ul>';
        routes.forEach((route) => {
            routesContainer.innerHTML += `<li>${route.name} - Distance: ${route.distance} km, Popularity: ${route.popularity}</li>`;
        });
        routesContainer.innerHTML += '</ul>';
    }
}

function displayFinancialOverview() {
    const financialContainer = document.getElementById('financial-container');
    financialContainer.innerHTML = `<h2>Financial Overview</h2><p>Balance: $${finances.balance}</p>`;
}
