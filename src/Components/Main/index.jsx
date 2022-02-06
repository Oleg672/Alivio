import React from 'react';
import './style-module.css';
import mainImg from '../../images/main.png';
function Main() {

    return (
        < div className="main row" >
            <div className="wrap">
                <img className='main__img' src={mainImg} alt="" />
            </div>
            <div className='container col-10 col-xl-8'>
                <h1 className='main__title'>Be aware, Manage well.</h1>
                <p className='main__context'>Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>

                <button className='btnFullSite' >Find Your Way</button>
            </div >
        </div>
    );

}
export default Main