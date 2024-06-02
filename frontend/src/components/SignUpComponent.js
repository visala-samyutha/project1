import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== repassword) {
            alert('Password and confirm password does not match')
        } else {
            // Perform signup logic here
            console.log("Signing up with:", name, email, mobile, password);
        }
    };

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('mobile', JSON.stringify(mobile));
        localStorage.setItem('password', JSON.stringify(password));
        localStorage.setItem('rePassword', JSON.stringify(repassword));
    }, [name, email, mobile, password, repassword]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Sign Up</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name" className="form-control" placeholder="Enter your name" autoFocus required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="uname" className="form-label">Email:</label>
                                    <input type="email" id="uname" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Phone No:</label>
                                    <input type="number" id="mobile" className="form-control" placeholder="Enter your phone number" required onChange={(e) => setMobile(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pass" className="form-label">Password:</label>
                                    <input type="password" id="pass" className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pass1" className="form-label">Re-Enter Password:</label>
                                    <input type="password" id="pass1" className="form-control" placeholder="Re-enter your password" required onChange={(e) => setRePassword(e.target.value)} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="agreeCheckbox" />
                                    <label className="form-check-label" htmlFor="agreeCheckbox">
                                        By continuing, I agree to the <Link to="/term">Terms And Conditions</Link> of FashionFusion
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark btn-lg">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpComponent;