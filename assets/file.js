function angular(){

let haederMenue=document.querySelectorAll(".box-header-menue")
let boxMenue=document.querySelector(".fa-myBox-menue")
let windowScroll=window.scrollY
let offserBoxMenue=boxMenue.offsetTop

haederMenue.forEach((e)=>{
e.onclick=function(){
window.scrollTo(0,100)
}  
})


console.log("x")









}