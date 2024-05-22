import React from 'react'
import Login from './Login '
import Registration from './Registration'
import { BrowserRouter as Router ,Route,Routes,useNavigate } from 'react-router-dom'
import CreateProject from './CreateProject'
import Dashboard from './Dashboard'
import ProjectList from './ProjectList'
import DemoChart from './DemoChart'

function App() {
  return (
    <div>

      {/* <Login/> */}
      {/* <Registration/> */}
       
      
      <Router>
        <Routes>
         
         <Route path='/reg' Component={Registration}/>
         <Route path='/' Component={Login}/>
         <Route path='/project' Component={CreateProject}/>
         <Route path='/dashboard' Component={Dashboard}/> 
          <Route path='/list' Component={ProjectList}/>
          <Route path='/chart' Component={DemoChart}/>



        </Routes>
      </Router>
    </div>
  )
}

export default App
