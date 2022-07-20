import { useState } from 'react';
import './Hamburger.css';
import MobileNavItems from './MobileNavItems';
function Hamburger(){
    const [isOpen, setIsOpen] = useState(false);
    return <div className={`mobileNav ${isOpen? 'open' : ''}`} onClick={()=>{
        setIsOpen(!isOpen);
    }}>
        <div className="mobile-nav_burger">

        </div>
       { isOpen && <div className={'mobileNavItems'}>
           <MobileNavItems/></div>}
    </div>
}

export default Hamburger;