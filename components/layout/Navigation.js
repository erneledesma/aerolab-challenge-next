import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return ( 
        <nav>
            <Link href="/">Start</Link> 
            <Link href="/">Products</Link>
        </nav>
     );
}
 
export default Navigation;