var display = document.querySelector("#screenDisp");
var keys = document.getElementsByClassName("key");
var equalButton = document.getElementById("equalKey");
var reset = document.getElementById("reset");
var numString = "";
var answer;

for (var i = 0; i<keys.length;i++){
    keys[i].addEventListener("click", function(){
        numString += this.textContent;
        display.textContent = numString;
    });
}

equalButton.addEventListener("click", function(){
    // try {
        answer = eval(numString);
        
        // if ((numString.split(".").length > 1) && (numString.split(".")[1].length > 5)){
        //     console.log("hi");
        //     answer = answer.toFixed(5);
        // }

        numString = answer.toString();
        display.textContent = answer;
    // } catch (err){
    //     screen.textContent = "ERROR"
    // }
});


reset.addEventListener("click", function(){
    numString="";
    display.textContent = "0";
})


