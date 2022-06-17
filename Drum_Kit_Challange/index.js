for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var btn_html = this.innerHTML;
        keyboard_sound(btn_html);
        animate_btn(btn_html);
    });
}

document.addEventListener("keypress", function(e) {
    keyboard_sound(e.key)
    animate_btn(e.key)
})

function keyboard_sound(key) {
    switch (key) {
        case "w":   
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play();
        break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play();
        break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play();
        break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play();
        break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3')
            audio.play();
        break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3')
            audio.play();
        break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play();
        break;
        default: console.log(btn_html)
    }
}


function animate_btn(key) {
    var Button = document.querySelector("." + key);
    Button.classList.add("pressed")
    setTimeout(function() {
        Button.classList.remove("pressed")
    },200)
    
}
    