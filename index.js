
let buttons = document.getElementsByClassName("btn");


function doSomething() {
    let t = this.getAttribute("data_value");
    let display = document.getElementById("display");
    if(display.innerText === "Too Large Please press AC"){
        display.innerText = "";
    }
    if (t === "=") {
        try {
            if(display.innerText.length>30) throw "Too Large Please press AC"
            eval(display.innerText);    
        } catch (err) {
            display.innerText= "invalid Expression";
        }
        display.innerText = eval(display.innerText);
        
    }
    else if(t === "AC"){
        display.innerText = "";
    }
    else if(t == "C"){
        display.innerText=display.innerText.substr(0,display.innerText.length-1);
    }
    else {
        let success = "false";
        try {
            if(display.innerText.length>100) throw "Too Large Please press AC";
            success = "true";
        }
        catch(err){
            display.innerText = err
        }   
        if(success === "true")
        {
            display.innerText += t;
        }
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", doSomething);
}



