// import React from 'react';
import React, {useEffect, useState} from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart} from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import Header from '../components/Header';

const Cart = () => {
    const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    
    const [response, setResponse] = useState(null);
    // const value = localStorage.getItem('myValue');

    // const data = getItem() ;


    // const [cartData, setCartData] = useState([]);
    // async function getResponse(){
    //     const res = await fetch('https://fakestoreapi.com/products')
    //                       .then(res=> res.json());
    //                       setCartData(await res);
    // }

    // useEffect(()=>{
    //     getResponse();
    // },[]);


    return (
        <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
          <Header />
        <Container className="py-4 mt-5">
            <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>
                {isEmpty? 'Your Cart is Empty' : 'The Cart'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.product_description} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.product_name}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className={`${theme? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
                    >
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="warning"
                                className="m-2"
                                onClick={()=>  {
                                    // const filteredItems = items.filter((item) => {
                                    //     return { id: item.id, price: item.price };
                                    //   });
                                    console.log(localStorage.getItem('email'));
                                      fetch('http://localhost:8000/api/cart/saveCart', {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            email : localStorage.getItem('email'),
                                            items : items
                                        }),
                                        headers: {
                                          'Content-Type': 'application/json'
                                        }
                                      })
                                        .then(res => res.json())
                                        .then(res => {
                                          setResponse(res);
                                        });
                                        alert("error in saving");
                                    }}
                            >
                                <BsCartCheck size="1.7rem" />
                                Save Cart
                            </Button>
                            <Button variant="danger"
                                className="m-2"
                                onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={()=>  window.location.href='payment'}
                            >
                                <BsCartCheck size="1.7rem" />
                                Proceed
                            </Button>
                        </Col>
                    </Row>}
            </Row>
        </Container>
        </main>
    );
};

export default Cart;