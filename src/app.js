/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let text = "";
  for (let a in adj) {
    for (let p in pronoun) {
      for (let n in noun) {
        document.getElementById("domain").innerHTML +=
          pronoun[p] + adj[a] + noun[n] + ".com" + "<br>";
      }
    }
  }
};
