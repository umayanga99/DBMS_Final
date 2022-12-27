import React,{ useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import DatePick from '../components/Demo';
import DropDown from '../components/DropDown';
import RadialBox from '../components/RadialBox';
import CardValidator from '../components/CardValidator';
import Header from '../components/Header';


const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(null);
    const [theme] = useThemeHook();
    

    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        const Address = form.Address.value;

        if(username && password && Address && number){
            setLoading(true);
            console.log('call api here');
            console.log(username, password, Address, number);
        }
    }
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
                            <DatePick />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="Address" type="text" placeholder="Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <DropDown />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <RadialBox />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <CardValidator />
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
