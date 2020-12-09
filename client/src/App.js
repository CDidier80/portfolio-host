import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import PortfolioPage from "./pages/PortfolioPage"
import SignInSignUpPage from "./pages/SignInSignUpPage"
import LandingPage from "./pages/LandingPage"
import SettingsPage from "./pages/SettingsPage"
import Mothership from "./pages/Mothership"
import Image from "./pages/subcomponents/imageloadtestLuis"
import BioForm from "./pages/subcomponents/BioForm"


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
              <Route exact path="/"    component={(props) =>  <LandingPage {...props}      />  }/>
              <Route path="/main"      component={(props) =>  <MainPage {...props}         />  }/> 
              <Route path="/portfolio" component={(props) =>  <PortfolioPage {...props}    />  }/>
              <Route path="/signin"    component={(props) =>  <SignInSignUpPage {...props} />  }/>             
              <Route path="/settings"  component={(props) =>  <SettingsPage {...props}     />  }/>
              <Route path="/imagetest" component={(props) =>  <Image {...props}            />  }/>
              <Route path="/bio"       component={(props) =>  <BioForm {...props}          />  }/>
              <Route path="/service"   component={(props) =>  <Mothership {...props}       />  }/>
          </Switch>
        }
      </main>
    )
  }

export default withRouter(App)

