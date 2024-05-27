let li =document.querySelectorAll("li")


li.forEach((val,index)=>{
   li[index].addEventListener("click",(e)=>{
console.log(e.target.className)
if(e.target.className==="london"){
    console.log("London")
}

})

})















