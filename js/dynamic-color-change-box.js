

const colorBox = document.getElementById('color-box');
const colorList = document.getElementById('color-list');

const colors = ['green','red', 'yellow', 'black'];


colors.forEach(color =>{
    const colorItem = document.createElement('div');
    colorItem.classList.add('color-item');
    colorItem.style.backgroundColor = color;

    colorItem.addEventListener('click', ()=>{
       colorBox.style.backgroundColor = color; 
    })
    colorList.appendChild(colorItem);

})