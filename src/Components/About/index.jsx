import React from "react";
import './style-module.css'
import Video1 from '../../images/video1.png';
//import Play from '../../play-white.png';

function About() {
    return (
        <section className="About row">
            <div className="container col-10 col-xl-8">
                <div className="AboutInner row">
                    <div className="About__title col-6">
                        <h2>Let's hear about Kayla's success story</h2>
                        <p>See how well Alivio works in a real customer’s life. </p>
                        <button className='btnFullSite' >Let’s get started</button>
                    </div>
                    <div className="About__video col-6">
                        <img src={Video1} alt="" />
                    </div>
                </div>

            </div>







        </section>

    )
}
export default About