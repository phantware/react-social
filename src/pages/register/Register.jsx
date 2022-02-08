import axios from 'axios'
import { useRef } from 'react'
import { useHistory } from 'react-router'
import './register.css'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault()
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {
        await axios.post('/auth/register', user)
        history.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='register'>
      <div className='registerWrapper'>
        <div className='registerLeft'>
          <h3 className='registerLogo'>Lets Konnect</h3>
          <span className='registerDesc'>
            Connect with friends and the world around you on Lets Konnect
          </span>
        </div>
        <div className='registerRight'>
          <form className='registerBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              className='registerInput'
              ref={username}
            />
            <input
              placeholder='Email'
              type='email'
              required
              className='registerInput'
              ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              minLength='6'
              required
              className='registerInput'
              ref={password}
            />
            <input
              placeholder='Password Again'
              type='password'
              required
              className='registerInput'
              ref={passwordAgain}
            />

            <button className='registerButton' type='submit'>
              Sign Up
            </button>
            <button className='registerRegisterButton'>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
