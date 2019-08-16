import React from 'react';
import service from './service/Service';
import logo from "./components/recursos/assets/images/logo-almundo.svg"
import GridHoteles from "./components/GridHoteles"
import FormFilter from "./components/FormFilter"
import './App.css';

class App extends React.Component {

  // state = {
  //   hotels : []
  // }

  // async componentDidMount(){
  //   var hotels;
  //   try {
  //     hotels = await service.getHotels()
  //   } catch(e) { 
  //       console.error(e); 
  //       hotels = null 
  //   }
  //   this.setState({hotels})
  // }

  render(){
    return(
      <div>
        <div>
          <nav className="navbar navbar-light bg-light" style={{padding:0, marginLeft:15}}>
            <img src={logo} style={{background:"blue"}}></img>
          </nav>
        </div>
        <div className="App gridView" style={{border:"1px solid"}}>
          <div style={{border:"1px solid"}}>
            <FormFilter/>
          </div>
            <GridHoteles/>
        </div>
      </div>
    )
  }
}

export default App;