function component () {
  var element = document.createElement('div');
  element.innerHTML = 'Hello okidevnet!';
  return element;
}

document.body.appendChild(component());
