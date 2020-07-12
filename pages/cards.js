class MemeCard {
  constructor(memeName, points, image) {
    this.memeName = memeName;
    this.points = points;
    this.image = `/static/images/${image}`;
  }
}

const lose50 = new MemeCard("Lose 50%", 0, "memeface.png");
const doublePoints = new MemeCard("2X Followers", 0, "memeface.png");
const clearBoard = new MemeCard("DoomsDay", 0, "memeface.png");
const allDiscard = new MemeCard("All Discard", "memeface.png");
const opponentDiscard = new MemeCard("Opponent Discard", 0, "memeface.png");
const skipTurn = new MemeCard("Skip Opponent's Turn", 0, "memeface.png");

const specialDeck = [
  lose50,
  doublePoints,
  clearBoard,
  allDiscard,
  opponentDiscard,
  skipTurn,
];

const trollFace = new MemeCard("trollFace", 15, "trollface.png");
const badLuckBrian = new MemeCard("badLuckBrian", -5, "badluckbrian.jpg");
const overlyAttachedGirlfriend = new MemeCard(
  "overlyAttachedGirlfriend",
  5,
  "overlyattachedgirlfriend.jpg"
);
const scumBagSteve = new MemeCard("scumBagSteve", 5);
const michaelJacksonEatingPopcorn = new MemeCard(
  "michaelJacksonEatingPopcorn",
  10,
  "michaeljacksonpopcorn.jpg"
);
const grumpyCat = new MemeCard("grumpyCat", 15, "grumpycat.jpeg");
const ermahgherdGirl = new MemeCard("ermahgherdGirl", 15, "ermahgerd.jpg");
const arthurFist = new MemeCard("arthurFist", 15, "arthurfist.jpeg");
const philosoraptor = new MemeCard("philosoraptor", 10, "philosoraptor.jpg");
const successKid = new MemeCard("successKid", 15, "successkid.jpg");
const squintingFry = new MemeCard("squintingFry", 25, "squintingfry.png");
const rollSafe = new MemeCard("rollSafe", 25, "rollsafe.jpg");
const oneDoesNotSimply = new MemeCard(
  "oneDoesNotSimply",
  5,
  "onedoesnotsimply.jpg"
);
const nyanCat = new MemeCard("nyanCat", 20, "nyancat.jpg");
const sarcasticWillyWonka = new MemeCard(
  "sarcasticWillyWonka",
  10,
  "sarcasticwillywonka.jpeg"
);
const spongebobRainbow = new MemeCard(
  "spongebobRainbow",
  50,
  "rainbowspongebob.jpg"
);
const spongebobMocking = new MemeCard(
  "spongebobMocking",
  15,
  "spongebobmocking.jpg"
);
const prettySquidward = new MemeCard(
  "prettySquidward",
  50,
  "prettysquidward.jpg"
);
const evilPatrick = new MemeCard("evilPatrick", -5, "evilpatrick.png");

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
