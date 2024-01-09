import React from 'react'
import Hello from './components/Hellp/hello'
import Welcome from './components/Welcome/welcome.js'
class App extends React.Component{
  render(){
    return(
      <div>
        
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
//暴露APP组件
export default App