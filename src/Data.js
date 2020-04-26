import React from 'react';
import {connect} from 'react-redux';
import del from './actions/del.js';
import {Redirect} from'react-router-dom'; 


 const mapDispatchToProps =({
    del                                                   // Access actions from the component
 });



class NData extends React.Component{
    constructor(props){
        super(props);
        this.state={redirect:false,temp:0}
    }
    dele(id){
        this.props.del(id)                              // Goes to delete action with Id
        
    } 
    handleChange(id){
        this.setState({temp:id})                    // Stores the id in temp
        this.setState({redirect:true})  
    }
    render(){
        if(this.state.redirect){
            
            return(
                <Redirect to={{
                    pathname:'/edit',
                    state:{id:this.state.temp}       //Redirects to edit page and sends id along with it
                }}/>
            );
        }
        
        return(
            <div key={this.props.list.id} className='row'>            {/* Table elements */}
                        <div className='Cell'>
                            <label>{this.props.list.name}</label>
                        </div>
                        <div className='Cell'>
                            <label>{this.props.list.age}</label>
                        </div>
                        <div className='Cell'>
                            <button className='Button2' onClick={()=>this.dele(this.props.list.id)}>Delete</button>       {/* Goes directly to delete reducer */}
                            <button className='Button2' onClick={()=>this.handleChange(this.props.list.id)}>Edit</button> {/* Goes to edit page */}
                        </div>
                    </div>
        );
        
    }
}

const Data=connect(null,
    mapDispatchToProps)(NData); // Connects actions with reducer and component

export default Data;

