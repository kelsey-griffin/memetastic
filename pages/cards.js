class Card {
  constructor(memeName) {
    this.memeName = memeName;
  }
}

const trollFace = new Card ('trollFace');
const badLuckBrian = new Card ('badLuckBrian');
const overlyAttachedGirlfriend = new Card ('overlyAttachedGirlfriend');
const scumBagSteve = new Card ('scumBagSteve');
const michaelJacksonEatingPopcorn = new Card ('michaelJacksonEatingPopcorn');
const grumpyCat = new Card ('grumpyCat');
const ermahgherdGirl = new Card ('ermahgherdGirl');
const arthurFist = new Card ('arthurFist');
const philosoraptor = new Card ('philosoraptor');
const successKid = new Card ('successKid');
const squintingFry = new Card ('squintingFry');
const rollSafe = new Card ('rollSafe');
const oneDoesNotSimply = new Card ('oneDoesNotSimply');
const nyanCat = new Card ('nyanCat');
const sarcasticWillyWonka = new Card ('sarcasticWillyWonka');
const spongebobRainbow = new Card ('spongebobRainbow');
const spongebobMocking = new Card ('spongebobMocking');
const prettySquidward = new Card ('prettySquidward');
const evilPatrick = new Card ('evilPatrick');

const deck = [trollFace,
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
  evilPatrick];

export default function Home() {
  console.log(deck)

  return deck.map((card,index) => <div key={index}>{card.memeName}</div>)
}
