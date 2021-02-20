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
import VisitorList from './components/views/visitor/VisitorList'
import MealList from './components/views/meal/MealList'
import VisitorDetails from './components/views/visitor/VisitorDetails'
import VisitorForm from './components/views/visitor/VisitorForm'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/visitors" component={VisitorList} />
          <Route exact path="/meals" component={MealList} />
          <Route exact path="/visitors/details/:visitorId" component={VisitorDetails} />
          <Route exact path="/visitors/add" component={VisitorForm} />
          <Route exact path="/visitors/edit/:visitorId" component={VisitorForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;