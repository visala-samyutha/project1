import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';


function HomeComponent() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProductData();
  }, []);
  const fetchProductData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/home/");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const handleAddToCart = async (pid) => {
      const id = "6651997f165e606433deb43a"
      console.log(pid)
      try {
          const response = await axios.post(`http://localhost:3002/home/${id}/${pid}`);
          alert(response.data.message);
          fetchProductData();
      } catch (error) {
          console.error("There was an error adding the product to the cart:", error);
          alert("An error occurred while adding the product to the cart. Please try again.");
      }
  };
  const handlePlaceOrder=async(pid)=>{
    const id = "6651997f165e606433deb43a"
      try {
          const response = await axios.post(`http://localhost:3002/order/direct/${id}/${pid}`);
          alert(response.data.message);
          fetchProductData();
      } catch (error) {
          alert("An error occurred while adding the product to the cart. Please try again.");
      }
  }
  

    return(
       <>
        <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
                {products.map((product) =>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={product.imageUrl} style={{height:'250px',width:'20rem'}}/>
                        <Card.Body>
                            <Card.Text>Product Name:{product.productName}</Card.Text>        
                            {/* <Card.Text>Price:{product.price}</Card.Text> */}
                            <Card.Text>Price:{product.price}</Card.Text>
                            <div className="d-flex justify-content-between">
        <Button variant="primary"  onClick={() => handleAddToCart(product._id)}>Add to cart</Button>
        <Button variant="primary" onClick={() => handlePlaceOrder(product._id)}>Place order</Button>
    </div>
                        </Card.Body>
                    </Card>
                )}</Container>
            </>
    )
}
export default HomeComponent