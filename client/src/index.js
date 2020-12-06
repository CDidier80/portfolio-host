import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "./App"
const {httpRequest, post, get, put} = require("../httpRequests")

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App props={httpRequest, post, get, put}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)