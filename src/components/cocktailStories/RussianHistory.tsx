import "./RussianHistory.css";

function RussianHistory() {
  const white = require("../../images/White Russian.png");
  const black = require("../../images/Black Russian.png");
  return (
    <div className={"historyHolder"}>
      <div className={"drinkInfo russian"}>
        <div className={"historyImage"}>
          <img src={white} alt="" />
        </div>

        <div className={"russianText"}>
          <div className={"russianTitle"}>
            <h1>Black & White Russian</h1>
          </div>
          <div className={"russianStory"}>
            <p>
              The White Russian and The Black Russian was conceived in 1949 when
              Gustave Tops, a Belgian barman, decided to creat a drink in honor
              of Perle Mesta, then U.S. ambassador to Luxembourg at the Hotel
              Metropole in Brussels. It comes to quite a shock that it actually
              wasn't made in Russia, but the name is based on the main
              ingredient Vodka. Over the next decades the White Russian spread
              throughout the western hemisphere, and finally appeared in
              Californian puplications with the official recipe. Despite its
              somewhat popularity, it wasn't highly regarded like other famous
              cocktails. This all changed in 1998 when the classic film "The Big
              Lebowski" was realed and the cocktail finally reached
              superstardom. In fact, before the movie it's popularity was on a
              decline. So the White and Black Russian has The Dude to thank.
              Today we even have variations and just to name a few like the
              White Canadian, which is made with goat's milk instead of cream,
              the White Mexican, which uses horchata instead and the White
              Cuban, which uses rum instead of Vodka.
            </p>
          </div>
        </div>
        <div className={"historyImage"}>
          <img src={black} alt="" />
        </div>
      </div>
      <div className={"drinkInfoMobile"}>
        <div className={"mobileHistoryHeader"}>
          <div className={"mobileHistoryImage"}>
            <img src={white} alt="" />
          </div>
          <div className={"russianMobileTitle"}>
            <h1>Black & White Russian</h1>
          </div>
          <div className={"mobileHistoryImage"}>
            <img src={black} alt="" />
          </div>
        </div>
        <div className={'mobileHistoryText'}>
            <p> The White Russian and The Black Russian was conceived in 1949 when
              Gustave Tops, a Belgian barman, decided to creat a drink in honor
              of Perle Mesta, then U.S. ambassador to Luxembourg at the Hotel
              Metropole in Brussels. It comes to quite a shock that it actually
              wasn't made in Russia, but the name is based on the main
              ingredient Vodka. Over the next decades the White Russian spread
              throughout the western hemisphere, and finally appeared in
              Californian puplications with the official recipe. Despite its
              somewhat popularity, it wasn't highly regarded like other famous
              cocktails. This all changed in 1998 when the classic film "The Big
              Lebowski" was realed and the cocktail finally reached
              superstardom. In fact, before the movie it's popularity was on a
              decline. So the White and Black Russian has The Dude to thank.
              Today we even have variations and just to name a few like the
              White Canadian, which is made with goat's milk instead of cream,
              the White Mexican, which uses horchata instead and the White
              Cuban, which uses rum instead of Vodka.</p>
        </div>
      </div>
    </div>
  );
}

export default RussianHistory;
