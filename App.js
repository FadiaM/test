import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Home from './Home';
import MindMap from './MindMap';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/MindMap' exact={true} component={MindMap}/>
                  </Switch>
             </Router>
        );
    }
}
 
export default App;