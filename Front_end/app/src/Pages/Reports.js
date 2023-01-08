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

    const lQSR = useRef(null);
    const lMO = useRef(null);
    const lCOR = useRef(null);
    const lCRR = useRef(null);

    async function getQSR(){
        const res = await fetch('http://localhost:8000/api/product')
                          .then(res=> res.json());
                          setQSR(await res);
    } 

    async function getMO(){
        const res = await fetch('http://localhost:8000/api/product')
                          .then(res=> res.json());
                          setMO(await res);
    }

    async function getCOR(){
        const res = await fetch('http://localhost:8000/api/product')
                          .then(res=> res.json());
                          setCOR(await res);
    }

    async function getCRR(){
        const res = await fetch('http://localhost:8000/api/product')
                          .then(res=> res.json());
                          setCRR(await res);
    }

    useEffect(()=>{
        getQSR();
        getMO();
        getCOR();
        getCRR();
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
                        <th>Year</th>
                        <th>Quarter</th>
                        <th>Product</th>
                        <th>Total Sells</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                    
                    <tbody>

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

                    </tbody>
                </Table>
                <h2 ref={lCOR}  className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>Customer Order Report</h2>
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                <thead>
                    <tr>
                        <th>Year</th>
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
