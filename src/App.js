import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import TeamMatches from './components/TeamMatches'

import Home from './components/Home'

import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route path="/bad-path" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
