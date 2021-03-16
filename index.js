let main = document.querySelector('main#main')
main.remove()

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "Alex is the champion"
