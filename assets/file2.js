function angularFood(){

let decreaseButton=document.querySelector(".btn-quantity-one")
let increaseButton=document.querySelector(".btn-quantity-tow")
let Numper=document.querySelector(".label")
let stopNumper=document.querySelector(".stop-numper")
// let spanNumper=document.querySelector(".span-numper")

// let numper=Number(spanNumper)   
stopNumper.classList.add("stop-numper-js")
decreaseButton.onclick=function(){
Numper.textContent--
if(Numper.textContent==1){stopNumper.classList.add("stop-numper-js")}
// numper.textContent=numper.textContent-=7
}


increaseButton.onclick=function(){
Numper.textContent++
stopNumper.classList.remove("stop-numper-js")
// numper.textContent=numper.textContent+=7
// console.log(numper)
}



console.log("x")



}