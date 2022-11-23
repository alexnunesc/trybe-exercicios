import { nanoid } from "nanoid";
import "./style.css";
import copy from "clipboard-copy";
//console.log('Hello World');

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => displayPasswordEl.innerHTML = nanoid());

displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerText)
});