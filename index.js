var noOfDrums = document.querySelectorAll(".drum").length;


//Detecting button press
for(var i=0;i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var buttonInner = this.innerHTML;
        buttonAnimation(buttonInner);
        makeSound(buttonInner);
        
    });
}


// Detecting keyboard press
document.addEventListener("keydown",function(e) {
    console.log(e);
    buttonAnimation(e.key);
    makeSound(e.key);
})


function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },200);

}
