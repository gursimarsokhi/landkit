import React from 'react';
import design from '../Assets/design.jfif';
import '../content.css';
export default function HandleDesign() {
    return (
        <div className="focus-container">
            <div className="focus-row">
            <div className="col">
                <div className="focusBox">
                    <h2>Stay focused on your business.</h2>
                    <h2 className="blueText">Let us handle the design.</h2>
                    <p>Cillum dolore dolor do nostrud do non aliqua incididunt et laboris.Nulla ex elit id pariatur et ullamco consectetur.</p>
                    <div className="sales">
                    <p><span className="blackText">100%</span> Satisfaction</p>
                    <p><span className="blackText">24/7</span> Support</p>
                    <p className="noborder"><span className="blackText">100k+ </span> Sales</p>
                       
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="focusImgBox">
                     <img className="focusImg" src={design}/> 
                </div>
            </div>
            </div>
            <div className="text-center">
                <h2>Fair, Simple pricing for all.</h2>
                <p className="centerTitle">Officia duis consectetur irure exercitation cupidatat ea ut laboris esse dolor consequat magna id sit.</p>
            </div>
        </div>
    )
}
