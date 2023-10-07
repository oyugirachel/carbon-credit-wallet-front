import React, { useState } from 'react'
import "./register.css"
import {Card,Form, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();



const handleRegistration = async (e) => {
        e.preventDefault();
    
        // Send registration request to backend API
        const response = await fetch("https://carbon-cash-credit.onrender.com/user", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
          "authorization":"Roo0oTY&#*@&G&G$Lwh89Aejd4T7I38GuihIejnD(paiper)" },
          body: JSON.stringify({ name, email, password }),
        });
    
        // Handle success response
        const data = await response.json();
        if (data.success) {
          // Store user data in localStorage or context
          localStorage.setItem('user', JSON.stringify(data));
          navigate('/Dashboard');
        } else {
          // Display error message
          setError(response.message);

          alert('Registration failed');
        }
      };
    
  return (

    <div className="registerMain"> 
             
        <div className="regForm">

                <Container fluid >
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col className="col-md-3 align-items-left" >
                    <Card style={{ width: '500px', padding:'5px', marginTop:'50px', paddingTop:"10px"}}>
                        <Card.Body style={{ justify: 'start' }}>
                        

                            <Card.Title>
                            <h1 > REGISTRATION</h1>
                            </Card.Title>

                            <Form onSubmit={handleRegistration} className="d-flex justify-content-start">
                                <Form.Group className="mb-12" controlId="formBasicEmail">
                                         
                                    <Form.Label>Full Name</Form.Label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                                    {/* <Form.Label>Organization</Form.Label>
                                    <Form.Control type="text" placeholder="World Health Organization"/> */}

                                    <Form.Label>Business Email</Form.Label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                                    {/* <Form.Label>Phone Number </Form.Label>
                                    <Form.Control type="number" placeholder="081 394 8555"/> */}

                                    <Form.Label>Password</Form.Label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />


                                    <Form.Label> Confirm Password </Form.Label>
                                    <Form.Control type="password"  placeholder="*********"/>

                                </Form.Group>
                                {error && <p>{error}</p>}
     <button type="submit">register</button>

                            </Form>
                            <br/>
                            
                            
                            <br/>
                            <Card.Text>
                                <p>
                                    <Link to="/" > Already have an account? Sign In </Link> </p>
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
