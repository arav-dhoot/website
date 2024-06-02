const dynamicText = document.querySelector('.jobs');
const helloText = document.querySelector('.hello');

const phrases = [
    'an inventor \uD83D\uDEE0',
    'a coder \uD83D\uDCBB',
    'a freshman @ Columbia 🦁',
    'a coffee lover \u2615',
    'an occasional procrastinator \uD83E\uDEE0',
    'a computer science enthusiast 👨‍💻',
    'an aviation geek ✈️',
];

const hellos = [
    'Hi!',
    '你好!',
    'नमस्ते!',
    'Hola!',
    'Bonjour!',
    'مرحبا!',
    'হ্যালো!',
    'Здравствуйте!',
    'Olá!',
    'سلام!'        
];

let pIndex = 0;
let hIndex = 0;

const updatePhrases = () => {
    dynamicText.textContent = phrases[pIndex];
    dynamicText.style.transform = 'translateY(100%)';
    
    setTimeout(() => {
        dynamicText.style.transition = 'none';
        dynamicText.style.transform = 'translateY(-100%)';
        
        setTimeout(() => {
            dynamicText.style.transition = 'transform 0.5s ease-in-out';
            dynamicText.style.transform = 'translateY(0)';
            pIndex = (pIndex + 1) % phrases.length;
        }, 50);
    }, 500);
};

const updateHellos = () => {
    helloText.textContent = hellos[hIndex];
    helloText.style.transform = 'translateY(100%)';
    
    setTimeout(() => {
        helloText.style.transition = 'none';
        helloText.style.transform = 'translateY(-100%)';
        
        setTimeout(() => {
            helloText.style.transition = 'transform 0.5s ease-in-out';
            helloText.style.transform = 'translateY(0)';
            hIndex = (hIndex + 1) % hellos.length;
        }, 50);
    }, 500);
};

// Initial content setup
dynamicText.textContent = phrases[pIndex];
helloText.textContent = hellos[hIndex];

// Initial animation setup
setTimeout(() => {
    dynamicText.style.transform = 'translateY(0)';
    pIndex = (pIndex + 1) % phrases.length;
}, 50);

setTimeout(() => {
    helloText.style.transform = 'translateY(0)';
    hIndex = (hIndex + 1) % hellos.length;
}, 50);

// Set intervals for updating text
setInterval(updatePhrases, 2000);
setInterval(updateHellos, 14000);

document.addEventListener('DOMContentLoaded', function () {
    var subDivs = document.querySelectorAll('.sub-div');

    subDivs.forEach(function (subDiv) {
        subDiv.addEventListener('click', function () {
            // Check if the clicked sub-div is already expanded
            if (this.classList.contains('expanded')) {
                // If it is expanded, remove the expanded class and reset z-index
                this.classList.remove('expanded');
                this.style.zIndex = 1;
            } else {
                // If it is not expanded, remove the expanded class and reset z-index from all sub-divs
                subDivs.forEach(function (s) {
                    s.classList.remove('expanded');
                    s.style.zIndex = 1;
                });

                // Add the expanded class and set higher z-index to the clicked sub-div
                this.classList.add('expanded');
                this.style.zIndex = 10;
            }
        });
    });
});