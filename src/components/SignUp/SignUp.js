import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Collage from '../../assets/img/collage.jpg'
import './SignUp.css'

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed create an account")
    }
    setLoading(false)

  }

  return (
    <>
      <div className="background">
        <Container className=" d-flex align-items-center justify-content-center">
          <div className=" gifBackground" style= {{backgroundImage: `url(${Collage})`}}>
            <div className="app w-100" style={{ maxWidth: "400px" }}>
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
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
                    <Form.Group id="password-confirm">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control type="password" required ref={passwordConfirmRef} />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit" style={{ backgroundColor: `black`, color: `white`, border: `none` }} >Sign Up</Button>
                  </Form>
                  <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Login</Link>
                    {/* Login */}
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

export default Signup
