import React,{ useEffect, useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import Header from '../components/Header';
import { Link, useNavigate } from "@reach/router";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useCart } from 'react-use-cart';

const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [theme] = useThemeHook();
    const today = new Date();
    const minDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000 );
    const [date, setDate] = React.useState(null);
    const [route, setRoute] = React.useState('');
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState('Visa Card');
    const [routes, setRoutes] = useState([])

    const handleChange = (event) => {
        setRoute(event.target.value);
    };

    const [errorMessage, setErrorMessage] = useState('')
        
    const validateCreditCard = (value) => {
        
    }
    const { emptyCart, cartTotal } = useCart();

    const handleChangeMethod = (event) => {
        setSelectedMethod(event.target.value);
      };

    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const Address = form.Address.value;
        

        if(Address && route && date && selectedMethod){
            setLoading(true);
            fetch('http://localhost:8000/api/order',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email: localStorage.getItem('email'),
                    year: date.$y,
                    month: date.$M+1,
                    date: date.$D,
                    Address: Address,
                    route: route,
                    totalPrice: cartTotal,
                    selectedMethod: selectedMethod
                })
            }).then(res=>res.json())
            .then(json=>sessionStorage.setItem("token", json.token))
            .catch(error=> console.error(error))
            .finally(()=>{
                setLoading(false);
                emptyCart();
                navigate('home', {replace: true});
                alert('payment successfully');
            })
        }
    }   

    async function getRoutes(){
        const res = await fetch('http://localhost:8000/api/passage')
                          .then(res=> res.json());
                          setRoutes(await res.passges);
    }

    useEffect(()=>{
        getRoutes();
    },[]);

    return (
      <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
          <Header />
       <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Payment Details
                    </h1>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                            <Form.Label>Prefered Dilivery Date</Form.Label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                <DatePicker
                                    views={['day']}
                                    // label="Just date"
                                    minDate={minDate}
                                    value={date}
                                    onChange={(newValue) => {
                                    setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} helperText={null} 
                                    required/>}
                                />
                                </Stack>
                            </LocalizationProvider>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="Address" type="text" placeholder="Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Route</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={route}
                                label="Route"
                                onChange={handleChange}
                                required
                                >
                                    {routes.map((item, index)=>{
                            return(
                                <MenuItem key={index} value={item.truck_route}>{item.truck_route}</MenuItem>
                                
                            )
                        })}
                                </Select>
                            </FormControl>
                            </Box>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="PaymentMethod"
                                defaultValue="Visa Card" 
                                value={selectedMethod}
                                onChange={handleChangeMethod}
                            >
                                <FormControlLabel value="Visa Card" control={<Radio />} label="Visa Card" />
                                <FormControlLabel value="Master Card" control={<Radio />} label="Master Card" />
                                <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                            </RadioGroup>
                            </FormControl>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <div style={{
                                marginLeft: '20px',
                                }}>
                                <pre>
                                    <span>Enter Card Number: </span><input type="text"
                                    onChange={(e) => validateCreditCard(e.target.value)} required></input> <br />
                                    <span style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    }}>{errorMessage}</span>
                                </pre>
                            </div>
                        </Form.Group>
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Button
                            type="submit"
                            className={`${theme? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{border: 0}}
                            // onClick = {() => {emptyCart()}}
                        >
                        {loading? 
                            <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                &nbsp;Loading...
                            </> : 'Proceed'
                        }
                        </Button>
                    </Form>
                </Col>
            </Row>
       </Container>
       </main>
    );
};

export default Payment;
