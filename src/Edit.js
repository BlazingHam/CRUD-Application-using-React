import React from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from'react-router-dom'; 
import edit from './actions/edit.js';

const mapDispatchToProps =({
    edit
 });


class NEdit extends React.Component{
    constructor(props){
        super(props);                                                      // Necessary to access this.props                
        this.handleSubmit=this.handleSubmit.bind(this);
    }
   
handleSubmit(event){
    event.preventDefault();               // Used to prevent refreshing upon clicking submit
    const name=this.name.value;
    const age=this.age.value;
    const id=this.props.location.state.id;    // Id stored in props.location
    const data={name,age,id}
    this.props.edit(data)                  // Send data to edit action
}
    render(){
        return(
            <div className='Perform'>
                <h2>Edit User</h2>
                <style>{'body{background-color:beige;}'}</style> 
                <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Change Name</label>
                <input type='text' ref={input=>this.name=input}></input>
                <label>Change Age</label>
                <input type='text'ref={input=>this.age=input}></input>
                <input type='submit' value='submit'/>
                </form>
                <Link to="/">Back</Link>
            </div>
        );
    }
}

const Edit=connect(null,
    mapDispatchToProps)(NEdit);     // Connects action with reducer 

export default withRouter(Edit);   // withRouter is used to retrive the id