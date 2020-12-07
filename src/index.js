import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "antd/dist/antd.css";
import "./style/Index.css"

import App from './components/App';
import Projects from './components/projects.js';
import Name from './components/Name';
import NavigationBar from './components/NavigationBar.js';
import NotFoundPage from './components/NotFoundPage.js'
import Music from './components/Music.js'

import * as serviceWorker from './serviceWorker';



const Root = () =>  (
  <Router>
      <React.Fragment>
      <div className="wrapper">
          <Name />
          <NavigationBar />
          <div className="main-content">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/music" component={Music}/>
                <Route path="*" component={NotFoundPage} />

            </Switch>
          </div>
        </div>        
      </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
