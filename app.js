//console.log("Hello JavaScript!");


let systemnumber=20;
function guess(){
    let userInputText=parseInt(document.getElementById("txtnum").value);

    document.getElementById("print").innerText=userInputText;
    if(userInputText<systemnumber){
        //console.log("Too Low!");
        let tl="Too Low!";
        document.getElementById("print4").innerText=tl;
    }else if(userInputText>systemnumber){
        //console.log("Too High!");
        let th="Too High!";
        document.getElementById("print4").innerText=th;
    }else{
        //console.log("Guessed right!");
        let tr="Your Number is correct!";
        document.getElementById("print4").innerText=tr;
    }
}

alert("Your Rounds are over!");