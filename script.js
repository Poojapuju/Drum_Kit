var  numberofButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberofButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}
document.addEventListener('keydown' , function(event){
    makeSound(event.key);
});

function makeSound(key) {
    switch(key){
        case "W":
            var tom1 = new Audio('music/tom-1.mp3');
            tom1.play();
            break;

        case "A":
            var tom2 = new Audio('music/tom-2.mp3');
            tom2.play();
            break;
        
        case "S":
            var tom3 = new Audio('music/tom-3.mp3');
            tom3.play();
            break;

         case "D":
            var tom4 = new Audio('music/tom-4.mp3');
            tom4.play();
            break;
    
        case "J":
            var crash = new Audio('music/crash.mp3');
            crash.play();
            break;
            
        case "K":
            var snare = new Audio('music/snare.mp3');
            snare.play();
            break;
        
        case "L":
            var kick = new Audio('music/kick.mp3');
            kick.play();
            break;       
    }
}

