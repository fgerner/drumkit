// Button clicked
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);

    });

    //Key pressed
    document.addEventListener('keydown', function (event) {
        makeSound(event.key);
    });

    // make sound
    function makeSound(key) {
        switch (key) {
            case 'w':
                audio = new Audio('sounds/tom-1.mp3');
                break
            case 'a':
                audio = new Audio('sounds/tom-2.mp3');
                break
            case 's':
                audio = new Audio('sounds/tom-3.mp3');
                break
            case 'd':
                audio = new Audio('sounds/tom-4.mp3');
                break
            case 'j':
                audio = new Audio('sounds/snare.mp3');
                break
            case 'k':
                audio = new Audio('sounds/crash.mp3');
                break
            default:
                audio = new Audio('sounds/kick-bass.mp3');
                break
        }
        audio.play();


    }
}