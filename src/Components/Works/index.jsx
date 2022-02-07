import React from "react";
import './style-module.css'
import Img1 from '../../images/item1.png';
import Img2 from '../../images/item2.png';
import Img3 from '../../images/item3.png';

function Works() {
    return (

        <section className="works row">
            <div className='container col-10 col-xl-8'>
                
                    <div className="works__title col-12 .col-md-6">
                        <span>How it works</span>
                        <h2>Understand & Release the stress in 3 steps</h2>
                    </div>

                    <p className="works__description col-12 .col-md-6">Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.</p>

                    <ul className="works__list row">
                        <li className="works__item col-4">
                            <span className="works__itemNUM">01</span>
                            <h6 className="works__itemTitle" >Personalize</h6>
                            <p className="works__itemDescription">Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!</p>
                            <img className="works__itemIMG" src={Img1} alt="" />
                        </li>
                        <li className="works__item col-4">
                            <span className="works__itemNUM">02</span>
                            <h6 className="works__itemTitle" >Write & Understand</h6>
                            <p className="works__itemDescription">Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!</p>
                            <img className="works__itemIMG" src={Img2} alt="" />
                        </li>
                        <li className="works__item col-4">
                            <span className="works__itemNUM">03</span>
                            <h6 className="works__itemTitle" >Alivio!</h6>
                            <p className="works__itemDescription">Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!</p>
                            <img className="works__itemIMG" src={Img3} alt="" />
                        </li>
                    </ul>
                
            </div>
        </section>

    )
}
export default Works