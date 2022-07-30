// make an object that 3 images
// when we click the arrow keys we go back or forward a object key

let picArr = ['OiP.jpg', 'micro.jpg', 'surface.jpg', 'windows.jpg', 'xbox.jpg']
let order = 0;
document.querySelector('.next').addEventListener('click', function(){
    if(order < 4){
    order += 1;
    console.log(order)
    document.querySelector('.big').src = picArr[order];
    }
})
document.querySelector('.prev').addEventListener('click', function(){
    if(order > 0){
    order -= 1;
    console.log(order)
    document.querySelector('.big').src = picArr[order];
    }
})