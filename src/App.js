import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Note from './components/Note'
import Notelist from './components/Notelist'
import store from './dummy-store'

class App extends React.Component {
  state = store
  render() {
    console.log(this.state.folders)
  return (
  
    <main className='App'>
      <Header />
      <Sidebar 
      folders={this.state.folders}/>
      <Notelist
        folders={this.state.folders}
        notes={this.state.notes} />
    </main>
  );
}
}
export default App;
