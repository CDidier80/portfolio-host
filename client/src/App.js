import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import PortfolioPage from "./pages/PortfolioPage"
import SignInSignUpPage from "./pages/SignInSignUpPage"
import LandingPage from "./pages/LandingPage"
import SettingsPage from "./pages/SettingsPage"
// import Mothership from "./pages/Mothership"
import ProfileForm from "./pages/subcomponents/ProfileForm"


// import SignInSignUp from "./pages/SignInSignUp"
// import ProtectedRoute from './components/ProtectedRoute'
// import Layout from '../src/pages/components/Layout'
// hello
const App = (props) => {
    const [pageIsLoaded, setLoaded] = useState(true)
    const [session, setSession] = useState(null)
    const [authenticated, setAuth] = useState(false)
    const [userInfo, setUserInfo]= useState(null)
  //   const verifyTokenValid = async () => {
  //     const token = localStorage.getItem('token')
  //     if (token) {
  //       try {
  //           const session = await CheckSessionService()
  //           setSession(session)
  //           setAuthenticated(true)
  //           (() => props.history.push('/main'))()
  //           } catch (error) {
  //             setSession(null)
  //             setAuthenticated(false)
  //             localStorage.clear()
  //           }
  //     }
  // }


  // props is an object with set k:v pairs in React
  // it comes with 3 main keys: location, history, and match
  
  // props = {...props, ...setAuth, ...authenticated}

/*
props is an object with set k:v pairs in React
it comes with 3 main keys: location, history, and match
props = {
  location: {"stuff"},
  history: {"stuff"}, --> added by Browser Router
  match: {"stuff"}
}

inline props on components add a new key:value pair to props: 
<component newProp={example: value} />  =>

props = {
  location: {"stuff"},
  history: {"stuff"}, 
  match: {"stuff"},
  newProp: {example : value}
}

When you pass props with spread operator {...props} you're emptying the contents of the parent props into the 
empty props object of the child component


*/
//   goToSignupPage = async (e) => {
//     e.stopPropagation()
//     const linkClassName = e.target.className
//     console.log('Link Class Name :', linkClassName)
//     await this.setState({loginPageDefault: linkClassName})
//     await this.props.history.push('/login')
// }

const saveUser = (e, props, index) => {
console.log("saveUser", e)
}

    return (
      <main className="App">
        {!pageIsLoaded ? <div><h3>Loading...</h3></div> : 
          <Switch> 
              <Route exact path="/"      component={ (props) =>  <LandingPage      {...props}  authenticated={authenticated} userInfo={userInfo} /> }/>
              <Route path="/main"        component={ (props) =>  <MainPage         {...props}  authenticated={authenticated} userInfo={userInfo} />  }/> 
              <Route path="/portfolio"   component={ (props) =>  <PortfolioPage    {...props}  authenticated={authenticated} userInfo={userInfo} />  }/>
              <Route path="/signin"      component={ (props) =>  <SignInSignUpPage {...props}  authenticated={authenticated} userInfo={userInfo} setAuth={setAuth} setUserInfo={setUserInfo}/>}/>             
              <Route path="/settings"    component={ (props) =>  <SettingsPage     {...props}  authenticated={authenticated} userInfo={userInfo} />  }/>
              <Route path="/profileform" component={ (props) =>  <ProfileForm      {...props}  authenticated={authenticated} userInfo={userInfo} />  }/>              
          </Switch>
        }
      </main>
    )
  }

export default withRouter(App)

// appJsProps={...props}