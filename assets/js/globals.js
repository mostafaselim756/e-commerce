Object.prototype.appendChildren = function (...children) {
  children.map(child => this.appendChild(child));

  return this;
}

function createElement(tag = 'div', attrs = {}, content) {
  const element = document.createElement(tag);

  Object.entries(attrs).map(([name, value]) => {
    element.setAttribute(name, value);
  });

  return element;
}