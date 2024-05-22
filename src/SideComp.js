import React from "react";
import {Link,useNavigate} from "react-router-dom"
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { cilAlignLeft,cilPlus,cilAccountLogout } from '@coreui/icons';
import dashboard from "./assets/dashboard.png"
import  "./SideComp.css"





function SideComp() {

  let navigate = useNavigate()

  function navigatetologin(){

  navigate("/")

  }
  return (
    <div className="mainSidecomp" >
    
      
          
            <div className="sidecomp">
            
            <div className="icons">
            <Link to="/dashboard">
             
             <img src={dashboard}/>
            
            </Link>
            </div>
          
            <div className="icons">
            <Link to="/list">
            <CIcon icon={cilAlignLeft} title="" color="black" height={30}/>
            </Link>
            </div>
          
            <div className="icons">
            <Link to="/project">
            
            <CIcon icon={cilPlus} title="" color="black" height={30} />
            </Link>

            </div>
         

          </div>
        

      <div style={{marginLeft:"120px", marginTop:"150px", cursor:"pointer"}}>
     < CIcon icon={cilAccountLogout} title="" height={20} onClick={navigatetologin} />
      </div>

    </div>
  );
}

export default SideComp;
