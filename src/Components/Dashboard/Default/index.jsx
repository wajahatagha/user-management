import React, { Fragment, useState } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import pic1 from '../../../assets/icons/group.png'
import pic2 from '../../../assets/icons/IT.png'
import pic3 from '../../../assets/icons/global.png'
import pic4 from '../../../assets/icons/factory.png'
import pic5 from '../../../assets/icons/area.png'
import pic6 from '../../../assets/icons/tech.png'
import dash from '../../../assets/icons/dashboard.png'
import notify from '../../../assets/icons/notification.png'
import './dash.css'
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import OverallBalance from "./OverallBalance";
import GreetingCard from "./GreetingCard";
import WidgetsWrapper from "./WidgetsWraper";
import RecentOrders from "./RecentOrders";
import ActivityCard from "./ActivityCard";
import RecentSales from "./RecentSales";
import TimelineCard from "./TimelineCard";
import TotalUserAndFollower from "./TotalUserAndFollower";
import PaperNote from "./PaperNote";
import { Color } from "../../../Constant";

const Dashboard = () => {

  const [data, setData] = useState([
    {
      title:'Total',
      amount:12000,
      icon:pic1,
      color:'#F3C0B8'
      
    },
    {
      title:'Global',
      amount:2000,
      icon:pic2,
      color:'#F3F0B8'
    }, {
      title:'IT Officers',
      amount:2500,
      icon:pic3,
      color:'#D1F3B8'
    }, {
      title:'Factory',
      amount:5000,
      icon:pic4,
      color:'#B8F3EF'
    }, {
      title:'Area',
      amount:4000,
      icon:pic5,
      color:'#CEB8F3'
    }, {
      title:'Tech QA',
      amount:3000,
      icon:pic6,
      color:'#D0F3B8'
    },
  ])

  const [tableData, setTableData] = useState([{
    userId:'wajahat',
    password:'wajahat',
    email:'wajahat@gmail.com',
    role:'Global',
    date: new Date()
  },
  {
    userId:'sheheryar',
    password:'test123',
    email:'shehehryar@gmail.com',
    role:'User',
    date: new Date()
  },
  {
    userId:'ali',
    password:'ali',
    email:'ali@gmail.com',
    role:'Factory',
    date: new Date()
  },{
    userId:'wajahat',
    password:'wajahat',
    email:'wajahat@gmail.com',
    role:'Global',
    date: new Date()
  },
  
  
  
  ])


const [search, setSearch] = useState('')


  const filteredDataa = tableData.filter((user) =>
    user.userId.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearch(ev){
    setSearch(ev.target.value);
    
    }

    console.log(tableData.map((user)=>user.date))

  return (
    <Fragment>
       <Breadcrumbs mainTitle="Super Admin Dashboard" parent="Dashboard" title="Default" />
      <Container fluid={true} >
    {/* //     <Row className="widget-grid">
    //       <GreetingCard />
    //       <WidgetsWrapper />
    //       <OverallBalance />
    //       <RecentOrders />
    //       <ActivityCard />
    //       <RecentSales />
    //       <TimelineCard />
    //       <TotalUserAndFollower />
    //       <PaperNote />
    //     </Row> */}
    <div style={{width:'full',display:'flex', justifyContent:'space-between', flexWrap:'wrap', width:'100%'}}> 
        {
          data.map((item)=>{
            return(
              <>
                <div className="card cardHover" style={{ hover:'',backgroundColor:'white',  borderRadius:'15px', width:'150px', padding:'10px' }}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                    <div style={{padding:'8px' ,backgroundColor:`${item.color}`, borderRadius:'50px'}}>
                      <img src={item.icon} style={{height:'22px'}} />
                    </div>
                    <div style={{fontFamily:'sans-serif'}}>
                      {item.title}
                    </div>






                  </div>
                  <div style={{display:'flex', justifyContent:'flex-end', fontSize:'25px', fontWeight:'bold'}}>
                    {item.amount}
                  </div>
                  <div style={{backgroundColor:'red', width:'100%', height:'1px'}}>

                  </div>

                </div>
              </>
            )
          })
        }
      

    </div>

    <div>
      <p style={{fontSize:'23px', fontWeight:'bold', fontFamily:'sans-serif'}}>Members</p>
        <div className="" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',display:'flex',justifyContent:'flex-start',alignItems:'center',width:'100%', backgroundColor:'white', borderRadius:'10px', padding:'5px'}}>
      <CiSearch style={{padding:'0px',fontSize:'20px'}}/>
      <input placeholder="Search by User ID" type="text" value={search} onChange={handleSearch} style={{border:'none', width:'100%'}} />
 </div>
    </div>

<div>
    <table class="table" style={{marginTop:'50px'}}>
    <thead className="thead-dark">
  <tr style={{ backgroundColor: '#E5E7EB' }}>
    <th scope="col">
      User ID
    </th>
    <th scope="col">
      Password
    </th>
    <th scope="col">
      Email
    </th>
    <th scope="col">
      Role
    </th>
    <th scope="col">
      Date
    </th>
    <th scope="col">
      Actions
    </th>
  </tr>
</thead>

  <tbody>
    {
      filteredDataa.map((user)=>{
        let formattedDate = 'Invalid Date';
        if (user.date) {
          const date = new Date(user.date);
          if (!isNaN(user.date.getTime())) { // Check if the date is valid
            formattedDate = user.date.toLocaleDateString();
          }
        }
        return(
          <>
    <tr>
      <th scope="row">{user.userId}</th>
      <td>{user.password}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{formattedDate}</td>
      <td >
        <button style={{backgroundColor:'transparent', border:'none'}}><FaEdit /></button>
        <button style={{backgroundColor:'transparent', border:'none'}}><MdDelete /></button>
        </td>
    
    </tr>
    </>
        )
      })
}
{/* <tr>
      <th scope="row">vdvb</th>
      <td>sdg,dg</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
  </tbody>
</table>
</div>


    
  
      </Container>
     </Fragment>
 
 
  );
};

export default Dashboard;
