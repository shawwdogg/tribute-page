import logo from "./logo.svg";
import "./App.css";
import statue from "./images/sculpture.jpg";
function App() {
  return (
    <div className="main">
      <h1 id="title">Dallas Cowboys</h1>
      <div id="img-div">
        <img src={statue} />
        <p id="img-caption">Dallas Cowboys Head Coach</p>
      </div>
      <div id="tribute-info">
        <p>
          The Dallas Cowboys are a professional American football team based in
          the Dallas–Fort Worth metroplex. The Cowboys compete in the National
          Football League (NFL) as a member club of the league's National
          Football Conference (NFC) East division. The team is headquartered in
          Frisco, Texas, and has been playing its home games at AT&T Stadium in
          Arlington, Texas, since its opening in 2009. The stadium took its
          current name prior to the 2013 season.[5] In January 2020 it was
          announced that Mike McCarthy had been hired as head coach of the
          Cowboys.[6] He is the ninth in the team’s history.[7] McCarthy follows
          Jason Garrett, who coached the team from 2010–2019.[7]
        </p>
        <p>
          The Cowboys joined the NFL as an expansion team in 1960.[8] The team's
          national following might best be represented by its NFL record of
          consecutive sell-outs. The Cowboys' streak of 190 consecutive sold-out
          regular and post-season games (home and away) began in 2002.[9] The
          franchise has made it to the Super Bowl eight times, tied with the
          Pittsburgh Steelers and the Denver Broncos for second most Super Bowl
          appearances in history, behind only the New England Patriots' record
          eleven Super Bowl appearances. This has also corresponded to eight NFC
          championships, most in the NFC. The Cowboys have won five of those
          Super Bowl appearances, tying them with their NFC rivals, the San
          Francisco 49ers; both are third to Pittsburgh's and New England's
          record six Super Bowl championships. The Cowboys are the only NFL team
          to record 20 straight winning seasons (1966–85), in which they missed
          the playoffs only twice (1974 and 1984)
        </p>
        <a href="https://en.wikipedia.org/wiki/Dallas_Cowboys">"Read More"</a>
      </div>
    </div>
  );
}
export default App;
