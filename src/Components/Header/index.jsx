import React, { useState } from 'react';
import reactDom from 'react-dom';
import '../Header/style-module.css';
function Header() {

    const [visability, setVisability] = useState(true)
    function visabilityNawigate() {
        var a = document.getElementById('header-menu').style.display = `${visability === true ? 'flex' : 'none'}`;
        var b = document.getElementById('header-autorize').style.display = `${visability === true ? 'flex' : 'none'}`;
        document.body.style.overflow = `${visability === true ? 'hidden' : 'auto'}`;
        setVisability(!visability)
        console.log(visability);
    }

    return (
        < section className="header row" >
            <div className='container col-10 col-xl-8'>
                <h1 className='header__title'>Alivio</h1>

                <ul className="header-menu" id='header-menu'>
                    <li className="header-menu__item"><a href="">Why Alivio</a></li>
                    <li className="header-menu__item"><a href="">Solutions</a></li>
                    <li className="header-menu__item"><a href="">Community</a></li>
                    <li className="header-menu__item"><a href="">Pricing</a></li>
                    <li className="header-menu__item header-autorize__visability"><a href="">Sign-in</a></li>
                    <li className="header-menu__item header-autorize__visability"><button className='btnFullSite'>Start Trial</button></li>
                </ul>
                <div className="header-autorize" id='header-autorize'>
                    <div> <a href="#" className="header-autorize__link">Sign-in</a></div>
                    <button className='btnFullSite'>Start Trial</button>
                </div>

                <button className='header__bnt-naw' onClick={visabilityNawigate} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b6987" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
            </div>
        </section >


    );

}
export default Header