import React,{ useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useNavigate } from "@reach/router";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(null);
    const [theme] = useThemeHook();
    const [type, setType] = React.useState('');
    const navigate = useNavigate();
    const [value,setValue] = useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const password = form.password.value;
        const email = form.email.value;
        const name = form.name.value;
        
        if(password && email && number && type && name){
            setLoading(true);
            fetch('http://localhost:8000/api/auth/addUser',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name: name,
                    password: password,
                    email: email,
                    type: type,
                    TP: number
                })
            }).then(res=>res.json())
            .then((data) => {
                
                setValue(data);
                console.log(`value = `,value);
                console.log(data.message);
                if(data.message===1){
                    alert("Email is already registered",value);
                }
                else if(data.message===0){
                    alert("ok",value);
                    localStorage.setItem('email', data.email);
                    alert('register successfully');
                    navigate('/', {replace: true});
                }
                else{
                    alert("Error Occured",value);   
                }
            })
            // .then(json=>sessionStorage.setItem("token", json.token))
            .catch(error=> console.error(error))
            .finally(()=>{
                // console.log(name,password,email,type,number);
                setLoading(false);
                // navigate('/', {replace: true})
                // alert('register successfully');
            })
        }
    }
    return (
       <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Create Account
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile number</Form.Label>
                            <PhoneInput
                                international={false}
                                country={'lk'}
                                onlyCountries={['lk']}
                                value={number}
                                onChange={phone=> setNumber(phone)}
                                className="text-dark"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" minLength={6} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Age"
                                    onChange={handleChange}
                                    required
                                    >
                                    <MenuItem value={"wholesaler"}>Wholesalers</MenuItem>
                                    <MenuItem value={"retailer"}>Retailers</MenuItem>
                                    <MenuItem value={"end customer"}>End Customers</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Form.Group>
                        <Button
                            type="submit"
                            className={`${theme? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{border: 0}}
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
                            </> : 'Create'
                        }
                        </Button>
                    </Form>
                </Col>
            </Row>
       </Container>
    );
};

export default Register;