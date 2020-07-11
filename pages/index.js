import Head from "next/head";
import Link from "next/link";
import { Start, End } from "../components/start";
import GameRules from "../components/rules";
import Game from "../components/Game";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meme Myself & I</title>
        <script type="text/javascript" src="static/app.js" defer />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GameRules />
      <Start id="start-game" disabled={false}>
        START
      </Start>
      <End id="end-game" disabled={true}>
        END
      </End>

      <Game />

      <Link href="/cards">
        <a>Link to Meme Cards</a>
      </Link>
    </>
  );
}
