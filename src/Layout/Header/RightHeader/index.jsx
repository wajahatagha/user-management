import React, { Fragment } from 'react';

import Language from './Language';
import Searchbar from './Searchbar';
import Notificationbar from './Notificationbar';
import MoonLight from './MoonLight';
import CartHeader from './CartHeader';
import BookmarkHeader from './BookmarkHeader';
import UserHeader from './UserHeader';
import { UL } from '../../../AbstractElements';
import { Col, Row } from 'reactstrap';
import { None } from '../../../Constant';
import { CiSearch } from "react-icons/ci";
import './rightHeader.css'
const RightHeader = () => {
  return (
    <Fragment>
      {/* <Row style={{border:'2px solid red'}}>
      <Col style={{border:'2px solid blue'}} xl='6' className='col-auto'>
      vvzv
      </Col>
      <Col style={{border:'2px solid blue'}} xxl='7' xl='6' md='7' className='nav-right pull-right right-header  p-0 ms-auto'> */}
        {/* <Col md="8"> */} 
        {/* <UL attrUL={{ className: 'simple-list nav-menus flex-row' }}> */}
          {/* <Language />
          <Searchbar />
          <BookmarkHeader />
          <MoonLight />
          <CartHeader />
          <Notificationbar /> */}
        {/* </UL> */}
        {/* </Col> */}
      {/* </Col>
      </Row> */}
      
      <div className="right" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px', width: '100%' }}>
  <div className="search" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#E5E7EB', width: '60%',  borderRadius: '25px', paddingBlock:'12px' }} className=''>
    <CiSearch className='' style={{ marginLeft: '8px', marginRight:'3px' }} />
    <input placeholder="Search" type="text" style={{ border: 'none', padding: '2px', borderRadius: '15px', width: '60%', backgroundColor: '#E5E7EB', fontFamily: 'Roboto' }} />
  </div>
  <div className='' style={{ marginTop:'10px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}>
    <UserHeader />
  </div>
</div>



    </Fragment>
  );
};

export default RightHeader;
