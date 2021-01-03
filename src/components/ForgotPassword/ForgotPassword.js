import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Collage from '../../assets/img/collage.jpg'
import "./ForgotPassword.css"

function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset Password")
    }
    setLoading(false)

  }

  return (
    <>
      <div className="background">

      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className=" gifBackground" style={{ backgroundImage: `url(${Collage})` }}>

          <div className="app w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required ref={emailRef} />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit" style={{ backgroundColor: `black`, color: `white`, border: `none` }} >Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                  <Link to="/login">Login</Link>
                </div>
              </Card.Body>
              <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
              </div>
            </Card>

          </div>
        </div>
      </Container>
      </div>
    </>
  )
}

export default ForgotPassword
