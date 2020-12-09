import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import PortfolioPage from "./pages/PortfolioPage"
import SignInSignUpPage from "./pages/SignInSignUpPage"
import LandingPage from "./pages/LandingPage"
import SettingsPage from "./pages/SettingsPage"
// import Mothership from "./pages/Mothership"
<<<<<<< HEAD
import Image from "./pages/subcomponents/imageloadtestLuis"
import BioForm from "./pages/subcomponents/BioForm"
=======
import ProfileForm from "./pages/subcomponents/ProfileForm"
>>>>>>> f48d43021353c76f8f66f36b6a862f3e85cdeb1b


// import SignInSignUp from "./pages/SignInSignUp"
// import ProtectedRoute from './components/ProtectedRoute'
// import Layout from '../src/pages/components/Layout'
// hello
const App = (props) => {
    const [pageIsLoaded, setLoaded] = useState(true)
    
    const useEffect = () => {
        if (!pageIsLoaded) {
          setLoaded(true)
        }
      }

    const [session, setSession] = useState(null)
    const [authenicated, setAuthenticated] = useState(null)

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

  // props.session = session
  // props = {...props, ...session}
  // props = {...props, ...authenticated}



//   goToSignupPage = async (e) => {
//     e.stopPropagation()
//     const linkClassName = e.target.className
//     console.log('Link Class Name :', linkClassName)
//     await this.setState({loginPageDefault: linkClassName})
//     await this.props.history.push('/login')
// }

    return (
      <main className="App">
        {!pageIsLoaded ? <div><h3>Loading...</h3></div> : 
          <Switch> 
<<<<<<< HEAD
              <Route exact path="/"    component={(props) =>  <LandingPage {...props}      />  }/>
              <Route path="/main"      component={(props) =>  <MainPage {...props}         />  }/> 
              <Route path="/portfolio" component={(props) =>  <PortfolioPage {...props}    />  }/>
              <Route path="/signin"    component={(props) =>  <SignInSignUpPage {...props} />  }/>             
              <Route path="/settings"  component={(props) =>  <SettingsPage {...props}     />  }/>
              <Route path="/imagetest" component={(props) =>  <Image {...props}            />  }/>
              <Route path="/bio"       component={(props) =>  <BioForm {...props}          />  }/>
              {/* <Route path="/service"   component={(props) =>  <Mothership {...props}       />  }/> */}
=======
              <Route exact path="/"    component={ (props) =>  <LandingPage      {...props}  />  }/>
              <Route path="/main"      component={ (props) =>  <MainPage         {...props}  />  }/> 
              <Route path="/portfolio" component={ (props) =>  <PortfolioPage    {...props}  />  }/>
              <Route path="/signin"    component={ (props) =>  <SignInSignUpPage {...props}  />  }/>             
              <Route path="/settings"  component={ (props) =>  <SettingsPage     {...props}  />  }/>
              <Route path="/profileform"       component={ (props) =>  <ProfileForm          {...props}  />  }/>
              {/* <Route path="/service"   component={(props) =>  <Mothership       {...props}  />  }/> */} 
>>>>>>> f48d43021353c76f8f66f36b6a862f3e85cdeb1b
          </Switch>
        }
      </main>
    )
  }

export default withRouter(App)

