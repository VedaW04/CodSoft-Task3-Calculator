let string = "";
let box = document.querySelectorAll(".button");

Array.from(box).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "AC"){
            string="";
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "DEL"){
            string = string.toString().slice(0, -1);
            document.querySelector("input").value = string;
        }else{
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
    
});
