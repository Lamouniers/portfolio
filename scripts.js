
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer') //se o elemento estiver na tela ele adiciona a classe aparecer
        }else{
            entrada.target.classList.remove('aparecer')
        }
    })
})

//pega todas as classes esconder e guarda na variavel que criei
const elementos = document.querySelectorAll('.esconder')
//pega elemento por elemento e oberserva
elementos.forEach( (Element) => observador.observe(Element) )