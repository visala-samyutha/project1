// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Button, Card, Container } from 'react-bootstrap';
// function CartComponent() {
//   const [carts, setCarts] = useState([]);
//   useEffect(() => {
//     fetchCartData();
//   }, []);
//     const fetchCartData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/cart/664e28a276a9ecbecc682f0c");
//         setCarts(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//   const handleDeleteItem = async (productId) => {
//     try {
//         const userId="664e28a276a9ecbecc682f0c"
//       const response = await axios.post(`http://localhost:3002/cart/delete/${userId}/${productId}`);
//       // Refresh the cart data after deleting the item
//       if(response.message.data==='cart is empty'){
//         return(
//           <h2>yout cart is empty</h2>
//         )
//       }
//      fetchCartData();
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <><h2>Cart Items</h2>
//     <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
//             {carts.map((cart) =>
//                 <Card style={{ width: '20rem' }}>
//                     <Card.Img variant="top" src={cart.imageUrl} style={{height:'250px',width:'20rem'}}/>
//                     <Card.Body>
//                         <Card.Text>Product Name:{cart.productName}</Card.Text>
//                         <Card.Text>Product Id:{cart.productId}</Card.Text>
//                         <Card.Text>Quantity:{cart.quantity}</Card.Text>
//                         <Card.Text>Price of each:{cart.price}</Card.Text>
//                         <Button varient="secondary" onClick={()=>handleDeleteItem(cart.productId)}>Delete Item</Button>
//                     </Card.Body>
//                 </Card>
//             )}
//           </Container>
//         </>
//   );
// }
// export default CartComponent
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function CartComponent() {
  const [carts, setCarts] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/cart/6651997f165e606433deb43a");
      setCarts(response.data);
      console.log(response.data)
      setIsCartEmpty(response.data.length === 0); // Check if the cart is empty
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteItem = async (productId) => {
    try {
      const userId = "664e288676a9ecbecc682f09";
      await axios.post(`http://localhost:3002/cart/delete/${userId}/${productId}`);
      fetchCartData();
    } catch (err) {
      console.log(err);
    }
  };
  const handlePlaceOrder=async (pid)=>{
    try {
      const id="6651997f165e606433deb43a"
      const response = await axios.post(`http://localhost:3002/order/cart/${id}`);
      alert(response.data.message)
  } catch (err) {
      console.log(err);
  }
  }
  const handleIncrement=async (pid)=>{
    const id="6651997f165e606433deb43a"
      const response=await axios.post(`http://localhost:3002/cart/incCart/${id}/${pid}`);
      if(response.data.message==="cart items incremented")
           fetchCartData();
      else{
        alert(response.data.message)
      }    
}
  const handleDecrement=async (pid)=>{
    const id="6651997f165e606433deb43a"
    const response=await axios.post(`http://localhost:3002/cart/decCart/${id}/${pid}`);
    if(response.data.message==="cart items decremented")
      fetchCartData(); 
    else{
      alert(response.data.message)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Cart Items</h2>
        <Button variant="primary" className="ml-auto" onClick={()=>handlePlaceOrder()}>Place order</Button>
    </div>
      {isCartEmpty ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h2>Your cart is empty.</h2>
        </div>
      ) : (
        <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
          {carts.map((cart) => (
            <Card style={{ width: '20rem' }} key={cart.productId}>
              <Card.Img variant="top" src={cart.imageUrl} style={{ height: '250px', width: '20rem' }} />
              <Card.Body>
                <Card.Text>Product Name: {cart.productName}</Card.Text>
                <Card.Text>Product Id: {cart.productId}</Card.Text>
                <Card.Text>Quantity: {cart.quantity}</Card.Text>
                <Card.Text>Price: {cart.price}</Card.Text>
                <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="secondary" onClick={() => handleDecrement(cart.productId)}>-</Button>
              <span>{cart.quantity}</span>
              <Button variant="secondary" onClick={() => handleIncrement(cart.productId)}>+</Button>
            </div>
            <br/>
                <Button variant="primary" onClick={() => handleDeleteItem(cart.productId)}>Delete Item</Button>                
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default CartComponent;
