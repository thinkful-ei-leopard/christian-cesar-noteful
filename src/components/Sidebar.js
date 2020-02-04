import React from 'react'
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class Sidebar extends React.Component{
  render(){
    return(
        <Router>
        <div className='Sidebar'>
            <ul className='SidebarList'>
              <li><NavLink to ="/Folder 1">Folder 1</NavLink></li>
              <li><NavLink to ="/Folder 2">Folder 2</NavLink></li>
              <li><NavLink to ="/Folder 3">Folder 3</NavLink></li>
            </ul>

            <Switch>
                <Route exact path="/Folder 1"></Route>
                <Route path="/Folder 2"></Route>
                <Route path="/Folder 3"></Route>
            </Switch>

            </div>   
            </Router>
    );
  }
}

export default Sidebar;