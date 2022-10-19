const switchThemeButton = document.querySelector('#darkmode-toggle')

switchThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  switchTitle()
});

function switchTitle() {
  var verificaElement = document.querySelector('.title')
  if(verificaElement.classList.contains("white")) {
    verificaElement.classList.remove('white')
  } else {
  var element = document.querySelector('.title')
  element.classList.add("white")
  }
}