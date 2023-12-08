let inp = document.querySelector("#input");
let btn = document.querySelectorAll("button");
let calc = document.querySelector(".calculator");
// let flag = true;
let string = "";
let arr = Array.from(btn);
arr.forEach((button) =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        // else if(e.target.innerHTML == "ON"){
        //     if(flag){
        //         calc.style.background = "white";
        //         flag = false;
        //     }
        //     else{
        //         calc.style.background = "transparent";
        //         flag = true;
        //     }
        // }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})
