// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
// import { Container,Modal, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap';
// const OrderComponent = () => {
//     const [orders, setOrder] = useState([]);
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3002/order/664e288676a9ecbecc682f09');
//                 setOrder(response.data);
//                 console.log(response.data)
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         fetchOrders();
//     }, []);

//     // function getDate() {
//     //     const today = new Date();
//     //     const month = today.getMonth() + 1;
//     //     const year = today.getFullYear();
//     //     const date = today.getDate();
//     //     return `${month}/${date}/${year}`;
//     //   }
//     //   const [currentDate, setCurrentDate] = useState(getDate());
    
//     // const handleClose = () => {
//     //     setShow(false);
//     // };


//     // const handleShow = (order) => {
//     //     setSelectedOrder(order);
//     //     setShow(true);
//     // };


//   return (
//     <section className="h-100 gradient-custom">
//       <Container className="py-5 h-100">
//         <Row className="d-flex justify-content-center align-items-center h-100">
//           <Col lg={10} xl={8}>
//           {orders.map((order) => (
//             <Card style={{ borderRadius: '10px' }}>
//               <CardHeader className="px-4 py-5">
//                 <h5 className="text-muted mb-0">Thanks for your Order, </h5>
//               </CardHeader>
//               <CardBody className="p-4">
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <p className="lead fw-normal mb-0" style={{ color: '#a8729a' }}>Receipt</p>
//                   <p className="small text-muted mb-0">Receipt Voucher: {order.orderId}</p>
//                 </div>
//                 <Card className="shadow-0 border mb-4">
//                   <CardBody>
//                     <div className="row">
//                       <div className="col-md-2">
//                         <img src={order.imageUrl} className="img-fluid" alt="Phone" />
//                       </div>
//                       <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
//                         <p className="text-muted mb-0">Product:{order.productName}</p>
//                       </div>
//                 {/*<div className="col-md-2 text-center d-flex justify-content-center align-items-center">
//                         <p className="text-muted mb-0 small">White</p>
//   </div>
//                       <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
//                         <p className="text-muted mb-0 small">Capacity: </p>
//   </div>*/}
//                       <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
//                         <p className="text-muted mb-0 small">Qty: {order.quantity}</p>
//                       </div>
//                       <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
//                         <p className="text-muted mb-0 small">Price:{order.price}</p>
//                       </div>
//                     </div>
//                     <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
//                     <div className="row d-flex align-items-center"> 
//                       <div className="d-flex justify-content-between pt-2">
//                         <p className="fw-bold mb-0">Order Details</p>
//                         <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span>{order.totalPrice}</p>
//                       </div>


//                       {/* <div className="d-flex justify-content-between pt-2">
//                         <p className="text-muted mb-0">Invoice Number: 788152</p>
//                         <p className="text-muted mb-0"><span className="fw-bold me-4">Discount</span> $19.00</p>
//                       </div> 


//                       <div className="d-flex justify-content-between">
//                         <p className="text-muted mb-0">Invoice Date: currentDate</p>
//                         <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span> 123</p>
// </div> */}


//                       <div className="d-flex justify-content-between mb-5">
//                         <p className="text-muted mb-0">Receipts Voucher: 18KU-62IIK</p>
//                         <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
//                       </div>
//                     </div>
//                   </CardBody>
//                 </Card>
//                 {/* Additional Card for second product */}
//                 {/* Additional details */}
//               </CardBody>
//               <CardFooter className="border-0 px-4 py-5" style={{ backgroundColor: 'black', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
//                 <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total paid: <span className="h2 mb-0 ms-2">$1040</span></h5>
//               </CardFooter>
//             </Card>
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }
// export default OrderComponent
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap';

function OrderComponent(){
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
      fetchOrders();
    }, []);
        const fetchOrders = async () => {
            try {
                const id="6651997f165e606433deb43a"
                const response = await axios.get(`http://localhost:3002/order/${id}`);
                setOrders(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };

    // const getCurrentDate = () => {
    //     const today = new Date();
    //     const month = today.getMonth() + 1;
    //     const date = today.getDate();
    //     const year = today.getFullYear();
    //     return `${month}/${date}/${year}`;
    // };
    
    // const currentDate = getCurrentDate();

    return (
        // <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
        //   {orders.map((order) => (
        //     <Card style={{ width: '20rem' }} key={order._id}>
        //       <Card.Img variant="top" src={order.imageUrl} style={{ height: '250px', width: '20rem' }} />
        //       <Card.Body>
        //         {/* <Card.Text>Product Name: {order.productName}</Card.Text> */}
        //         {/* <Card.Text>Product Id: {order.productId}</Card.Text> */}
        //         {/* <Card.Text>Quantity: {order.quantity}</Card.Text> */}
        //         <Card.Text>Price of each: {order.price}</Card.Text>             
        //       </Card.Body>
        //     </Card>
        //   ))}
        // </Container>
        <section className="h-100 gradient-custom">
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={10} xl={8}>
                        {orders.map((order) => (
                            <Card key={order._id} style={{ borderRadius: '10px', marginBottom: '20px' }}>
                                <CardHeader className="px-4 py-5">
                                    <h5 className="text-muted mb-0">Thanks for your Order,</h5>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0" style={{ color: '#a8729a' }}>Receipt</p>
                                        <p className="small text-muted mb-0">Receipt Voucher: {order._id}</p>
                                    </div>
                                    <Card className="shadow-0 border mb-4">
                                        <CardBody>
                                            <Row>
                                                <Col md={2}>
                                                    <img src={order.imageUrl} className="img-fluid" alt="Product" />
                                                </Col>
                                                <Col md={2} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">Product: {order.productName}</p>
                                                </Col>
                                                <Col md={2} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty: {order.quantity}</p>
                                                </Col>
                                                <Col md={2} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Price: ${order.price}</p>
                                                </Col>
                                            </Row>
                                            <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                            <div className="row d-flex align-items-center">
                                                <div className="d-flex justify-content-between pt-2">
                                                    <p className="fw-bold mb-0">Order Details</p>
                                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span>${order.total}</p>
                                                </div>
                                                <div className="d-flex justify-content-between mb-5">
                                                    <p className="text-muted mb-0">Receipt Voucher: 18KU-62IIK</p>
                                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </CardBody>
                                <CardFooter className="border-0 px-4 py-5" style={{ backgroundColor: 'black', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                    <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                                        Total paid: <span className="h2 mb-0 ms-2">${order.total}</span>
                                    </h5>
                                </CardFooter>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default OrderComponent;
