


let hamberger = document.getElementById("hambergur")
let hamicon = document.getElementById("ham_icon")
let hamclose= document.getElementById("close_ham")


  
function open_ham(){
   hambergur.style.visibility="visible"
}
function close_ham(){
   hambergur.style.visibility="hidden"
}



let openform=document.getElementById("open_form")
let closeform=document.getElementById("close_form")
let form=document.getElementById("form")

openform.addEventListener("click", function(){
    form.style.visibility="visible"
    form.style.transform="scale(1)"
})

closeform.addEventListener("click", function(){
    form.style.visibility="hidden"
})

let info=document.getElementById("info")
let closeinfo=document.getElementById("close_info")

function viwe(){
    info.style.visibility="visible"
    info.style.transform="scale(1)"
}
closeinfo.addEventListener("click", function(){
    info.style.visibility="hidden"
})








