import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SldierOne from '../Assets/sliderOne.jpg';
import SldierTwo from '../Assets/sliderTwo.jfif';
import '../content.css';
class Slider extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" items={1} loop margin={20} mouseDrag nav >
        <div class="item">
          <div>
          <img src={SldierOne}  className="itemSize"/>
          </div>
          
          <div className="itemText">
          <h3>airbnb</h3>
          <p>"Excepteur veniam nulla sit minim sit voluptate in elit proident adipisicing elit."</p>
          </div>
        </div>
        <div class="item">
          <img src={SldierTwo}  className="itemSize"/>
          <div className="itemText">
          <h3>airbnb</h3>
          <p>Excepteur veniam nulla sit minim sit voluptate in elit proident adipisicing elit.</p>
          </div>
        </div>
        <div class="item">
          <img src={SldierOne} className="itemSize" />
          <div className="itemText">
          <h3>airbnb</h3>
          <p>Excepteur veniam nulla sit minim sit voluptate in elit proident adipisicing elit.</p>
          </div>
        </div>
        <div class="item">
          <img src={SldierTwo}  className="itemSize"/>
          <div className="itemText">
          <h3>airbnb</h3>
          <p>Excepteur veniam nulla sit minim sit voluptate in elit proident adipisicing elit.</p>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
export default Slider