function angularJs(){
let sound=document.querySelector('.audio')
// window.onload=function(){
// sound.play()

// }
document.addEventListener("click",function(e){
sound.play()
},{ once: true })

// function internet(){
// setInterval(()=>{
// if(!navigator.onLine)
// {
// document.querySelector("#interOne").style.display="none"
// document.querySelector("#interTow").style.display="block"
// document.querySelector(".box-conection").classList.add("ActiveInternet")
// document.querySelector(".icon-conection").classList.remove("ActiveIconInernet")

// }
// else{

// document.querySelector("#interOne").style.display="block"
// document.querySelector("#interTow").style.display="none"
// document.querySelector(".box-conection").classList.add("ActiveInternet")
// document.querySelector(".icon-conection").classList.add("ActiveIconInernet")
// setTimeout(()=>{document.querySelector(".box-conection").classList.remove("ActiveInternet")
// },3000)

// }
// },1000)
// }

// internet()

}