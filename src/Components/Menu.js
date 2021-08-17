import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import '../content.css';
const Home = () => {
    const [show, setShow] = useState(false);
    return (
        
        <div className="navContainer">
           <header>
               <nav className={"navbar " + (!show ? 'h-nav' : 'h-navbar')}>
               <button className="buttonLogo" onClick={()=>setShow(!show)}><i class="fas fa-bars"></i></button>
                <ul className={"navList " + (!show ? 'isVisible' : 'isNotVisible')}>
                    <div className="landkitLogo">
                    <NavLink activeClassName to="/"><span>Landkit.</span></NavLink>
                    </div>
                   <li>    <NavLink activeClassName to="/landings"><span>Landings</span></NavLink>   </li> 
                   <li>    <NavLink activeClassName to="/pages"><span>Pages</span></NavLink> </li> 
                   <li>    <NavLink activeClassName to="/landings"><span>Account</span></NavLink>   </li> 
                   <li>   <NavLink activeClassName to="/pages"><span>Documentation</span></NavLink> </li> 
                   <div className="buyNowBox">
                  <button className="buyNow">Buy Now</button>
                  </div>
                </ul>
               
               </nav>
             
            </header> 
           
        </div>
    )
}
export default Home