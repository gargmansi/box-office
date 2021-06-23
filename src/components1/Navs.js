import React from 'react'
import {Link} from 'react-router-dom'

export const Navs = () => {
    return (
        <div>
            <ul>
                <li><Link to="/starred">Go to starred page</Link></li>
            </ul>
            
        </div>
    )
}
export default Navs