


// const paintRed = function (){
//     const brushButton = document.querySelector('.current-brush')
//     brushButton.classList.add('color-1')
// }
// const paintBlue = function (){
//     brushButton.classList.add('color-2')
// }
// const paintYellow = function (){
//     brushButton.classList.add('color-3')
// }
// const paintGreen = function (){
//     brushButton.classList.add('color-4')
// }
// const paintWhite = function (){
//     brushButton.classList.add('color-5')
// }
// const div = document.querySelector('div')
const paletteColor = document.querySelectorAll('.palette-color')

const pickColor = function(location){
    return location.classList[1]
}


const replaceColorOfBrush = function(clicked){
    const brushButton = document.querySelector('.current-brush')
    const brushColor = brushButton.classList[1]
    brushButton.classList.replace(brushColor,pickColor(clicked.target))
}
for(const color of paletteColor){
color.addEventListener('click',replaceColorOfBrush)}

const square = document.querySelectorAll('.square')

const replaceColorOfSquare = function(clicked){
    const brushButton = document.querySelector('.current-brush')
    const click = clicked.target
    click.classList.replace(pickColor(click),pickColor(brushButton))
}

for(const box of square){
box.addEventListener('ondrag',replaceColorOfSquare)}

const whole = document.querySelector('.canvas')

whole.addEventListener('click',replaceColorOfSquare)

const clear = function(){
    for(const box of square){
        box.classList.replace(pickColor(box),'color-5')
    }
    
}
const clearButton = document.querySelector('#submit')

clearButton.addEventListener('click',clear)

const blackOut = function(){
    for(const box of square){
        box.classList.replace(pickColor(box),'color-6')
    }
}
const  blackOutButton = document.querySelector('#submit2')
blackOutButton.addEventListener('click',blackOut)

const change = function(){
    for (const pale of paletteColor){
        if(pickColor(pale).length>8){
            pale.classList.replace(
                pickColor(pale),pickColor(pale).slice(0,7)
            )
        }else
        pale.classList.replace(pickColor(pale),pickColor(pale)+1)
    } 
}

const  changeButton = document.querySelector('#submit3')
changeButton.addEventListener('click',change)


function count(){
    let result = 0
for (const box of square){
    if(pickColor(box) === 'color-1' ||pickColor(box) === 'color-2'||pickColor(box) === 'color-3'||pickColor(box) === 'color-4'){
        result++
    }
    if(result === 100){
        window.alert("Really?! Got A.C.D. problem?");
    }
}
}
whole.addEventListener('click',count)

const funColor = function(){
    const brushButton = document.querySelector('.current-brush')
    for(const box of square){
        box.classList.replace(pickColor(box),pickColor(brushButton))
    }
}
const  fullColorButton = document.querySelector('#submit4')
fullColorButton.addEventListener('click',funColor)
