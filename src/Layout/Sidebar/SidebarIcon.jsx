import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cubaimg from "../../assets/images/logo/logo-icon.png"
import CustomizerContext from '../../_helper/Customizer';
import shan from './../../assets/icons/Shan.png'
const SidebarIcon = () => {
  const { layoutURL } = useContext(CustomizerContext);
  return (
    <div style={{display:'flex', justifyContent:'center'}} className="logo-icon-wrapper">
      <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}>
        <img
          className="img-fluid"
          src={shan}
          alt=""
        />
      </Link>
    </div>
  );
};

export default SidebarIcon;