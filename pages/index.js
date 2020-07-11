import Head from 'next/head';
import Link from 'next/link';
import { Start, End } from '../components/start';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Meme Myself & I</title>
          <script type="text/javascript" src="static/app.js" defer/>
          <meta 
            name="viewport" 
            content="initial-scale=1.0, width=device-width" 
          />
        </Head>
        <Start id="start-game" disabled={false}>START</Start>
        <End id="end-game" disabled={true}>END</End>
        <Link href="/cards"><a>Link to Meme Cards</a></Link>
      </div>
  )
}
