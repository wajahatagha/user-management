
import React, { Fragment, useContext, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import H3 from '../Headings/H3Element';
import CustomizerContext from '../../_helper/Customizer';
import SvgIcon from '../../Components/Common/Component/SvgIcon';
import pic from './../../assets/icons/IT.png'
import { CgArrowsV } from "react-icons/cg";
import { FontStyle } from '../../Constant';
const Breadcrumbs = (props) => {
  const { layoutURL } = useContext(CustomizerContext);
  const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};
  
  
  return (
    <Fragment>
      <Container fluid={true} style={{backgroundColor:'red'}}>
        <div className='page-title 'style={{backgroundColor:'#f7fafc'}} >
          <Row>
            <Col xs='6'>
              <p style={{fontFamily:'unset', fontWeight:'bolder',fontSize:'28px'}}>{props.mainTitle}</p>
            </Col>
            <Col xs='6'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  {/* <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}>
                    <SvgIcon iconId='stroke-home' />
                  </Link> */}
     <div style={{backgroundColor:'#2791EF', padding:'10px', borderRadius:'20px', display:'flex', alignItems:'center'}} onClick={toggleDropdown} >
  <div style={{display:'flex',gap:'10px', alignItems:'center', justifyContent: 'center'}}>
    <div>
      <img src={pic} height={'25px'} />
    </div>
    <p style={{color:'white', margin: 0}}>Wajahat Ali</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{height:'20px'}} className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
  </div>
</div>
{isOpen && (
        <div style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',borderRadius:'20px',position: 'absolute', // Position the dropdown absolutely
          top: '100%', zIndex:500, backgroundColor:'white', padding:'10px', gap:'10px' }}>
          <ul style={{gap:'10px', padding:'10px'}}>
            <li  className=' hover:bg-gray-100 cursor-pointer'>Logout</li>
            <li style={{padding:'15px 0px'}} className=' hover:bg-gray-100 cursor-pointer'>Settings</li>
            <li className=' hover:bg-gray-100 cursor-pointer'>Notifications</li>
          </ul>
        </div>
      )}

                </li>
                {/* <li className='breadcrumb-item'>{props.parent}</li>
                {props.subParent ? <li className='breadcrumb-item'>{props.subParent}</li> : ''}
                <li className='breadcrumb-item active'>{props.title}</li> */}
              </ol>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
