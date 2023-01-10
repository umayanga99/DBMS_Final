import React,{ useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup, Table} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Link, useNavigate } from "@reach/router";

const Reports = () => {
    const [loading, setLoading] = useState(false);
    const [value,setValue] = useState("");
    const [theme] = useThemeHook();
    const navigate = useNavigate();
    const [QSR, setQSR] = useState([]);
    const [MO, setMO] = useState([]);
    const [COR, setCOR] = useState([]);
    const [CRR, setCRR] = useState([]);
    const [QOR, setQOR] = useState([]);

    const lQSR = useRef(null);
    const lMO = useRef(null);
    const lCOR = useRef(null);
    const lCRR = useRef(null);
    const lQOR = useRef(null);

    // async function getDriver(){
    //     const res = await fetch('http://localhost:8000/api/manager/getDriverSchedule')
    //                       .then(res=> res.json());
    //                       setDriver(res.data);
    //                       console.log(res.data,driver,"driver");
    // }

    async function getQSR(){
        const res = await fetch('http://localhost:8000/api/manager/getQuarterlySalesReport',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                year: localStorage.getItem('year')
            })
        })
        .then(res=> res.json());
        setQSR(await res.data);
        console.log(QSR,"QSR");
    } 

    async function getQOR(){
        const res = await fetch('http://localhost:8000/api/manager/getQuarterlyOrderReport',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                year: localStorage.getItem('year')
            })
        })
        .then(res=> res.json());
        setQOR(await res.data);
        console.log(QOR,"QOR");
    } 

    async function getMO(){
        const res = await fetch('http://localhost:8000/api/manager/getMostOrdered',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                year: localStorage.getItem('year')
            })
        })
        .then(res=> res.json());
        setMO(await res.data);
        console.log(res.data,MO,"MO");
    }

    async function getCOR(){
        const res = await fetch('http://localhost:8000/api/manager/getCustomerOrderReport',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                year: localStorage.getItem('year')
            })
        })
        .then(res=> res.json());
        setCOR(await res.data);
        console.log(COR,"COR");
    }

    async function getCRR(){
        const res = await fetch('http://localhost:8000/api/manager/getCitiesRoutesReport',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                year: localStorage.getItem('year')
            })
        })
        .then(res=> res.json());
        setCRR(await res.data);
        console.log(CRR,"CRR");
    }

    useEffect(()=>{
        getQSR();
        getMO();
        getCOR();
        getCRR();
        getQOR();
        console.log(CRR,"CRR");
    },[]);

    return (
        <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
            <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Reports</h1>
        <Container className="py-4 mt-5">
        
        <Button variant="success"
                                className="m-2"
                                onClick={()=>  lQSR.current.scrollIntoView()}
                            >
                                Quarter Sales Report
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lQOR.current.scrollIntoView()}
                            >
                                Quarter Order Report
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lMO.current.scrollIntoView()}
                            >
                                Most Ordered
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lCOR.current.scrollIntoView()}
                            >
                                Custom Order Report
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  lCRR.current.scrollIntoView()}
                            >
                                Cities Routs Report
                            </Button>
            
            <Row className="justify-content-center">
                <h2 ref={lQSR} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Quarter Sales Report</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        {/* <th>Year</th> */}
                        <th>Quarter</th>
                        <th>Total Quantity</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                    
                    <tbody>
                        {QSR.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.quarter}</td>
                                        <td>{item.total_income}</td>
                                        <td>{item.total_quantity}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                <h2 ref={lQSR} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Quarter Order Report</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        {/* <th>Year</th> */}
                        <th>Quarter</th>
                        <th>Product</th>
                        <th>Total Sells</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                    
                    <tbody>
                    {QOR.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.quarter}</td>
                                        <td>{item.product}</td>
                                        <td>{item.total_sells}</td>
                                        <td>{item.total_income}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                <h2 ref={lMO} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`} path="driver">Most Ordered </h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Total Quantity</th>
                    </tr>
                </thead>
                    
                    <tbody>
                    {MO.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.product_name}</td>
                                            <td>{item.total_quantity}</td>
                                        </tr>
                                    )
                                })}
                    </tbody>
                </Table>
                <h2 ref={lCOR}  className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Customer Order Report</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        {/* <th>Year</th> */}
                        <th>Customer Email</th>
                        <th>Customer Name</th>
                        <th>Customer Type</th>
                        <th>Ordered Date</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                    
                    <tbody>
                    {COR.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.customer_email}</td>
                                            <td>{item.customer_name}</td>
                                            <td>{item.customer_type}</td>
                                            <td>{item.ordered_date}</td>
                                            <td>{item.product_name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.total_price}</td>
                                        </tr>
                                    )
                                })}
                    </tbody>
                </Table>
                <h2 ref={lCRR} className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Cities Routs Report</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Truck Route</th>
                        <th>Product Name</th>
                        <th>Year</th>
                        <th>Tot Orders</th>
                        <th>Total Income </th>
                    </tr>
                </thead>
                    
                    <tbody>

                    </tbody>
                </Table>
                </Row>
       
        </Container>
        </main>
       
    );
};

export default Reports;
