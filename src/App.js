import logo from "./logo.svg";
import banner from "./banner.svg";
import users from "./users.svg";
import start from "./start.svg"
import dollar from "./dollar.svg";
import who from "./who_img.jpg";
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


    <section >
      <div class='features'> 
      <div class="circle">
      <img class='features_icon' src={start} alt="image"></img>
    </div>
    <div class="circle">
    <img class='features_icon' src={dollar} alt="image"></img>
    </div>
    <div class="circle">
    <img class='features_icon' src={users} alt="image"></img>
    </div>
      </div>
    </section>

    <section >
      <div class='features-text'> 
      <div>
      24/7 Services
    </div>
    <div>
      Reasonable Rates
    </div>
    <div>
      Experinced Team
    </div>
      </div>
    </section>

    <section>
      <div class="page_width">
      <div class="who who-sec">
      <div class="who-img">
          <img src={who} alt=""></img>
        </div>
        
        <div>
          <div class="who-heading">Who we<span> Are?</span></div>
          <div class="who-para">Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</div>
          <div class="who-para">We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience. Our experts will give you the most satisfying experience and professionalism. On your demand, all of our best home maintenance and renovation services are available at the very right time and place.</div>
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
                    <a>Home</a>
                </li>
                <li>
                    <a>Services</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
            </ul>
        </div>
        <div class="coloumn_three">
            <ul>
                <li>
                    <a>Facebook</a>
                </li>
                <li>
                    <a>Twitter</a>
                </li>
                <li>
                <a>Linkedin</a>
                </li>
                <li>
                <a>Instagram</a>
                </li>
            </ul>
        </div>
        <div class="coloumn_four">
            <ul>
                <li>
                <a>+971 58 67 47 123</a>
                </li>
                <li>
                <a>info@homecomfort.com</a>
                </li>
                <li class="news_letter">
                    <input type="text" placeholder="Enter Email"></input>
                <button class="btn">send</button></li>
                </ul>
            </div>
            
            </footer>
            <div class='copyright'><hr></hr></div>
            <div class='copyright'>&copy;Copyrights reserved by HomeComfort</div>
    </div>
  );
}

export default App;
