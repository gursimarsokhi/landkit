import React from 'react'
import { Link } from 'react-router-dom'
import meetingTwo from '../Assets/v-meeting.jpg';

export default function Landings() {
    const handleSubmit = e => {
        return(
        e.preventDefault()
        )
    }
    return (
        <div>
            {/* <p>landings</p> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                      <div className="formBox">
                            {/*sample form */}
                            <div className="formImage">
                                <img className="imageSizeTwo" alt="pan"  src={meetingTwo}/>
                            </div> 
                            <div className="formContent">
                                <form onSubmit={handleSubmit}>
                                <input className="formControl" type="text" placeholder="Name"/>
                                <input className="formControl" type="text" placeholder="Email"/>
                                <input className="formControl" type="text" placeholder="Password"/>
                                <button className="sampleSubmit">Download Sample</button>
                                </form>
                                <Link to="/"><button className="sampleSubmit">Back</button></Link>

                            </div>                           
                      </div>
                      </div>
                      </div>
                      </div>
        </div>
    )
}
