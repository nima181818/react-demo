import React from 'react';
import logo from './logo.svg';
import './App.less';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Structure from './pages/structure/index.js'
import Defender from './pages/defender/index.js'
import Soldier from './pages/soldier/index.js'
import Armor from './pages/armor/index.js'
class App extends React.Component {
  constructor(props){
    super(props)
    this.handleRouteclick = this.handleRouteclick.bind(this)
  }
  render() {
    const routerlist = [{
      name: '建筑',
      path: '/'
    }, {
      name: '防御',
      path: '/defender'
    }, {
      name: '步兵',
      path: '/soldier'
    }, {
      name: '装甲',
      path: '/armor'
    }]
    return (
      <Provider store={store}>

        <BrowserRouter ref={(el)=>{this.routerel = el}}>

          <div className="tabbarContaibers">
            {
              routerlist.map((item, index) => {

                return (
                <div className="tabbarContaibers_items" onClick={()=>{
                  this.handleRouteclick(index,item.path)
                }} key={index} >{item.name}</div>
                )

              })
            }



          </div>
          <Route path='/' exact component={Structure}>

          </Route>
          <Route path='/defender' exact component={Defender}>

          </Route>
          <Route path='/soldier' exact component={Soldier}>

          </Route>
          <Route path='/armor' exact component={Armor}>

          </Route>
        </BrowserRouter>
      </Provider>
    );
  }
  handleRouteclick(index,route){
    this.routerel.history.push(route)
  }
}

export default App;
