import React, { Component } from 'react'
import Home from '../component/Home';
import Server from '../component/Server';
import Application from '../component/Application';
import {
	Switch,
	Route,
	Link,

  } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
	<div>
    
		<ul className="navbar1">
          <li>
            <Link to="/"><div class="link"><i class="fa fa-home"></i> Home</div></Link>
          </li>
          <li>
		  <Link to="/server"><div class="link"><i class="fa fa-server"></i> Server</div></Link>
          </li>
          <li>
		  <Link to="/application"><div class="link"><i class="fa fa-application"></i> Application</div></Link>
          </li>

		  <a href="#headerNav" data-toggle="modal" data-target="#check-health-status" className="button">Check Health Status</a>
              
        </ul>

		
                        
        <Switch>
          <Route path="/server">
            <Server />
          </Route>
          <Route path="/application">
            <Application />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

	  
        )
    }
}