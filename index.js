

var a = document.querySelectorAll(".drum");

// detecting mouse 
for (let i=0; i<a.length; i++){
    a[i].addEventListener("click",
    function (){
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// detecting keypresses
document.addEventListener('keypress',function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(keypressed){
    switch(keypressed){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-6.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-7.mp3');
            audio.play();
            break;
    }
}

// we can also use loops as our audios were numbered in increasing order but to use the concept of the switch case we are using this approach
// var audio = new Audio('sounds/tom-'+[i]+'.mp3');
// audio.play();

// function buttonAnimation(currentkey){

//     var activeButton= document.querySelector("."+currentkey)
//     activeButton.classList.add("pressed");
//     setTimeout(function(){
//         button.classList.remove(".pressed");
//     },1000);

// }
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
   
    setTimeout(function () {
      activeButton.classList.remove("pressed")
    }, 100);
  }