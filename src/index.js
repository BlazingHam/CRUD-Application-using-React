import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App from './App.js';
import Create from './Create.js';
import Edit from './Edit.js';
import {store} from './reducer.js';
import * as serviceWorker from './serviceWorker';
import {Provider} from'react-redux';                        // Used to intialize the store and make it global
import {BrowserRouter as Router,Route, Switch} from'react-router-dom'; 

store.subscribe(() => console.log(store.getState()))      // Accessing the store contents

ReactDOM.render(
<Provider store={store}>
    <Router>
        `<Switch>                                 {/* To switch between different pages */}
            <Route exact path="/">                 {/* Specifying pages with different file paths*/}
                <App/>
            </Route>
            <Route path="/add">
                <Create/>
            </Route>
            <Route path="/edit" >
                <Edit/>
            </Route>
        </Switch>
    </Router>`
</Provider> 
, document.getElementById('root'));

serviceWorker.unregister();
