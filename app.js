let Switch = document.getElementById("switch");

Switch.addEventListener("click",()=>{
    if(Switch.checked === true){
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white"
    }
})