import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextForm from './components/TextForm'
import { CreateUserService } from '../services/UsersService'


export default function HomePage(props) {
  const [email, setEmail] = useState()

  const handleChange = (event) => {
    let value = event.target.value
    setEmail(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await CreateUserService()
      props.history.push({
        pathname: '/login',
        state: { email: email }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{
      backgroundColor: "#303030",
      backgroundSize: "cover", minHeight: "91vh", paddingTop: "0vh"
    }}>
      <div>
        <nav>
          <div className="nav-wrapper red accent-4">
            <Link to="/login" className="brand-logo right ">Login</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="/"> Netflux </a></li>
            </ul>
          </div>
        </nav>

        <div className="signup-form-holder"
          style={{}}>
          <form className="signup-form" onSubmit={(event) => handleSubmit(event)}>
            <TextForm
              placeholder="Your email"
              name="email"
              value={email}
              type="text"
              onChange={(event) => handleChange(event)}
            />
            <Link to="/signup">
              <button className="btn waves-effect waves-light red accent-4">Sign Up </button>
            </Link>
          </form>
          <h3 style={{ color: "white" }}>
            Welcome to Netflux
                    </h3>
        </div>

        

      </div>
    </div>
  )
}

