import React,{ useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup, Table} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Link, useNavigate } from "@reach/router";

//icons
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


//icons

const Manager = () => {
    const [loading, setLoading] = useState(false);
    const [value,setValue] = useState("");
    const [theme] = useThemeHook();
    const navigate = useNavigate();
    const [driver, setDriver] = useState([]);
    const [assistent, setAssistent] = useState([]);
    const [truck, setTruck] = useState([]);
    const [train, setTrain] = useState([]);
    // const [year, setYear] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
    const [year, setYear] = React.useState(null);
    const minDate = new Date('2022-04-07');
    // const maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000 );

    const lDriver = useRef(null);
    const lAssistent = useRef(null);
    const lTruck = useRef(null);
    const lTrain = useRef(null);

    async function getDriver(){
        const res = await fetch('http://localhost:8000/api/manager/getDriverSchedule')
                          .then(res=> res.json());
                          setDriver(await res.data);
                          console.log(driver);
    }

    async function getAssistent(){
        const res = await fetch('http://localhost:8000/api/manager/getAssistantSchedule')
                          .then(res=> res.json());
                          setAssistent(await res.data);
                          console.log(assistent);
    }

    async function getTruck(){
        const res = await fetch('http://localhost:8000/api/manager/getTruckSchedule')
                          .then(res=> res.json());
                          setTruck(await res.data);
                          console.log(truck);
    }

    async function getTrain(){
        const res = await fetch('http://localhost:8000/api/manager/getTrainSchedule')
                          .then(res=> res.json());
                          setTrain(await res.data);
                          console.log(train);
    }

    useEffect(()=>{
        getDriver();
        getAssistent();
        getTruck();
        getTrain();
    },[]);

    // const handleSubmit = (event)=>{
    //     const form = event.currentTarget;
    //     event.preventDefault();
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     if(email && password){
    //         console.log("if", email, password)
    //         setLoading(true);
    //         fetch('http://localhost:8000/api/auth/checkValidity',{
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body:JSON.stringify({
    //                 email: email,
    //                 password: password
    //             })
                
    //         })
    //         .then(res=>res.json())
    //         .then((data) => {
                
    //             setValue(data);
    //             console.log(`value = `,value);
    //             console.log(data.message);
    //             if(data.message===2){
    //                 alert("ok",value);
    //                 localStorage.setItem('email', data.email);
    //                 navigate('home', {replace: true});
    //             }
    //             else if(data.message===1){
    //                 alert("ok",value);
    //                 localStorage.setItem('email', data.email);
    //                 navigate('train-schedule', {replace: true});
    //             }
    //             else{
    //                 alert("Can not login",value);   
    //             }
    //         })
    //         .then(json=>sessionStorage.setItem("token", json.token))
    //         .catch(error=> console.error(error))
    //         .finally(()=>{
                
    //             setLoading(false);
    //             // navigate('home', {replace: false});
    //             // alert('Login successfully');
    //         })
    //     }
    // }
    return (
        <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
            <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Manager</h1>
        <Container className="py-4 mt-5">
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
                                    localStorage.setItem('year', year);
                                    navigate('reports', {replace: false});
                                    console.log(train,truck,assistent,driver);
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
