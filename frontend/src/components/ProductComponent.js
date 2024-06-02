import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Card, Container, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductComponent = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        imageUrl: "",
        productName: "",
        price: "",
        description: "",
        quantity: ""
    });
    const [show, setShow] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3002/admin/get');
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProducts();
    }, []);

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editProduct) {
            try {
                const response = await axios.patch(`http://localhost:3002/admin/productEdit/${editProduct._id}`, formData);
                const updatedProducts = products.map((product) =>
                    product._id === response.data._id ? response.data : product
                );
                setProducts(updatedProducts);
                setFormData({
                    imageUrl: "",
                    productName: "",
                    price: "",
                    description: "",
                    quantity: ""
                });
                setEditProduct(null);
                setShow(false);
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            try {
                const response = await axios.post('http://localhost:3002/admin/addProduct', formData);
                setProducts([...products, response.data]); // Update the product list with the new product
                setFormData({
                    imageUrl: "",
                    productName: "",
                    price: "",
                    description: "",
                    quantity: ""
                });
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    const handleSingleProduct = (id) => {
        navigate(`/getProduct/${id}`);
    };

    const handleEdit = (product) => {
        setEditProduct(product);
        setFormData(product);
        setShow(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3002/admin/delete/${id}`);
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Container>
            <h2 className="mt-5">Add New Product</h2>
            <Form onSubmit={handleSubmit} className="mb-5">
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name="productName" value={formData.productName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mr-2">{editProduct ? "Edit Product" : "Add Product"}</Button>
                <Button variant="secondary" onClick={() => setShow(true)}>Cancel</Button>
            </Form>

            <h2>Product List</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product._id}>
                        <Card>
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="link" onClick={() => handleSingleProduct(product._id)}>See More</Button>
                                <Button variant="secondary" className="mx-2" onClick={() => handleEdit(product)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editProduct ? "Edit Product" : "Add New Product"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formImageUrl">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" name="productName" value={formData.productName} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">Save Changes</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ProductComponent;