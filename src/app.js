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
  let domain = ".com";
  for (let adjetivo of adj) {
    for (let pronombre of pronoun) {
      for (let sustantivo of noun) {
        document.getElementById("domain").innerHTML +=
          pronombre + adjetivo + sustantivo + domain + "<br>";
      }
    }
  }
};
