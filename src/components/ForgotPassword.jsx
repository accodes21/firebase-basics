import React, {useRef, useState} from 'react'
import {Alert, Button, Card, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setMessage("")
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password")
        }
    
        setLoading(false)
      }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-3'>Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' required ref={emailRef} />
                    </Form.Group>
                    
                    <Button disabled={loading} className='w-100 mt-3' type='submit'>Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to='/login'>Log In</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2"> Want to create a account? <Link to='/signup'>Sign Up</Link> 
        </div>
    </>
  )
}
