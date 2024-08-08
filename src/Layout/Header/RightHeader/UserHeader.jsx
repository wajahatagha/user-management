import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, LogIn, Mail, User } from "react-feather";
import man from "../../../assets/images/appointment/app-ent.jpg";

import { LI, UL, Image, P } from "../../../AbstractElements";
import CustomizerContext from "../../../_helper/Customizer";
import { Account, Admin, Inbox, LogOut, Taskboard } from "../../../Constant";
import { CgArrowsV } from "react-icons/cg";
import { IconContext } from "react-icons";
import pic1 from './../../../assets/images/appointment/app-ent.jpg'
import './rightHeader.css'
import { MdKeyboardArrowDown } from "react-icons/md";
const UserHeader = () => {
  const history = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("Emay Walter");
  const { layoutURL } = useContext(CustomizerContext);
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"));

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL") || man);
    setName(localStorage.getItem("Name") ? localStorage.getItem("Name") : name);
  }, []);

  const Logout = () => {
    localStorage.removeItem("profileURL");
    localStorage.removeItem("token");
    localStorage.removeItem("auth0_profile");
    localStorage.removeItem("Name");
    localStorage.setItem("authenticated", false);
    history(`${process.env.PUBLIC_URL}/login`);
  };

  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  return (
    
    <div className="profile-nav onhover-dropdown pe-0 py-0" >
      
      <div className="media profile-media mt-3" style={{backgroundColor:'#008FFB',  padding:'6px', borderRadius:'10px', color:'white'}}>
        {/* <Image
          attrImage={{
            className: "b-r-10 m-0",
            // src: `${authenticated ? auth0_profile.picture : profile}  `,
            src:{pic1},
            alt: "",
          }}
        /> */}
        
        <img className="imagingg" src={pic1} style={{height:'40px', borderRadius:'8px', marginRight:'5px'}} />
        <div className="media-body"  >
            <div style={{display:'flex', alignItems:'center', gap:'3px', justifyContent:'space-between'}}>
              <div style={{display:'flex' , flexDirection:'column'}}>
            <p className="semiFonting" style={{padding:'0px',fontWeight:'200',fontSize:'12px', margin:'0px', color:'white'}}>{Admin}</p> 
            {/* <i className="middle fa fa-angle-down"></i> */}
            <span className="fonting" style={{fontSize: '15px'}}>
  {authenticated ? auth0_profile.name : name}
</span>

          
          <P attrPara={{ className: "mb-0 font-roboto" }}>
            
          </P>
          </div>
     
          
        
          <MdKeyboardArrowDown style={{fontSize:'20px'}}/>

          </div>
        </div>
      </div>
   <div className="p-3">
      <UL
        attrUL={{ className: "simple-list profile-dropdown onhover-show-div" }}
      >
        <LI attrLI={{}}>
          <User />
          <span>{Account} </span>
        </LI>
        <LI attrLI={{}}>
          <Mail />
          <span>{Inbox}</span>
        </LI>
        <LI attrLI={{}}>
          <FileText />
          <span>{Taskboard}</span>
        </LI>
        <LI attrLI={{ onClick: Logout }}>
          <LogIn />
          <span>{LogOut}</span>
        </LI>
      </UL>
      </div>
    </div>
  );
};

export default UserHeader;
