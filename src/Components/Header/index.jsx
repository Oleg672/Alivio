import React from 'react';
import '../Header/style-module.css';
function Header() {

    return ( <div className='container col-10 col-xl-8'>
        < div className="header" >
           
                <h1 className='header__title'>Alivio</h1>
                <ul className="header-menu">
                    <li className="header-menu__item"><a href="">Why Alivio</a></li>
                    <li className="header-menu__item"><a href="">Solutions</a></li>
                    <li className="header-menu__item"><a href="">Community</a></li>
                    <li className="header-menu__item"><a href="">Pricing</a></li>
                </ul>
                <div className="header-autorize">
                    <a href="#" className="header-autorize">Sign-in</a>
                    <button className='btnFullSite'>Start Trial</button>
                </div>
            </div >
        </div>

    );

}
export default Header