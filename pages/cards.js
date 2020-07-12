class MemeCard {
  constructor(memeName, points) {
    this.memeName = memeName;
    this.points = points;
  }
}

const lose500 = new MemeCard("Lose 500%", 0);
const doublePoints = new MemeCard("2X Followers", 0);
const clearBoard = new MemeCard("DoomsDay", 0);
const allDiscard = new MemeCard("All Discard");
const opponentDiscard = new MemeCard("Opponent Discard", 0);
const skipTurn = new MemeCard("Skip Opponent's Turn", 0);

const specialDeck = [
  lose500,
  doublePoints,
  clearBoard,
  allDiscard,
  opponentDiscard,
  skipTurn,
];

const trollFace = new MemeCard("trollFace", 50);
const badLuckBrian = new MemeCard("badLuckBrian", -50);
const overlyAttachedGirlfriend = new MemeCard("overlyAttachedGirlfriend", 50);
const scumBagSteve = new MemeCard("scumBagSteve", 50);
const michaelJacksonEatingPopcorn = new MemeCard(
  "michaelJacksonEatingPopcorn",
  10
);
const grumpyCat = new MemeCard("grumpyCat", 50);
const ermahgherdGirl = new MemeCard("ermahgherdGirl", 50);
const arthurFist = new MemeCard("arthurFist", 50);
const philosoraptor = new MemeCard("philosoraptor", 10);
const successKid = new MemeCard("successKid", 50);
const squintingFry = new MemeCard("squintingFry", 50);
const rollSafe = new MemeCard("rollSafe", 50);
const oneDoesNotSimply = new MemeCard("oneDoesNotSimply", 50);
const nyanCat = new MemeCard("nyanCat", 20);
const sarcasticWillyWonka = new MemeCard("sarcasticWillyWonka", 10);
const spongebobRainbow = new MemeCard("spongebobRainbow", 50);
const spongebobMocking = new MemeCard("spongebobMocking", 150);
const prettySquidward = new MemeCard("prettySquidward", 50);
const evilPatrick = new MemeCard("evilPatrick", -50);

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
  test.lose500();

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
