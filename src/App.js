import React, {useContext, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Context} from './context/Context'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  const context = useContext(Context)

  useEffect(()=>{console.log("placeholder")},[])

  return(
    <main>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/profile" render={() => <p>profile</p>} />
        <Route exact path="/my_application" render={() => <p>my application</p>} />
        <Route path="/tech" render={() => <p>tech</p>} />
      </Switch>
    </main>
  )
}

export default App;