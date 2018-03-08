import preact from 'preact'
import Router from 'preact-router'

import {
  Home,
  NoMatch
} from './pages'

const App = () => (
  <Router>
    <Home path="/" />
    {/* <About path="/about" /> */}
    <NoMatch default />
  </Router>
)

export default App
