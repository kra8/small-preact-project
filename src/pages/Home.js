import preact from 'preact'
import Link from '../components/Link'

const Home = () => (
  <div id="home">
    <span>Hello, world!</span>
    <Link href="/1234">
      <button>Click Me</button>
    </Link>
  </div>
)

export default Home