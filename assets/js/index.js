import Header from "./header.js";
import Footer from "./footer.js";
import TopHeader from "./topHeader.js";

function init() {
  const body = document.body || document.querySelector('body');
  const topHeader = TopHeader();
  const header = Header();
  const footer = Footer();

  body.insertAdjacentElement('afterbegin', header);
  body.insertAdjacentElement('afterbegin', topHeader);
  body.insertAdjacentElement('beforeend', footer);
}

document.addEventListener('DOMContentLoaded', init);