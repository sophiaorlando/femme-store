import React, { useRef, useState } from 'react'
import './Login.css'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Collage from '../../assets/img/collage.jpg'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to login")
    }
    setLoading(false)

  }

  return (
    <>
      <div className="background ">
        <Container className=" d-flex align-items-center justify-content-center">
          <div className="gifBackground" style={{ backgroundImage: `url(${Collage})` }} >
            <div className="app w-100" style={{ maxWidth: "400px" }}>
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Log In</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required ref={emailRef} />
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" required ref={passwordRef} />
                    </Form.Group>
                    <Button disabled={loading} className="custom-btn w-100" type="submit" style={{ backgroundColor: `black`, color: `white`, border: `none` }}>Log In</Button>
                  </Form>
                  <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                  </div>
                </Card.Body>

              </Card>

            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Login
