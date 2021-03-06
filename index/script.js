const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

//No video drag and drop raiz com api, no minuto 27:51 tem uma explicaçao sobre função anonima
//minuto 30:44 tem outra dica sobre reduzir funções e log
cards.forEach(card =>  {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    //console.log('> CARD: Start dragging')
    dropzone.forEach( dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging')
}

function drag() { 
    //console.log('> CARD: Is dragging')

}

function dragend() {
    //console.log('> CARD: Stop drag!')
    dropzone.forEach( dropzone => dropzone.classList.remove('highlight'))
    
    this.classList.remove('is-dragging')
}


//Local onde vou soltar os cartôes

dropzone.forEach(dropzone =>  {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    //console.log('>Dropzone: Enter in zone')
}

function dragover() { 
    //console.log('>Dropzone: In the zone')
    this.classList.add('over')
    //Get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragleave() {
    //console.log('>Dropzone: Leave')
    this.classList.remove('over')
}

function drop() {
    //console.log('>Dropzone: dropped')
}