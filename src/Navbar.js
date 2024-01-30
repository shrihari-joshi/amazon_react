
import './Navbar.css';

const Navbar = () => {
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    return (
        
        <div className="navbar">
            <div className="nav-logo border">
                <div className="logo"></div>
            </div>

            <div class="nav-address border">
                <span class="add-first">Deliver to Shrihari</span>
                <div class="add-icon">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="add-sec">Mumbai 400057</p>
                </div>
            </div>

            <div class="nav-search">
                <select class="search-select">
                    <option>All</option>
                </select>
                <input placeholder="Search Amazon" class="search-input"/>
                <div class="search-icon">
                    <i class="fa-solid fa-magnifying-glass icon"  ></i>
                </div>
            </div>

            <div className="nav-lang border">
                <div className="lang"></div>
                <p><span className="lang-text">EN</span></p>
            </div>

            <div className="nav-acc border">
                <span className="acc-one">Hello Shrihari</span>
                <p className="acc-two">Account & Lists</p>
            </div>

            <div className="nav-order border">
                <span className="order-one">Returns</span>
                <p className="order-two">& Orders</p>
            </div>

            <div className="nav-cart border">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
           
        </div>
    );
}

export default Navbar