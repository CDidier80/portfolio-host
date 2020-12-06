import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const HomePage = ()  => {
  return(
<div>
<h3>
  Welcome to Dev Ports
</h3>
<h4>
  Your site to easy share your portfolio and make new connection with other developers.
</h4>
<Link to="/login">
  <Button variant="outlined" color="primary">
    Login
</Button>
</Link>
  <Link to="/signup">
    <Button variant="outlined" color="primary">
      Sign up
</Button>
  </Link>
</div>
  )
}

export default HomePage