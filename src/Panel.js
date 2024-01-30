import './Panel.css';
const Panel = () => {
    return(
        <div class="panel">
            <div class="menu border">
                <i class="fa-solid fa-bars"></i>
                <p class="menu-text">All</p>
            </div>

            <div class="panel-ops">
                <p class="border">Amazon Mini TV</p>
                <p class="border">Sell</p>
                <p class="border">Gift Cards</p>
                <p class="border">Amazon Pay</p>
                <p class="border">Coupons</p>
                <p class="border">Gift Ideas</p>
                <p class="border">Shrihari's Amazon.in</p>
                <p class="border">Kindle eBooks</p>
                <p class="border">Sports, Fitness & Outdoors</p>
            </div>

            <div class="deals">
                <p>New Launches from Mobiles, Electronics & more | Shop Now</p>
            </div>
        </div>
    );
}

export default Panel;