import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AskQuestionPage from './pages/AskQuestionPage'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path="/ask-question-page"
            component={AskQuestionPage}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
