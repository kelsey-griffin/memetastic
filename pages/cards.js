class Card {
  constructor(memeName, points) {
    this.memeName = memeName;
    this.points = points;
  }
};

const trollFace = new Card ('trollFace', 5);
const badLuckBrian = new Card ('badLuckBrian', -5);
const overlyAttachedGirlfriend = new Card ('overlyAttachedGirlfriend', 5);
const scumBagSteve = new Card ('scumBagSteve', 5);
const michaelJacksonEatingPopcorn = new Card ('michaelJacksonEatingPopcorn', 10);
const grumpyCat = new Card ('grumpyCat', 5);
const ermahgherdGirl = new Card ('ermahgherdGirl', 5);
const arthurFist = new Card ('arthurFist', 5);
const philosoraptor = new Card ('philosoraptor', 10);
const successKid = new Card ('successKid', 5);
const squintingFry = new Card ('squintingFry', 5);
const rollSafe = new Card ('rollSafe', 5);
const oneDoesNotSimply = new Card ('oneDoesNotSimply', 5);
const nyanCat = new Card ('nyanCat', 20);
const sarcasticWillyWonka = new Card ('sarcasticWillyWonka', 10);
const spongebobRainbow = new Card ('spongebobRainbow', 5);
const spongebobMocking = new Card ('spongebobMocking', 15);
const prettySquidward = new Card ('prettySquidward', 5);
const evilPatrick = new Card ('evilPatrick', -5);

const deck = [
  trollFace,
  badLuckBrian,
  overlyAttachedGirlfriend,
  scumBagSteve,
  michaelJacksonEatingPopcorn,
  grumpyCat,
  ermahgherdGirl,
  arthurFist,
  philosoraptor,
  successKid,
  squintingFry,
  rollSafe,
  oneDoesNotSimply,
  nyanCat,
  sarcasticWillyWonka,
  spongebobRainbow,
  spongebobMocking,
  prettySquidward,
  evilPatrick
];

export default function Home() {
  console.log(deck)

  return deck.map((card,index) => {
    return (
      <div key={index}>
        <div>Meme Name: {card.memeName}</div>
        <div>Points: {card.points}</div>
      </div>
    )
  }
  )
}
