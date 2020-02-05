import React from 'react'
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom'


class Sidebar extends React.Component{
  render(){ console.log(this.props.folders)
        return(
        
        <div class='Sidebar'>
            <ul class='SidebarList'>
              {this.props.folders.map(sidebar =>
              <Sidebar
              name={sidebar.name}
              />
            )}
              </ul>
                console.log(this.props.name)
              <button>New Folder</button>
              
            
            </div>   
            
    );
  }
}

export default Sidebar;