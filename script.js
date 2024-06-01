const dynamicText = document.querySelector('.jobs');
const phrases = [
    'an inventor \uD83D\uDEE0',
    'a coder \uD83D\uDCBB',
    'a freshman @ Columbia 🦁',
    'a coffee lover \u2615',
    'an occasional procrastinator \uD83E\uDEE0'
];

let pIndex = 0;

const updateText = () => {
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

dynamicText.textContent = phrases[pIndex];
setTimeout(() => {
    dynamicText.style.transform = 'translateY(0)';
    pIndex = (pIndex + 1) % phrases.length;
}, 50);


setInterval(updateText, 2000);
