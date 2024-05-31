function navbar() {
    // Check if the user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Define the HTML for the login section based on the login status
    let loginSection;
    if (loggedInUser) {
        loginSection = `
            <h3>Welcome back, ${loggedInUser.email}!</h3>
            <button onclick="logout()">Log Out</button>
        `;
    } else {
        loginSection = `
            <h3>Welcome back!</h3>
            <button onclick="window.location.href = './signin.html'">Sign In</button>
            <button onclick="window.location.href = './signUp.html'">Create Account</button>
        `;
    }

    return `
    <div id="navbar">
        <div id="nav-a" onclick="window.location.href = './index.html'">
            <img src="../style/images/trendy-shop-logo.png" alt="" id="logo-img">
        </div>
        <div id="nav-b">
            <div>
                <select>
                    <option value="">Products</option>
                    <option value="">Suppliers</option>
                </select>
            </div>
            <div>
                <input type="search" id="search" placeholder="What are you looking for..">
            </div>
            <div>
                <button>Search</button>
            </div>
        </div>
        <div id="nav-c" onmouseover="windOpen()" onmouseout="windClose()">
            <p><i class="fa fa-user-o fa-2x"></i></p>
            <div id="navbar-signin-logo">
                <p>${loggedInUser ? 'Account Profile' : 'Sign up <br> Sign in'}</p>
            </div>
            <div class="flag" id="wind">
                ${loginSection}
                <h2 style="color: black;">My Trendy Cart</h2>
            </div>
        </div>
        <div id="nav-e">
            <i class="fab fa-jedi-order fa-2x"></i>
            <p>orders</p>
        </div>
        <div id="nav-f" onclick="window.location.href = './shoppingcart.html'">
            <p id="cartCount">x</p>
            <i class="fas fa-shopping-cart fa-2x"></i>
            <p>cart</p>
        </div>
    </div>`;
}

// Function to log out the user
function logout() {
    localStorage.removeItem("loggedInUser");
    updateNavbar();
    window.location.href = './signin.html'; // Redirect to signin.html after logout
}

// Function to update the navbar content
function updateNavbar() {
    document.getElementById('navbar').innerHTML = navbar();
}

// Initial render of the navbar
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('navbar-container').innerHTML = navbar();
});

export default navbar;
