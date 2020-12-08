import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "./App"
import "./index.css"
// const {post, get, put, del} = require("./httpRequest.js")


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App props={null}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)