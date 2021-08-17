import React from 'react'
import meetingTwo from '../Assets/v-meeting.jpg';
import '../content.css';

const Sample = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                      <div className="formBox">
                            {/*sample form */}
                            <div className="formImage">
                                <img className="imageSizeTwo" alt="pan"  src={meetingTwo}/>
                            </div> 
                            <div className="formContent">
                                <form>
                                <input className="formControl" type="text" placeholder="Name"/>
                                <input className="formControl" type="text" placeholder="Email"/>
                                <input className="formControl" type="text" placeholder="Password"/>
                                <button className="sampleSubmit">Download Sample</button>
                                </form>
                            </div>                           
                      </div>
                       
                    </div>
                    <div className="col">
                        <div className="resourceContent">
                            <h2>The most useful resource <span>ever created for  dev</span></h2>
                            <p>Enim labore anim Lorem id cupidatat eiusmod proident nostrud ullamco excepteur sunt esse aute. Do enim sit non esse sunt enim. Et duis labore nostrud aute.</p>
                            <div className="row">
                            <div className="col"><i class="fas fa-check-circle"></i> <span className="iconText">Lifetime Updates</span></div>
                            <div className="col"><i class="fas fa-check-circle"></i><span className="iconText">Lifetime Updates</span></div>
                            </div>
                            <div className="row">
                            <div className="col"><i class="fas fa-check-circle"></i> <span className="iconText">Lifetime Updates</span></div>
                            <div className="col"><i class="fas fa-check-circle"></i> <span className="iconText">Lifetime Updates</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sampleContainer">
                <div className="sampleRow">
                    <div className="col">
                        <div className="resourceContent">
                                <h2>The most useful resource <span className="greenText">ever created for  dev</span></h2>
                                <p>Enim labore anim Lorem id cupidatat eiusmod proident nostrud ullamco excepteur sunt esse aute. Do enim sit non esse sunt enim. Et duis labore nostrud aute.</p>
                        </div>
                        <div className="sampleRow">
                            <div className="col"><i class="fas fa-code"></i></div>
                            <div className="col">
                                <p className="blackText">Bootstrap users since the beginning</p>
                                <p>Sint aute minim ipsum magna sunt consequat eiusmod.</p>
                            </div>
                        </div>
                        <div className="sampleRow">
                            <div className="col"><i class="fas fa-code"></i></div>
                            <div className="col">
                                <p className="blackText">Bootstrap users since the beginning</p>
                                <p>Sint aute minim ipsum magna sunt consequat eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img className="themeSize" src={meetingTwo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sample