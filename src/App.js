import React from 'react';
import Header from './components/fragments/Header';
import Navigation from './components/fragments/Navigation';
import MainContent from './components/other/MainContent';
import Footer from './components/fragments/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import VisitorList from './components/visitor/VisitorList'
import VisitorDetails from './components/visitor/VisitorDetails'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/visitors" component={VisitorList} />
          <Route exact path="/visitors/details/:visitorId" component={VisitorDetails} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;