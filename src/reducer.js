import {createStore,combineReducers,applyMiddleware} from'redux';
import thunk from 'redux-thunk';    // used for middleware

const initial={
    list:[]         // Intializing list
};


function change(state=initial,action){
    
    if(action.type==='add')
    {
        return Object.assign({}, state, {             //  Object.assign creats object type
            list: state.list.concat(action.data)       // Concat appends data
          });
    }
    else if(action.type==='delete'){
        return Object.assign({}, state, {
            list: state.list.filter((x)=>x.id !== action.id)   // Filter retuns array with given condition
          });
    }
    else if(action.type==='edit'){
        return Object.assign({}, state, {
            list: state.list.map((x)=>{
                if(x.id===action.data.id){
                    return{
                    ...x,                     // Puts all the elements before this one in the array
                    name:action.data.name,     // Changes name
                    age:action.data.age        // Changes age
                }
                }
                else{
                    return x            // otherwise return the same array
                }
            }
        )
        });
    }
    return state;
}

export const reducer=combineReducers({change,});    // Used as a reference to combine reducers

export function configureStore(initial) {
    const store = createStore(reducer, initial,applyMiddleware(thunk));
    return store;
};
  
export const store = configureStore();

// (x)=>{
//     if(x.id===action.id){
//         console.log("hey")
//         x.name=action.name
//         x.age=action.age
//     }
// }