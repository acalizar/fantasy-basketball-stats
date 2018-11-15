import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const auth = () => <h2>Logged In</h2>;

const AppRouter = () => (
  <Router>
    
      <Route path="/auth" component={auth} />
  </Router>
);

export default AppRouter;