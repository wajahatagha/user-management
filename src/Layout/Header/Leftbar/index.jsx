import React, { Fragment, useState, useLayoutEffect, useContext } from "react";
import { Col, Row } from "reactstrap";
import { AlignCenter } from "react-feather";
import { Link } from "react-router-dom";
import { H2, H3, Image } from "../../../AbstractElements";
import CustomizerContext from "../../../_helper/Customizer";
import NotificationSlider from "./NotificationSlider";

const Leftbar = () => {
  const { layoutURL, setToggleIcon, toggleSidebar } = useContext(CustomizerContext);
  const [sidebartoggle, setSidebartoggle] = useState(true);
  const width = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        if (window.innerWidth <= 991) {
          setToggleIcon(true);
        } else {
          setToggleIcon(false);
        }
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const responsive_openCloseSidebar = (toggle) => {
    if (width <= 991) {
      toggleSidebar(!toggle);
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
      document.querySelector(".bg-overlay1").classList.add("active");
    } else {
      if (toggle) {
        toggleSidebar(!toggle);
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon ";
      } else {
        console.log("991 54 else", toggle);
        toggleSidebar(!toggle);
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
      }
    }
  };

  return (
    <Fragment>
      <Row style={{ display:'flex', alignItems:'center'}}>
      <Col xl='1' lg='1' md='1' sm='1' xs='1' style={window.innerWidth <= 991 ? { display: "block" } : { display: "none" }} className="header-logo-wrapper col-auto p-0" id="out_side_click">
        {/* <div className="logo-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}>
            <Image
              attrImage={{
                className: "img-fluid for-light",
                src: `${require("../../../assets/images/logo/logo.png")}`,
                alt: "",
              }}
            />
            <Image
              attrImage={{
                className: "img-fluid for-dark",
                src: `${require("../../../assets/images/logo/logo_dark.png")}`,
                alt: "",
              }}
            />
          </Link>
        </div> */}
        <div className="toggle-sidebar" onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? { display: "block" } : { display: "none" }}>
          <AlignCenter className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
        </div>
      </Col>
      <Col xl='11' lg='11' md='11' sm='11' xs='11' className="left-header p-0 col-auto">
        <p style={{fontSize:'25px' ,fontWeight:'700' , color:'#6b7280', fontFamily:'M Plus Rounded 1C', marginRight:'3px'}} className='p-0 my-0'>Industrial Safety AI Dashboard</p>
      </Col>
      </Row>
   
     
    </Fragment>
  );
};

export default Leftbar;
