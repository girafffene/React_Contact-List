import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import List from "./ListView"
import Single from "./SingleView"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={List} />
        <Route path="/singleView/:id" component={Single} />
      </div>
    </Router>
  )
}

export default App
