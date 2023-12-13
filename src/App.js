import logo from "./logo.svg";
import banner from "./banner.svg";
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <div class="logo_img " id="">
            <img src={logo} alt="image"></img>
        </div>
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Service
                </li>
                <li>
                    Contact
                </li>
                <li class="header_btn">
                    +8980003809343
                </li>
            </ul>
        </nav>
    </header>
    <section class="banner_section">
        <div class="page_width">
            <div class="banner_inner_section">
                <div class="banner_content">
                    <small>Best in Dubai</small>
                    <p class="intro">Welcome To</p>
                    <h2>Home <span>Comfort</span></h2>
                    <p class="description">
                        Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with
                        home comfort professional experts.
                    </p>
                    <div class="banner_button">
                        <button class=" btn_1">Contact US</button>
                        <button class=" btn_2">Learn More</button>
                    </div>
                </div>
                <div class="banner_img">
                    <img src={banner} alt=""></img>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="coloumn_one">
            <ul>
                <li>
                    <img src={logo} alt=""></img>
                </li>
                <li>
                    We make sure that your saftey is never compromised.This is why we hire all the staff under the root of Home Comfort, just for your satisfaction.
                </li>
            </ul>
        </div>
        <div class="coloumn_two">
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Services
                </li>
                <li>
                    Contact Us
                </li>
            </ul>
        </div>
        <div class="coloumn_three">
            <ul>
                <li>
                    Facebook
                </li>
                <li>
                    Twitter
                </li>
                <li>
                    Linkedin
                </li>
                <li>
                    Instagram
                </li>
            </ul>
        </div>
        <div class="coloumn_four">
            <ul>
                <li>
                    +971 58 67 47 123
                </li>
                <li>
                    info@homecomfort.com
                </li>
                <li class="news_letter">
                    <input type="text" placeholder="Enter Email"></input>
                <button class="btn">send</button></li>
                </ul>
            </div>
            
            
    </footer>
    </div>
  );
}

export default App;
