import Head from "next/head";
import Link from "next/link";
import { Start, End } from "../components/start";
import GameRules from "../components/rules";
import MemeLord from "../components/MemeLord";
import Board from "../components/Board";
import Card from "../components/Card";

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
      <MemeLord identity="1"></MemeLord>
      <MemeLord identity="2"></MemeLord>
      <Link href="/cards">
        <a>Link to Meme Cards</a>
      </Link>
      <Board id="board-1" className="board">
        Board 1
        <Card draggable="true" id="asdf" className="1234">
          Card 1
        </Card>
      </Board>
      <Board id="board-2" className="board">
        Board 2
        <Card draggable="true" id="fdsa" className="1234">
          Card 2
        </Card>
      </Board>
    </>
  );
}
