import React, { Component } from "react";
import shuffle from "lodash.shuffle";

import "./App.css";

import Card from "./Card";
import GuessCount from "./GuessCount";
import HallOfFame, { FAKE_HOF } from "./HallOfFame";

const VIUAL_PAUSE_MSEC = 750;
const SIDE = 6;

const SYMBOLS = [ "😁","😂","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😚","😐","😶","😏","😣","😥","😪","😫","😌","😜","😝","😒","😓","😔","😲","😖","😞","😤","😢","😭","😨","😩","😰","😱","😳","😵","😡","😠","😷","😇","😈","👿","👹","👺","💀","👻","👽","👾","💩","😺","😸","😹","😻","😼","😽","🙀","😿","😾","🙈","🙉","🙊","👶","👦","👧","👨","👩","👴","👵","👮","💂","👷","👸","👳","👲","👱","👰","👼","🎅","🙍","🙎","🙅","🙆","💁","🙋","🙇","💆","💇","🚶 ","🏃","💃","👯","🛀","👤","👥","🏇","🏂","🏄","🚣","🏊","🚴","🚵","👫","👬","👭","💏","💑","👪","💪","👈","👉","👆","👇","✋","👌","👍","👎","✊","👊","👋","👏","👐","🙌","🙏","💅","👂","👃","👣","👀","👅","👄","💋","💘","💓","💔","💕","💖","💗","💙","💚","💛","💜","💝","💞","💟","💌","💤","💢","💣","💥","💦","💨","💫","💬","💭","👓","👔","👕","👖","👗","👘","👙","👚","👛","👜","👝","🎒","👞","👟","👠","👡","👢","👑","👒","🎩","🎓","💄","💍","💎","🐵","🐒","🐶","🐕","🐩","🐺","🐱","🐈","🐯","🐅","🐆","🐴","🐎","🐮","🐂","🐃","🐄","🐷","🐖","🐗","🐽","🐏","🐑","🐐","🐪","🐫","🐘","🐭","🐁","🐀","🐹","🐰","🐇","🐻","🐨","🐼","🐾","🐔","🐓","🐣","🐤","🐥","🐦","🐧","🐸","🐊","🐢","🐍","🐲","🐉","🐳","🐋","🐬","🐟","🐠","🐡","🐙","🐚","🐌","🐛","🐜","🐝","🐞","💐","🌸","💮","🌹","🌺","🌻","🌼","🌷","🌱","🌲","🌳","🌴","🌵","🌾","🌿","🍀","🍁","🍂","🍃","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🍅","🍆","🌽","🍄","🌰","🍞","🍖","🍗","🍔","🍟","🍕","🍳","🍲","🍱","🍘","🍙","🍚","🍛","🍜","🍝","🍠","🍢","🍣","🍤","🍥","🍡","🍦","🍧","🍨","🍩","🍪","🎂","🍰","🍫","🍬","🍭","🍮","🍯","🍼","🍵","🍶","🍷","🍸","🍹","🍺","🍻","🍴","🔪","🌍","🌎","🌏","🌐","🗾","🌋","🗻","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏨","🏩","🏪","🏫","🏬","🏭","🏯","🏰","💒","🗼","🗽","🌁","🌃","🌄","🌅","🌆","🌇","🌉","🌌","🎠","🎡","🎢","💈 ","🎪","🚂","🚃","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚝","🚞","🚋","🚌","🚍","🚎","🚐","🚑","🚒","🚓","🚔","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🚲","🚏","🚨","🚥","🚦 ","🚧","🚤","🚢","💺","🚁","🚟","🚠","🚡","🚀","⏳","⏰","⏱","⏲","🕛","🕧","🕐","🕜","🕑","🕝","🕒","🕞","🕓","🕟","🕔","🕠","🕕","🕡","🕖","🕢","🕗","🕣","🕘","🕤","🕙","🕥","🕚","🕦","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌙","🌚","🌛","🌜","🌝","🌞","🌟","🌠","🌀","🌈","🌂","🔥","💧","🌊","🎃","🎄","🎆","🎇","✨","🎈","🎉","🎊","🎋","🎍","🎎","🎏","🎐","🎑","🎀","🎁","🎫","🏆","🏀","🏈","🏉","🎾","🎳","🎣","🎽","🎿","🎯","🎱","🔮","🎮","🎰","🎲","🃏","🎴","🎭","🎨","🔇","🔈 ","🔉","🔊","📢","📣","📯","🔔","🔕","🎼","🎵","🎶","🎤","🎧","📻","🎷","🎸","🎹","🎺","🎻","📱","📲","📞","📟","📠","🔋","🔌","💻","💽","💾","💿","📀","🎥","🎬","📺","📷","📹","📼","🔍","🔎","💡","🔦","🏮","📔","📕","📖","📗","📘","📙","📚","📓","📒","📃","📜","📄","📰","📑","🔖","💰","💴","💵","💶","💷","💸","💳","💹","💱","💲","📧","📨","📩","📤","📥","📦","📫","📪","📬","📭","📮","📝","💼","📁","📂","📅","📆","📇","📈","📉","📊","📋","📌","📍","📎","📏","📐","🔒","🔓","🔏","🔐","🔑","🔨","🔫","🔧","🔩","🔗","🔬","🔭","📡","💉","💊","🚪 ","🚽","🚿","🛁","🚬","🗿","🏧","🚮","🚰","🚹","🚺","🚻","🚼","🚾","🛂","🛃","🛄","🛅","🚸","🚫","🚳","🚭","🚯","🚱","🚷","📵","🔞","🔃","🔄","🔙","🔚","🔛","🔜","🔝","🔯","⛎","🔀","🔁","🔂","⏩","⏭","⏯","⏪","⏮","🔼","⏫","🔽","⏬","🎦","🔅","🔆","📶","📳","📴","🔱","📛","🔰","✅","❌","❎","➕","➖","➗","➰","➿","❓","❔","❕","🔟","💯","🔠","🔡","🔢","🔣","🔤","🅰","🆎","🅱","🆑","🆒","🆓","🆔","🆕","🆖","🅾","🆗","🆘","🆙","🆚","🈁","🈂","🈷","🈶","🉐","🈹","🈲","🉑","🈸","🈴","🈳","🈺","🈵","🔶","🔷","🔸","🔹","🔺","🔻","💠","🔘","🔲","🔳","🔴","🔵","🏁","🚩","🎌"];
// const SYMBOLS = "😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿";

class App extends Component {
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: []
  };

  newGame = ()=> {    
    this.setState({  cards: this.generateCards(),
      currentPair: [],
      guesses: 0,
      matchedCardIndices: [] });
  }

  generateCards() {
    const result = [];
    const size = SIDE * SIDE;

    var randomIndices = [];
    var symbols18 = "";

    var searchSymbol = true;
    while (searchSymbol) {
      var random = Math.floor(Math.random() * Math.floor(717));
      if (!randomIndices.includes(random)) {
        randomIndices.push(random);
        symbols18 = symbols18.concat(SYMBOLS[random]);
        // console.log(random, ' = ', SYMBOLS[random],'/' ,SYMBOLS.length);
      }

      if (symbols18.length >= 36) {
        searchSymbol = false;
      }
    }

    // const candidates = shuffle(SYMBOLS);
    const candidates = shuffle(symbols18);
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card);
    }
    return shuffle(result);
  }

  handleCardClick = index => {
    const { currentPair } = this.state;

    if (currentPair.length === 2) {
      return;
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] });
      return;
    }

    this.handleNewPairClosedBy(index);
  };

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state;
    const indexMatched = matchedCardIndices.includes(index);

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? "visible" : "hidden";
    }

    if (currentPair.includes(index)) {
      return indexMatched ? "justMatched" : "justMismatched";
    }

    return indexMatched ? "visible" : "hidden";
  }

  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state;

    const newPair = [currentPair[0], index];
    const newGuesses = guesses + 1;
    const matched = cards[newPair[0]] === cards[newPair[1]];

    this.setState({ currentPair: newPair, guesses: newGuesses });
    if (matched) {
      this.setState({
        matchedCardIndices: [...matchedCardIndices, ...newPair]
      });
    }
    setTimeout(() => this.setState({ currentPair: [] }), VIUAL_PAUSE_MSEC);
  }

  render() {
    const { cards, guesses, matchedCardIndices } = this.state;
    const won = matchedCardIndices.length === cards.length;
    return (
        <div className="memory">
          <h1>Memory Game</h1>
          <GuessCount guesses={guesses} />
          {cards.map((card, index) => (
            <Card
              card={card}
              key={index}
              index={index}
              feedback={this.getFeedbackForCard(index)}
              onClick={this.handleCardClick}
            />
          ))}
          
          {won && <HallOfFame entries={FAKE_HOF} />}
          {won && <button onClick={this.newGame}>New game</button>}
        </div>
    );
  }
}

export default App;
