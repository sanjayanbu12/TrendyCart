// import logo from "../style/images/logo.png";

function navbar(){
    return `
    <div id="navbar">
        <div id="nav-a" onclick = "window.location.href = './index.html'">
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
                <p>Sign up <br> Sign in</p>
            </div>

            <div class="flag" id="wind">
                <h3>Welcome back!</h3>
                <button onclick = "window.location.href = './signin.html'"
                >Sign In</button>
                <button onclick = "window.location.href = './signUp.html'">Join Free</button>
<p>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller.Customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones.</p>
                <h2 style="color: black;">My Trendy Cart</h2>
                </div>
        </div>
        
        <div id="nav-e">
            <i class="fab fa-jedi-order fa-2x"></i>
            <p>orders</p>
        </div>
        <div id="nav-f" onclick = "window.location.href = './shoppingcart.html'">
        <p id="cartCount">x</p>
        <i class="fas fa-shopping-cart fa-2x"></i>
            <p>cart</p>
        </div>
       
    </div>     
        </div>
    </div>`
}

export default navbar;