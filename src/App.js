import React from 'react';
import './App.css'; 
import List from './List.js';
import {Redirect} from'react-router-dom'; 
 

class App extends React.Component{

  constructor(props){
    super(props);                                                              
    this.state={redirect:false}                                         // Using react-router to redirect
    
    }

  render(){
    if(this.state.redirect){
      return(
        <Redirect to="/add"/>                                         // Redirects to add
      );
    }
    return (
      <div className='App'>                                    
        <style>{'body{background-color:beige;}'}</style>  
        <h1>Simple CRUD</h1>
        
        <List/>
        
        <button className='Button1' onClick={()=>this.setState({redirect:true})}>Add User</button>     {/* Button to add user */}

      </div>                                 
    );
    }
}


export default App;                                                 
