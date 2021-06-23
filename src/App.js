import React from "react";
import { Switch, Route } from 'react-router-dom'
import Navs from './components1/Navs';
function App() {
  return (
    <div>
      <Navs />

    
    <Switch>
      <Route exact path="/">
        This is home page 
      </Route>
     <Route exact path="/starred">
        This is starred 
      </Route>
      <Route>this is 404 page</Route>

    </Switch>
    </div>
  );

  
}

export default App;
