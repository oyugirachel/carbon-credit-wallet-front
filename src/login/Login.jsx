// import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Card,Form, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom'
import logo from '../image.png'




export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
//   const history = useHistory();
const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await  fetch("https://carbon-cash-credit.onrender.com/user/login",{
                    method: 'post',
                    headers: { "Content-Type": "application/json",
                  "authorization":"Roo0oTY&#*@&G&G$Lwh89Aejd4T7I38GuihIejnD(paiper)" },
                  body: JSON.stringify({ email, password }),
                  });
      // Handle successful login
    const data = await response.json();
  // Handle success response
  if (data.success) {
    
    
    // Store user data in localStorage or context
    // localStorage.setItem('user', JSON.stringify(data));
    const name = email.split('@')[0];
    localStorage.setItem('username', name );
    navigate('/Dashboard');
    // Redirect to home page
    // window.location.href = '/Dashboard';
  } else {
    alert('Invalid email or password, Kindly Sign in or reset password');
}
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    
    <div className="custom-background">
        <div className="measures">
        <div className="topLeft">
            <img 
            className="topLogo"
            src={ logo } alt="logo"/>
        </div>
        
        <Container fluid >
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="col-md-3 align-items-left" >
            <Card style={{ width: '20rem', padding:'30px'}}>
                <Card.Body style={{ justify: 'start' }}>
                

                    <Card.Title>
                       <h1 > Login</h1>
                    </Card.Title>

                    <Form onSubmit={handleSubmit} className="d-flex justify-content-start">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                            </Form.Group>

                        </Form.Group>
                        {error && <p>{error}</p>}
                          <button type="submit">Login</button>
                    </Form>
                    
                    {/* <Button type="submit" className="mb-3 btn-md " variant="outline-secondary" >  
                       <Link to="/Dashboard"> Login
                                </Link>
                        </Button> */}
                    <br/>
                    <Card.Text>
                        <p>
                            <Link to="/Register" > Don't have an account? Sign Up </Link> </p>
                    </Card.Text>

                    <Card.Text>
                        <p>
                           <Link to="/"> Forgot your password? Reset </Link> </p>
                    </Card.Text>

                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        
        </div>
    </div>

  )
}



