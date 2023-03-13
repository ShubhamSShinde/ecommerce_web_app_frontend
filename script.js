// Script for navigation bar
const bar= document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const logo = document.getElementById('savi')

// logo.addEventListener("mouseover",(img)=>{
//     img.src ='savi.png'
// })



if(bar){
    bar.addEventListener("click",() =>{
        nav.classList.add("active1")
    })
}
if(close){
    close.addEventListener("click",() =>{
        nav.classList.remove("active1")
    })
}

// sproduct
var MainImg = document.getElementById('MainImg');
var SmallImg = document.getElementsByClassName('small-img');

SmallImg[0].onclick = ()=>{
    MainImg.src =SmallImg[0].src
}
SmallImg[1].onclick = function(){
    MainImg.src =SmallImg[1].src
}
SmallImg[2].onclick = ()=>{
    MainImg.src =SmallImg[2].src
}
SmallImg[3].onclick = ()=>{
    MainImg.src =SmallImg[3].src
}


// payment



