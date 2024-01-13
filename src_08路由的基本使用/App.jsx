import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import Home from './components/HomeC/Home'
import About from './components/About/About'
class App extends React.Component{
  render(){
    return(
        <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠a标签跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现切换组建 这里是导航区域是按钮点击 */}

                  <Link className="list-group-item" to="/about">About</Link>
                  <br/>
                  <Link className="list-group-item" to="/home">Home</Link>

              
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 这里是内容区域是上面的点击之后把这个component显示出来 */}
                  <Route path="/about" component={About}/>
                  <Route path='/home' component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//暴露APP组件
export default App