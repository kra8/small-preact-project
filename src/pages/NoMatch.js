import preact from 'preact'
import Link from '../components/Link'

const NoMatch = () => (
  <div id="notfound">
    <span>Not found page!</span>
    <Link href="/">To home</Link>
  </div>
)

export default NoMatch