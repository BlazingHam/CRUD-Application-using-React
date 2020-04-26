import React from 'react';
import add from './actions/add.js';
import {connect} from 'react-redux';
import {Link} from'react-router-dom'; 

const mapDispatchToProps =({
   add
});

class Form extends React.Component{

    constructor(props){
        super(props);                                                                     
        this.state={check:[]}
        this.handleSubmit=this.handleSubmit.bind(this);
        }
 

        
        handleSubmit(event){
            event.preventDefault();           // Used to prevent refreshing upon clicking submit
            const name=this.name.value;
            const age=this.age.value;
            const id=(name+age).length + Math.floor((Math.random() * 100) + 1);
            const data={name,age,id};
            this.props.add(data);              // Send data to add action
        }

        
        render(){
           
           
            return(
                <div className='Perform'>
                    <h2>Add User</h2>
                    <style>{'body{background-color:beige;}'}</style> 
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Enter Name</label>
                    <input type='text' ref={input=>this.name=input}></input>
                    <label>Enter Age</label>
                    <input type='text'ref={input=>this.age=input}></input>
                    <input type='submit' value='submit'/>
                    </form>
                    <Link to="/">Back</Link>   {/* Goes back to homepage*/}
                </div>
                
            );

        }
}

const Create=connect(
    null,
    mapDispatchToProps)(Form);     // Connects action with reducer 

export default Create;


//