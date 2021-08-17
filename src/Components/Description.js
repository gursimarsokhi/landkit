import React from 'react'
import code from '../Assets/code.png';
import '../content.css';

const Description = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col">
               <img className="codeIcon" src={code} alt="pan"/>
                <h3>Build for developers</h3>
                <p>
                   Nisi nostrud et cupidatat nisi ullamco ad aute ad ad elit Lorem sint sint amet.Irure exercitation laborum esse amet ullamco deserunt mollit magna duis qui aute veniam.
                </p>
            </div> 
            <div className="col">
            <img className="codeIcon" src={code} alt="pan"/>
                <h3>Design for developers</h3>
                <p>
               Dolor deserunt laboris sint duis.Ex deserunt enim tempor esse esse do qui.Duis qui amet exercitation dolor et sunt officia.
                </p>
            </div> 
            <div className="col">
            <img className="codeIcon" src={code} alt="pan"/>
                <h3>Documentation for everything</h3>
                <p>
                    Dolore nisi enim elit mollit cupidatat cillum.Anim nostrud eu exercitation eu dolore pariatur aute duis ut labore pariatur sunt minim.
                </p>
            </div>   
      
            </div>
        </div>
    )
}
export default Description