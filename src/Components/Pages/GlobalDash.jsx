import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import { Modal } from 'react-bootstrap'
import { Breadcrumbs, H2, H3, H4, H5 } from '../../AbstractElements'
import GreetingCard from '../Dashboard/Default/GreetingCard'
import WidgetsWrapper from '../Dashboard/Default/WidgetsWraper'
import OverallBalance from '../Dashboard/Default/OverallBalance'
import RecentOrders from '../Dashboard/Default/RecentOrders'
import ActivityCard from '../Dashboard/Default/ActivityCard'
import RecentSales from '../Dashboard/Default/RecentSales'
import TimelineCard from '../Dashboard/Default/TimelineCard'
import TotalUserAndFollower from '../Dashboard/Default/TotalUserAndFollower'
import PaperNote from '../Dashboard/Default/PaperNote'
import ReactApexChart from 'react-apexcharts'
import { GrowthChartData } from '../../Data/DefaultDashboard/Chart'
import Widgets2 from '../Common/CommonWidgets/Widgets2'
import { GridColumn } from '../../Constant'
import pic1 from './../../assets/icons/IT.png'
import pic2 from './../../assets/icons/factory.png'
import pic3 from './../../assets/icons/area.png'
import pic4 from './../../assets/icons/tech.png'
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import './camera.css'




export default function GlobalDash() {
    const totalData = [
         {
            heading:'Overall compliance',
            id:1,
            options: {
                grid: {
                    padding: {
                        top: 10,
                        bottom: 10,
                        left: 0,
                        right: 0
                    }
                },
                chart: {
                    height: 310,
                    type: 'donut',
                    toolbar: {
                        show: false
                    }
                },
                labels: ['Blockage', 'No Blockage'],
                colors: ['#d3e4ff', '#0b57d0'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'left',
                    formatter: function(label, opts) {
                        const series = opts.w.globals.series;
                        const total = series.reduce((acc, val) => acc + val, 0);
                        const percentage = (series[opts.seriesIndex] / total * 100).toFixed(0);
                        return `${percentage}% ${label}`;
                    },
                    // offsetX: 10,
            offsetY: -5, 
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true, // Center labels ko show karna
                                name: {
                                    show: false, // Name label ko show karna
                                    fontSize: '22px', // Font size set karna
                                    fontFamily: 'Helvetica, Arial, sans-serif', // Font family set karna
                                    color: '#373d3f', // Text color set karna
                                    offsetY: -10 // Vertical position adjust karna
                                },
                                value: {
                                    show: true, // Value label ko show karna
                                    fontSize: '30px', // Value ke liye font size set karna
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight:'bold',
                                    color: '#0b57d0', // Value ke liye color set karna
                                    offsetY: 16, // Vertical position adjust karna
                                    formatter: function (val) {
                                        return val + "%"; // Value ko percentage format me dikhana
                                    }
                                },
                                total: {
                                    show: true, // Total label ko show karna ,
                                    
                                    color: '#373d3f', // Total label ka color set karna
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce((a, b) => {
                                            return b ;
                                        }, 0) + "%"; // Total value ko calculate karna aur percentage format me dikhana
                                    }
                                }
                            }
                        }
                    }
                }
            },
            series: [30, 70]
            
        }
        ,
        {
            heading:'Emergency Gate Blockage',
            id: 2,
            bars: [
                {
                    percent: '75%',
                    gate: 1,
                    bg: '#D1E7FF',
                    bar: 'success'
                },
                {
                    percent: '50%',
                    gate: 1,
                    bg: '#FFE8D6',
                    bar: 'info'
                },
                {
                    percent: '60%',
                    gate: 1,
                    bg: '#D1E7DD',
                    bar: 'warning'
                },
                {
                    percent: '45%',
                    gate: 1,
                    bg: '#F5D0FE',
                    bar: 'danger'
                },
            ]
        },
        {
            heading:'Blockage Over Time',
            id: 3,
            type: 'area',
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
           
            series: [{
                name: 'Desktops',
                data: [
                    { x: 2, y: 40 },
                    { x: 3, y: 37 },
                    { x: 4, y: 30 },
                    { x: 5, y: 26 },
                    { x: 6, y: 20 },
                    { x: 7, y: 24 },
                    { x: 8, y: 37 },
                    { x: 9, y: 39 },
                    { x: 10, y: 48 },
                    { x: 11, y: 60 },
                    { x: 12, y: 52 },
                ]
            }],
            options: {
                chart: {
                    type: 'area',
                    stacked: false,
                    height:260,
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    },
                    
                    
                },
                title: {
                    text: 'Count ',    // Align the title to center
                    style: {
                        color: '#607D8B',
                        fontSize: '12px',
                        fontWeight:'500',
                        fontFamily:'M PLUS Rounded 1c'
                    },
                    floating:true,   
                    offsetY:8       
                },
                stroke: {
                    width: 4,
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 0,
                        inverseColors: false,
                        opacityFrom: 0,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                grid: {
                    show: true,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        right: 20,
                        left: 20,
                        top:15
                    }
                },
                xaxis: {
                    min: 2,
                    max: 12,
                    tickAmount: 5,
                    labels: {
                        formatter: function (val) {
                            return (val % 2 === 0) ? val.toFixed(0) : '';
                        },
                        style: {
                            colors: '#607D8B',
                            fontSize: '12px',
                            fontFamily: '"M PLUS Rounded 1c"',
                        },
                    },
                    axisBorder: {
                        show: false,
                        color: '#78909C',
                        height: 1,
                        offsetX: 1,
                        offsetY: 0
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: '#78909C',
                        height: 2,
                        offsetX: 0,
                        offsetY: 0
                    },
                    title: {
                        text: 'Hours',
                        style: {
                            color: '#607D8B',
                            fontSize: '12px',
                            fontFamily: '"M PLUS Rounded 1c"',
                        },
                    },
                },
                yaxis: {
                    min: 10,
                    max: 70,
                    axisBorder: {
                        show: false,
                        color: '#78909C',
                        height: '100%',
                        borderType: 'solid',
                        offsetX: 0,
                        offsetY: 0
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: '#78909C',
                        height: 2,
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        style: {
                            colors: '#607D8B',
                            fontSize: '12px',
                            fontFamily: '"M PLUS Rounded 1c"',
                        },
                    },
                   
                },
            }
        },
        {
            heading:'Alerts',
            id: 4,
            type: 'bar',
            height: 280,
            series: [{
                name: 'Series 1',
                data: [12, 10, 8, 6, 4]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 260,
                    toolbar: {
                        show: false,
                        tools: {
                            Download: true,
                            selection: true,
                            zoom: true,
                            zoomin: true,
                            zoomout: true,
                            pan: true,
                            reset: true,
                        },
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        borderRadius: 2,

                        borderColor: 'black',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4', 'Gate 5'],
                    axisBorder: {
                        show: false
                    },
                    min:2,
                    // axisBorder: {
                    //   show: false,
                    //   color: '',
                    //   height: 1,
                    //   width: '100%',
                    //   offsetX: 0,
                    //   offsetY: 0
                    // },
                    // axisTicks: {
                    //   show: false,
                    //   borderType: 'solid',
                    //   color: '#78909C',
                    //   height: 6,
                    //   offsetX: 0,
                    //   offsetY: 0
                    // },
                    labels: {
                        style: {
                            colors: '#78909C',
                            fontSize: '12px',
                            fontFamily: '"M PLUS Rounded 1c"',

                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: '#78909C',
                            fontSize: '12px',
                            fontFamily: '"M PLUS Rounded 1c"',

                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                },

                grid: {
                    show: true,
                    xaxis: {
                        lines: {
                            show: true // This will hide the horizontal grid lines
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: 10,
                        right: 20,
                        bottom: 0,
                    }
                },
                legend: {
                    show: false,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '9px',
                    fontFamily: '"M PLUS Rounded 1c"',
                    fontWeight: 800,
                    labels: {
                        colors: '#263238',
                    },
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 5
                    },
                },
                colors: ['#008FFB'],
                //   fill: {
                //     colors: ['#008FFB'],
                //     opacity: 1,
                //     borderColor: 'black',
                //     borderWidth: 1,
                //   },
            }
        },
       
    ];

   
    const progressData = [
        {
            percent: '75%',
            gate: 1,
            bg: '#D1E7FF',
            bar: 'success'
        },
        {
            percent: '50%',
            gate: 1,
            bg: '#FFE8D6',
            bar: 'info'
        }, {
            percent: '60%',
            gate: 1,
            bg: '#D1E7DD',
            bar: 'warning'
        }, {
            percent: '45%',
            gate: 1,
            bg: '#F5D0FE',
            bar: 'danger'
        },
    ]

    const cardsData = [
        {
            user_role: 'Gate #1',
            alerts_no: 48,
            status: 'Up',
            percent: '100%',
            pc: '#F5D0FE'
        },
        {
            user_role: 'Gate #2',
            alerts_no: 47,
            status: 'Down',
            percent: '97.9%',
            pc: '#FFE8D6'
        },
        {
            user_role: 'Gate #3',
            alerts_no: 47,
            status: 'Up',
            percent: '97.9%',
            pc: '#D1E7DD'
        },
        {
            user_role: 'Gate #4',
            alerts_no: 21,
            status: 'Down',
            percent: '43.8%',
            pc: '#D1E7FF'
        }
    ]

    const images = [
        {
            imagepath: 'https://i0.wp.com/www.mrright.in/ideas/wp-content/uploads/2017/08/maxresdefault.jpg?resize=710%2C400&ssl=1',
            cameraNumber: 'Gate #1',
        },
        {
            imagepath: 'https://dicsan.com/wp-content/uploads/2020/01/night-vision-black-and-white-1024x633.jpg',
            cameraNumber: 'Gate #2'
        },
        {
            imagepath: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2019/03/Hero-IR-and-Garage-1.png'
            ,
            cameraNumber: 'Gate #3'
        }, {
            imagepath: 'https://www.security.org/app/uploads/2020/05/Vivint-Outdoor-Cam-Pro-Night-Vision.jpg',
            cameraNumber: 'Gate #4'
        },

    ]



    const [imgPath, setimgPath] = useState();
    const [show, setShow] = useState(false);

    const handleImage = (path) => {
        console.log('path', path)
        const data = path;
        console.log(data)
        setimgPath(data.imagepath);
        setShow(true)
    }

    return (
        <>
            {/* <Breadcrumbs mainTitle="Global Admin Dashboard" parent="Dashboard" title="Global" /> */}

            <Container fluid={true} >

                {/* <GreetingCard /> */}
                {/* <WidgetsWrapper /> */}
                {/* <OverallBalance /> */}
                {/* <RecentOrders /> */}
                {/* <ActivityCard /> */}
                {/* <RecentSales /> */}
                {/* <TimelineCard /> */}

                {/* <PaperNote /> */}
                <Row >
                    <Col xl='12' lg='12' md='12' sm='12' xs='12' style={{ marginTop: '40px', marginBottom: '45px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        {/* <div xl='12' style={{display:'flex', justifyContent:'space-between',alignItems:'center', border:'2px solid red', width:'100%'}}> */}
                        <p className='p-0 my-0 mr-0 dashHead ' style={{fontSize:'28px' ,fontWeight:'600' , fontFamily:'M PLUS Rounded 1c'}}>
                            Dashboard
                            </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '1.0rem',
                            color: '#9CA3AF',
                            justifyContent: 'center',

                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', justifyContent: 'center' }}>
                                <FaCalendarAlt style={{ marginRight: '5px' }} />
                                <span>Today</span>
                            </div>
                            <div style={{
                                borderLeft: '1px solid #ced4da',
                                height: '24px',
                                margin: '0 10px'
                            }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FaClock style={{ marginRight: '5px' }} />
                                <span>08:00 - 09:00 AM</span>
                            </div>
                        </div>


                    </Col>

                    {
                        totalData.map((chartData, index) => {

                            return (
                                <>

                                    <Col xl='3' xxl='3' lg='6' md='6' sm='6' xs='12' key={index}>
                                        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px', fontSize: '18px', fontWeight: '600' }}>
                                        {chartData.heading}
                                        </div>
                                        <Card style={{width:'100%'}} className='card-growth-wrap' >
                                            <CardBody className='p-2' >

                                                {
                                                    chartData.id == 2 ? (

                                                        <Row style={{ width:'100%', height:'260px'}} className='rowProgress py-4 mt-3 px-2 mx-0 mb-0'>
                                                            {
                                                                chartData.bars.map((data) => {
                                                                    return (
                                                                        <>
                                                                            <Col style={{ backgroundColor: `${data.bg}` }} className={`rounded-3 p-1  mb-4 `} xxl='4' xl='4' lg='4' md='4' sm='4' xs='4'>
                                                                                {/* <Col style={{border:'4px solid red'}} style={{borderRadius:'10px',backgroundColor:`${data.bg}`, fontSize:'12px'}} className='py-2 px-1'> */}
                                                                                <div style={{ height: '100%', color:'#9CA3AF', fontWeight:'400' }} className=' gateName d-flex justify-content-center align-items-center'> Gate {data.gate}</div>

                                                                            </Col>
                                                                            <Col className='mb-4' xxl='8' xl='8' lg='8' md='8' sm='8' xs='8'>

                                                                                <div style={{ fontWeight: '400' }} className={`d-flex justify-content-between text-${data.bar} font-weight-bold`}>
                                                                                   <p style={{color:'#9CA3AF', fontSize:'12px'}} className='m-0 p-0 ' > Gate#{data.gate}</p>
                                                                                   <p className='m-0 p-0'> {data.percent}</p>
                                                                                    
                                                                                    </div>

                                                                                <div class="progress" style={{ height: '3px' }}>
                                                                                    <div class={`progress-bar bg-${data.bar} `} role="progressbar" style={{ width: `${data.percent}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>

                                                                            </Col>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </Row>
                                                    ) : (
                                                        
                                                        <div style={{height:'100%', width:'100%'}}>
                                                        <ReactApexChart height={chartData.options.chart.height} type={chartData.options.chart.type} options={chartData.options} series={chartData.series} />
                                                    </div>
                                                    
                                                    )
                                                }

                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )

                        })
                    }


                    <div style={{ width: '100%', marginBottom: '30px' }} className='d-flex justify-content-between align-items-center'>
                        <p className='p-0 m-0' style={{fontSize:'28px' ,fontWeight:'600' , color:'black', fontFamily:'M Plus Rounded 1C'}}>Emergency Alerts</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '1.0rem',
                            color: '#9CA3AF'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                <FaCalendarAlt style={{ marginRight: '5px' }} />
                                <span>Today</span>
                            </div>
                            <div style={{
                                borderLeft: '1px solid #ced4da',
                                height: '24px',
                                margin: '0 10px'
                            }}></div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaClock style={{ marginRight: '5px' }} />
                                <span>08:00 - 09:00 AM</span>
                            </div>
                        </div>
                    </div>

                    <Row className='p-0' style={{ width: '100%', marginLeft:'2px' }}>

                        {
                            cardsData.map((user) => {
                                return (
                                    <>
                                        <Col  xl='3' lg='4' md='4' sm='4' xs='6'>

                                            <Card style={{width:'97%'}} className=' cardHover p-0 ' >
                                                <CardBody className='p-0 px-5 py-3'>
                                                    <p style={{backgroundColor:`${user.pc}`, fontSize:'15px',fontFamily:'Roboto',width:'40%', display:'flex', justifyContent:'center', borderRadius:'5px'}}>
                                                        {user.user_role}
                                                    </p>
                                                    <div style={{display:'flex', alignItems:'center'}}>
                                                        <p style={{marginRight:'20px', fontSize:'20px', fontWeight:'500'}} className='p-0 my-0 '>{user.alerts_no}</p>
                                                        <i style={{fontWeight:'bolder', fontSize:'10px', marginRight:'5px'}} class={` icon-arrow-${user.status == 'Down' ? 'down' : 'up '} text-${user.status == 'Up' ? 'success' : 'danger'}`}></i>

                                                        <p style={{fontSize:'12px', marginRight:'5px'}} className={`p-0 my-0 text-${user.status == 'Up' ? 'success' : 'danger'}`}>{user.percent}</p>
                                                        <p style={{fontSize:'12px',marginLeft:'5px'}} className='p-0 '>{user.status}</p>

                                            
                                                    </div>

                                                </CardBody>
                                            </Card>
                               
                                        </Col>
                                    </>
                                )
                            })
                        }

                    </Row>
                        <Row style={{ marginRight:'0px', width:'100%', paddingInline:'0px'}} className='pr-0 mr-0'>
                    <Col   className='mb-4' xl='6'>
                        <p className='p-0 my-0 mx-3' style={{fontSize:'28px' ,fontWeight:'600' , color:'black', fontFamily:'M Plus Rounded 1C'}}>
                            Latest Alerts
                        </p>
                       
                    </Col>
                    <Col style={{ display:'flex', justifyContent:'end', marginLeft:''}}  className=' mb-4 p-0' xl='6'>
                       
                            <button className='p-0 mx-1' style={{height:'40px',width:'120px',fontSize:'15px',display:'flex', alignItems:'center', justifyContent:'space-evenly', backgroundColor:'#000080', color:'white', borderRadius:'8px'}}>
                                <p className='pr-1 my-0'>View all</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"style={{marginBottom:'2px'}}  height={20} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                            </button>
                        
                       
                    </Col>

                    </Row>

                    {
                        images.map((image) => {
                            return (
                                <>

                                    <Col className='' xl='3' lg='6' md='6' sm='6' xs='6'>
                                        <div onClick={() => handleImage(image)}>
                                            <img src={image.imagepath} style={{ height: '200px', width: '100%', borderRadius: '15px' }} />
                                        </div>
                                        <div className='mt-3'>
                                            <p style={{fontFamily:'Roboto', fontWeight:'600'}} className='mt-0 p-0 mx-0 mb-3'>{image.cameraNumber}</p>
                                        </div>
                                    </Col>

                                </>
                            )
                        })
                    }
                    <section>
                        <Modal show={show} onHide={() => { setShow(false) }} centered>
                            <div className="imageshow">
                                <img src={imgPath} alt="image" className="img-fluid" />
                            </div>
                        </Modal>
                    </section>


                </Row>



            </Container>
        </>
    )
}
