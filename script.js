const display =document.querySelector("input");

function AddToInput(input){
    display.value+=input;
}

function ClearMe(){
    display.value = "";
}
function BackSpace(){
    display.value =display.value.slice(0,-1);
}

function Calculate(){
    try {
        display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
}


