import React, {useEffect, useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from "./pages/LandingPage"
import PortfolioPage from "./pages/PortfolioPage"
import SignInSignUpPage from "./pages/SignInUpPage"
import LandingPage from "./pages/HomePage"
// import SignInSignUp from "./pages/SignInSignUp"
// import ProtectedRoute from './components/ProtectedRoute'
// import Layout from '../src/pages/components/Layout'
// hello

const App = (props) => {
  const [pageIsLoaded, changeLoadedBoolean] = useState(false)

  


//   goToSignupPage = async (e) => {
//     e.stopPropagation()
//     const linkClassName = e.target.className
//     console.log('Link Class Name :', linkClassName)
//     await this.setState({loginPageDefault: linkClassName})
//     await this.props.history.push('/login')
// }

    return (
      <main className="App">
        {pageIsLoaded ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <Switch>
              <Route exact path="/" component={(props) =><LandingPage {...props} />}/>
              <Route path="/home" component={(props) => <HomePage {...props} />} />
              <Route path="/portfolio" component={(props) => <PortfolioPage {...props} />}/>
              <Route path="/account" component={(props) => <SignInSignUpPage {...props}/>}/>
            </Switch>
        )}
      </main>
    )
  }

export default withRouter(App)