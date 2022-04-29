
/*
função de selecionar o botão de curti do instagram
*/
function clickButtonAll() {
  let object = document.querySelectorAll('.fr66n > .wpO6b  > .QBdPU.rrUvL')
  for (const iterator of object) {
    iterator.click() // 
  }
}
// função de rolar a tela
function rolarTela() {
  let rolar = document.querySelectorAll('.fr66n > .wpO6b')
  for (const iterator of rolar) {
    iterator.scrollIntoView()
  }
}

const tempo = setInterval(() => {
  clickButtonAll()
  rolarTela()
}, 5000)

tempo

clearInterval(tempo)