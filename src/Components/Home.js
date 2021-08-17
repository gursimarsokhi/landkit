import React from 'react'
import { NavLink } from 'react-router-dom';
import meetings from '../Assets/meetings.jpg';
import '../content.css';
import Customers from './Customers';
import Description from './Description';
import Footer from './Footer';
import HandleDesign from './HandleDesign';
import Sample from './Sample';
import Slider from './Slider';
const Home = () => {
    return (
        <>
      <div className="container">
        <div className="row">
            <div className="col headerContent">
                <div className="title">
                    <h2>Welcome to <span className="blueText"> Landkit.</span></h2>
                    <h2>Develop anything.</h2>
                </div>
                <p className="headerDesc">
                Buid a beautiful modern website with flexible Bootstrap components built from scratch. 
                </p>
                <div className="allPages">
                    <button>View all pages <i class="fas fa-arrow-right"></i></button>
                    <button className="documentation">Documentation</button>
                </div>
            </div>
            <div className="col">
            <img className="imageSize"  src={meetings}/>
            </div>
        </div>
      </div>
      <Description/>
      <Sample/>
      <Customers/>
      <HandleDesign/>
      {/* <Footer/> */}
      </>
    )
}
export default Home