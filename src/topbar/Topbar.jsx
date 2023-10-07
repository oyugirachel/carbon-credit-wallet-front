import React  from 'react'
import "./topbar.css" 
import logo from '../image.png'
import {Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Topbar() {

  const username = localStorage.getItem('username');
  return (
   
    <>
    <Nav>
    <div className="top">
        <Link to="Dashboard/">
        <div className="topLeft">
            <img 
            className="topLogo"
            src={ logo } alt="logo"/>
        </div>
        </Link>

        <div className="topCenter">
            <ul className='topListCenter'>
                <li>
                    <h3 className="topListItem1">DASHBOARD</h3>
        <p className="topListP">Welcome,{username} ! access your app insights here</p>
      
                </li>
                               
                
            </ul>
        </div>

    </div>
    
    </Nav>

    </>
  )
}




