import React from "react";
import './style-module.css'

import Photo from '../../images/photo.png';
import Head from '../../images/head.png';

function Product() {
    return (

        <section className="product row">
            <div className="photo col-10 col-xl-4">
                <div className="photo__img">
                    <img src={Photo} alt="" />
                </div>
                <div className="customized">
                    <div className="customized__header">Customized For</div>
                    <br />
                    <div className="customized__imgWrap">
                        <img className="customized__img" src={Head} alt="" />
                    </div>

                    <span className="customized__name">Mikayla</span>
                    <h6 className="customized__contacts">Your custom contents</h6>
                    <ul className="customized__list">
                        <li className="customized__item">Understand Your Stress</li>
                        <li className="customized__item">Anger Management</li>
                    </ul>
                </div>
            </div>
            <div className="product__description col-10 col-xl-5">
                <p className="product__descHeader">Our product</p>
                <h2 className="product__title">You tell us your stress, We make your diary</h2>
                <p className="product__desc">Everyone experiences it, and in different ways. <br></br> Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
                <button className='btnFullSite' >Find Your Way</button>

            </div>

        </section>

    )
}
export default Product