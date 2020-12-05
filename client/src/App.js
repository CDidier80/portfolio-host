import React, {useEffect, useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import CreateProfilePage from "./pages/CreateProfilePage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ViewProfilesPage from "./pages/ViewProfilesPage"
// import ProtectedRoute from './components/ProtectedRoute'
import "./styles/App.css"
// import Layout from '../src/pages/components/Layout'
// hello

const App = (props) => {
  const [pageIsLoaded, changeLoadedBoolean] = useState(false)

  useEffect(() => {
    console.log("useEffect reached")
    const getProfiles = async () => {
      if (!pageIsLoaded) {
        changeLoadedBoolean(true)
      }
    }
  })


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
              <Route exact path="/" component={(props) =><HomePage {...props} />}/>
              <Route path="/createprofile" component={(props) => <CreateProfilePage {...props} />}/>
              <Route path="/login" component={(props) => <LoginPage {...props}/>}/>
              <Route path="/signup" component={(props) => <SignupPage {...props}/>}/>
              <Route path="/profile" component={(props) => <ViewProfilesPage {...props}/>}/>
            </Switch>
        )}
      </main>
    )
  }

export default withRouter(App)

