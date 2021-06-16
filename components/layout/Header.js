import React from 'react'
import Navigation from './Navigation';


const Header = () => {
    return (  
        <header>
            <div>
                <div>
                    <p>Aerolab</p>
                    <Navigation />
                </div>

                <div>
                    {/* Menu de ADM */}
                </div>
            </div>
        </header>
    );
}
 
export default Header;