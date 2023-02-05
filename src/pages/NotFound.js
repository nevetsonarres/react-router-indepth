import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sunt minus iusto veritatis maxime nihil distinctio, ipsam ullam nisi reiciendis, qui laboriosam tempore quae. Similique veritatis porro beatae. Reprehenderit, nobis.</p>

          <p>Go to the <Link to='/'>Homepage</Link>.</p>
    </div>
  )
}
