import React from "react";
import './Navbar.css'

const Navbar = props => (
  <nav>
    <div class="nav-wrapper deep-purple darken-2">
      <a href="#!" class="brand-logo">Marvel Clicky Game</a>
        {/* <i class="material-icons gameStatus">Status:</i> */}
      <ul class="right">

        <li><i class="material-icons statusMessage"> {props.statusMessage} </i></li>
        <li><i class="material-icons Scoress">Score: {props.score} |</i></li>
        <li><i class="material-icons Scoress topScoress">Top Score: {props.topScore}</i></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;