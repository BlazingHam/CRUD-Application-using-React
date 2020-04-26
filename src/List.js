import React from 'react';
import {connect} from 'react-redux';
import Data from './Data.js';



const mapStateToProps = state => ( {
  list:state.change.list                         // Accessing list from the store
  });

class NList extends React.Component{
    
 
    render(){
        if(this.props.list.length===0){           // If data in list is empty
            return(
                <div className='List1'>
                    <h3>List of people</h3>
                        <h4>No Data</h4> 
                </div> 
            );
        }
        else{
            return(
                <div className='List2'>
                <h3>List of people</h3>
                    <div className='table'>           {/* using divs to create table */}
                        <div className='Header'>      {/* Header elements */}
                            <div className='Cell'>
                            <label>Name</label> 
                            </div>
                            <div className='Cell'>
                            <label>Age</label> 
                            </div>
                            <div className='Cell'>
                            <label>Actions</label> 
                            </div>
                        </div>
                        {this.props.list.map((list) =>  (      
                            <Data list={list} key={list.id} />     
                            ))}              {/* map is used to access  each element of the array list*/}
                    </div>  
                </div> 
            );
        }
    }
}
const List=connect(
mapStateToProps)(NList);                   //Connects the component with the store

export default List;

