class MemeCard {
  constructor(memeName, points) {
    this.memeName = memeName;
    this.points = points;
  }
}

const lose50 = new MemeCard("Lose 50%", 0);
const doublePoints = new MemeCard("2X Followers", 0);
const clearBoard = new MemeCard("DoomsDay", 0);
const allDiscard = new MemeCard("All Discard");
const opponentDiscard = new MemeCard("Opponent Discard", 0);
const skipTurn = new MemeCard("Skip Opponent's Turn", 0);

const specialDeck = [
  lose50,
  doublePoints,
  clearBoard,
  allDiscard,
  opponentDiscard,
  skipTurn,
];

const test = new SpecialCard("test1", 50);

const trollFace = new MemeCard("trollFace", 5);
const badLuckBrian = new MemeCard("badLuckBrian", -5);
const overlyAttachedGirlfriend = new MemeCard("overlyAttachedGirlfriend", 5);
const scumBagSteve = new MemeCard("scumBagSteve", 5);
const michaelJacksonEatingPopcorn = new MemeCard(
  "michaelJacksonEatingPopcorn",
  10
);
const grumpyCat = new MemeCard("grumpyCat", 5);
const ermahgherdGirl = new MemeCard("ermahgherdGirl", 5);
const arthurFist = new MemeCard("arthurFist", 5);
const philosoraptor = new MemeCard("philosoraptor", 10);
const successKid = new MemeCard("successKid", 5);
const squintingFry = new MemeCard("squintingFry", 5);
const rollSafe = new MemeCard("rollSafe", 5);
const oneDoesNotSimply = new MemeCard("oneDoesNotSimply", 5);
const nyanCat = new MemeCard("nyanCat", 20);
const sarcasticWillyWonka = new MemeCard("sarcasticWillyWonka", 10);
const spongebobRainbow = new MemeCard("spongebobRainbow", 5);
const spongebobMocking = new MemeCard("spongebobMocking", 15);
const prettySquidward = new MemeCard("prettySquidward", 5);
const evilPatrick = new MemeCard("evilPatrick", -5);

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
  evilPatrick,
];

const randomNumber = Math.floor(Math.random() * deck.length);

const FullDeck = () => {
  test.lose50();

  return deck.map((card, index) => {
    return (
      <div key={index}>
        <div>Meme Name: {card.memeName}</div>
        <div>Points: {card.points}</div>
      </div>
    );
  });
};

export { FullDeck as default, deck, specialDeck };
