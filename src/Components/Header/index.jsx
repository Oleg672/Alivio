import React, {useState} from 'react';
import '../Header/style-module.css';
function Header() {

    const [visability,setVisability] = useState(true)
    function visabilityNawigate(){
      var a=  document.getElementById('header-menu').style.display=`${visability===true? 'flex':'none'}`;
      setVisability(!visability)
      console.log(visability);
    }

    return ( <div className='container col-10 col-xl-8'>
        < div className="header" >
           
                <h1 className='header__title'>Alivio</h1>
               
                <ul className="header-menu" id='header-menu'>
                    <li className="header-menu__item"><a href="">Why Alivio</a></li>
                    <li className="header-menu__item"><a href="">Solutions</a></li>
                    <li className="header-menu__item"><a href="">Community</a></li>
                    <li className="header-menu__item"><a href="">Pricing</a></li>
                </ul>
                <div className="header-autorize">
                    <a href="#" className="header-autorize">Sign-in</a>
                    <button className='btnFullSite'>Start Trial</button>
                </div>
                <button className='header__bnt-naw' onClick={visabilityNawigate} ><span></span><span></span><span></span></button>
            </div >
        </div>

    );

}
export default Header