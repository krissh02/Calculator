let inp = document.querySelector("#input");
let btn = document.querySelectorAll("button");
let calc = document.querySelector(".calculator");
let operator = document.querySelectorAll(".op");
// console.log(operator);

let string = "";
let arr = Array.from(btn);
// console.log(arr);

arr.forEach((button) =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            if(string.charAt(string.length-1) == "%" || string.charAt(string.length-1) == "/" || string.charAt(string.length-1) == "*" || string.charAt(string.length-1) == "+" || string.charAt(string.length-1) == "-" ){
                alert("Invalid number");
            }
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
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})
