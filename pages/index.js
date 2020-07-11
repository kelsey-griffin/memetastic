import Link from 'next/link'
import { Start, End } from '../components/start'

export default function Home() {
  return (
    <div>
      <div>Meme Myself & I</div>
      <Start>START</Start>
      <End>END</End>
      <Link href="/cards"><a>Link to Meme Cards</a></Link>
    </div>
  )
}
