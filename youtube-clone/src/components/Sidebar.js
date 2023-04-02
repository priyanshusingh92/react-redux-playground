import React from 'react'
import {Link} from 'react-router-dom';

const Sidebar = () => {


  return (
    <>
    <div className='p-5 shadow-lg basis-1/5'>
     <ul>
            <li> <Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscription</li>
            
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar