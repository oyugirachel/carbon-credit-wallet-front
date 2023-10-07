import React from 'react'
import "./dashboard.css"
// import {Button,Card,Form, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <>
   
    <div className='dashboard'>
    <Link to="/Dashboard"> 
      <div className="dashInfo">
        <i class="dashIcon fas fa-home"></i>
        <br/> <br/> 
        <span className="itemTitle">DASHBOARD</span>
        <br/>
        <span className="itemInfo">
        </span>
      </div>
      </Link>

      <Link to="/Credit">
        <div className="dashInfo">
          <i className="dashIcon fas fa-layer-group"></i>
          <br/> <br/> 
          <span className="itemTitle">Credit Balance</span>
          <br/>
          <span className="itemInfo">
            Click to view your credit balance
          </span>
        </div>
      </Link>

      <div className="dashInfo">
        <i class="dashIcon fas fa-clock"></i>
        <br/> <br/> 
        <span className="itemTitle">Battery Charge history</span>
        <br/>
        <span className="itemInfo">
        </span>
      </div>
      
      {/* Below are the dashboard pointers */}
      <div className="dashInfo">
        <i class="dashIcon fas fa-exclamation"></i>
        <br/> <br/> 
          <span className="itemTitle">NOTIFICATIONS</span>
          <br/>
          <span className="itemInfo">
          </span>
      </div> 

      <div className="dashInfo">
        <i class="dashIcon fas fa-fax"></i>
        <br/> <br/> 
          <span className="itemTitle">RESOURCE CENTER</span>
          <br/>
          <span className="itemInfo">
          </span>
      </div> 

      {/* Below are the dashboard pointers */}
      <div className="dashInfo">
        <i class="dashIcon fas fa-id-card"></i>
        <br/> <br/> 
        <span className="itemTitle">PROFILE</span>
        <br/>
        <span className="itemInfo">
        </span>

      </div>
    

    

        
      

    </div>
    </>
  )
}
