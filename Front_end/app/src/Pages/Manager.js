import React,{ useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Table} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import {  useNavigate } from "@reach/router";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Header2 from '../components/Header2';

const Manager = () => {
    const [theme] = useThemeHook();
    const navigate = useNavigate();
    const [driver, setDriver] = useState([]);
    const [assistent, setAssistent] = useState([]);
    const [truck, setTruck] = useState([]);
    const [train, setTrain] = useState([]);
    const [order, setOrder] = useState([]);
    const [year, setYear] = React.useState(null);
    const lDriver = useRef(null);
    const lAssistent = useRef(null);
    const lTruck = useRef(null);
    const lTrain = useRef(null);
    const lOrder = useRef(null);

    async function getDriver(){
        const res = await fetch('http://localhost:8000/api/manager/getDriverSchedule')
                          .then(res=> res.json());
                          setDriver(await res.data);
    }
    async function getAssistent(){
        const res = await fetch('http://localhost:8000/api/manager/getAssistantSchedule')
                          .then(res=> res.json());
                          setAssistent(await res.data);
    }
    async function getTruck(){
        const res = await fetch('http://localhost:8000/api/manager/getTruckSchedule')
                          .then(res=> res.json());
                          setTruck(await res.data);
    }
    async function getTrain(){
        const res = await fetch('http://localhost:8000/api/manager/getTrainSchedule')
                          .then(res=> res.json());
                          setTrain(await res.data);
    }
    async function getOrder(){
        const res = await fetch('http://localhost:8000/api/manager/getLastMonthOrders')
                          .then(res=> res.json());
                          setOrder(await res.data);
    }

    useEffect(()=>{
        getDriver();
        getAssistent();
        getTruck();
        getTrain();
        getOrder();
    },[]);

    return (
        <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
            <Header2 />
            <h1 style={{ textShadow: '2px 2px #333'}} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Manager</h1>
            <Container className="py-4 mt-5">
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lOrder.current.scrollIntoView()}
                            >
                                This Month Orders
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lAssistent.current.scrollIntoView()}
                            >
                                Assistent
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lDriver.current.scrollIntoView()}
                            >
                                Driver
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lTruck.current.scrollIntoView()}
                            >
                                Truck
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lTrain.current.scrollIntoView()}
                            >
                                Train
                            </Button>
            
            <Row className="justify-content-center">
            <h2 ref={lOrder} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>This Month Orders</h2>
            <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Ordered Date</th>
                        <th>Time</th>
                        <th>Truck Route</th>
                        <th>Capacity</th>
                        <th>Prefered Delivery Date</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                    
                    <tbody>
                        {order.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.order_ID}</td>
                                    <td>{item.customer_address}</td>
                                    <td>{item.customer_email}</td>
                                    <td>{item.ordered_date}</td>
                                    <td>{item.ordered_time}</td>
                                    <td>{item.truck_route}</td>
                                    <td>{item.tot_capacity}</td>
                                    <td>{item.prefered_dilivery_date}</td>
                                    <td>{item.total_price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <h2 ref={lAssistent} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Assistent</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>NIC</th>
                        <th>Name</th>
                        <th>Store ID</th>
                        <th>email</th>
                        <th>Total Duration</th>
                        <th>Telephone</th>
                    </tr>
                </thead>
                    
                    <tbody>
                        {assistent.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.NIC}</td>
                                    <td>{item.assistant_name}</td>
                                    <td>{item.store_ID}</td>
                                    <td>{item.email}</td>
                                    <td>{item.total_duration}</td>
                                    <td>{item.telephone_No}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <h2 ref={lDriver} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`} path="driver">Driver</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>NIC</th>
                        <th>Name</th>
                        <th>Store ID</th>
                        <th>email</th>
                        <th>Total Duration</th>
                        <th>Telephone</th>
                    </tr>
                </thead>
                    
                    <tbody>
                        {driver.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.NIC}</td>
                                        <td>{item.driver_name}</td>
                                        <td>{item.store_ID}</td>
                                        <td>{item.email}</td>
                                        <td>{item.total_duration}</td>
                                        <td>{item.Telephone_No}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                <h2 ref={lTruck}  className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Truck</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>Truck ID</th>
                        <th>Branch</th>
                        <th>Route</th>
                        <th>Total Duration</th>
                    </tr>
                </thead>
                    
                    <tbody>
                        {truck.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.truck_id}</td>
                                            <td>{item.city}</td>
                                            <td>{item.truck_route}</td>
                                            <td>{item.total_duration}</td>
                                        </tr>
                                    )
                                })}
                    </tbody>
                </Table>
                <h2 ref={lTrain} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Train</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>Train ID</th>
                        <th>Capacity</th>
                        <th>Depart Time</th>
                        <th>Destination Strore</th>
                    </tr>
                </thead>
                    
                    <tbody>
                        {train.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.train_id}</td>
                                            <td>{item.capacity}</td>
                                            <td>{item.depart_time}</td>
                                            <td>{item.destination_store}</td>
                                        </tr>
                                    )
                                })}
                    </tbody>
                </Table>
            <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className={`${theme? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
                    >
                        <Col className="py-2">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3} style={{ width: '500px', height: '50px' }} className="m-2">
                     <DatePicker
                        views={['year']}
                        label="Select Year"
                        minDate={dayjs('2022-03-01')}
                        maxDate={dayjs('2023-06-01')}
                        value={year}
                        onChange={(newValue) => {
                            setYear(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} helperText={null} required/>}
                        />
                    </Stack>
                </LocalizationProvider>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="warning"
                                className="m-2"
                                style={{ width: '500px', height: '70px' }}
                                onClick={()=>  { 
                                    localStorage.setItem('year', year.$y);
                                    navigate('reports', {replace: false});
                                    }}
                            >
                                Report
                            </Button>
                        </Col>
                    </Row>
                </Row>
       
        </Container>
        </main>
       
    );
};

export default Manager;
