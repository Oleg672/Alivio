import React from "react";
import './style-module.css'
import Video1 from '../../images/video1.png';
import Play from '../../images/play-white.png';

function About() {
    return (
        <section className="About row">
                {/* <div className="AboutInner col-10 col-xl-8"> */}
                    <div className="About__title col-10 col-md-10 col-xl-6">
                        <h2>Let's hear about Kayla's success story</h2>
                        <p>See how well Alivio works in a real customer’s life. </p>
                        <button className='btnFullSite' >Let’s get started</button>
                    </div>
                    <div className="About__video col-10 col-md-10 col-xl-6">
                        <img src={Video1} alt="" />
                        <button className="About__video-btn"><img className="About__video-btnIMG" src={Play} alt="" /></button>
                    </div>
                {/* </div> */}

            







        </section>

    )
}
export default About