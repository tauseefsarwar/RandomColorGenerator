let btn = document.querySelector('button');
let div = document.querySelector('.colorDiv');
let h3 = document.querySelector('h3');


btn.addEventListener('click', ()=>{
    let red = getColors();
    let green = getColors();
    let blue = getColors();
    h3.innerText = `rgb(${red},${green},${blue})`;
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
})

function getColors(){
    let color = Math.floor(Math.random()*255);
    return color;
}