let app = {
  colors: [
    'lightsteelblue',
    'palegreen',
    'crimson'
  ],

  contentArea: document.querySelector('.content'),

  init: function() {
    console.log(app.contentArea);
    for (index in app.colors) {
      app.generateColorBox(app.colors[index]);
    }
    app.addEventListeners();
    let submit = document.querySelector('form#form');
    submit.addEventListener('submit', app.handleSubmit);

  },



  handleClick : function (event) {
    let body = document.querySelector('body');
    let target = event.target;
    body.style.background = target.textContent;
  
  },

  addEventListeners : function () {
    let click = document.querySelectorAll('div.bg-color-selector');
    for(let i = 0; i < click.length; i++) {
      click[i].addEventListener('click', app.handleClick);
      //console.log('click', click[i]);
    }
  },

  handleSubmit : function (e) {
    e.preventDefault();
    let inputValue = document.querySelector('#text-color').value.trim().toLowerCase();
    let box = app.generateColorBox(inputValue);
    app.addEventListeners();
    box.click();
    //console.log(inputValue);
  },

  generateColorBox: function(color) {
    let colorBox = document.createElement('div');
    colorBox.className = 'bg-color-selector';
    colorBox.style.background = color;
    colorBox.innerText = color;
    app.contentArea.appendChild(colorBox);
    return colorBox;
  },

  }




document.addEventListener('DOMContentLoaded', app.init);