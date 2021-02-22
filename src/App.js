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
import ReviewList from './components/views/review/ReviewList'

import VisitorDetails from './components/views/visitor/VisitorDetails'
import MealDetails from './components/views/meal/MealDetails'
import ReviewDetails from './components/views/review/ReviewDetails'

import VisitorForm from './components/views/visitor/VisitorForm'
import MealForm from './components/views/meal/MealForm'
import ReviewForm from './components/views/review/ReviewForm'

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
          <Route exact path="/reviews" component={ReviewList} />

          <Route exact path="/visitors/details/:visitorId" component={VisitorDetails} />
          <Route exact path="/meals/details/:mealId" component={MealDetails} />
          <Route exact path="/reviews/details/:reviewId" component={ReviewDetails} />

          <Route exact path="/visitors/add" component={VisitorForm} />
          <Route exact path="/visitors/edit/:visitorId" component={VisitorForm} />
          <Route exact path="/meals/add" component={MealForm} />
          <Route exact path="/meals/edit/:mealId" component={MealForm} />
          <Route exact path="/reviews/add" component={ReviewForm} />
          <Route exact path="/reviews/edit/:reviewId" component={ReviewForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;