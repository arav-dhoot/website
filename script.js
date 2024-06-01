const dynamicText = document.querySelector('.jobs');
const phrases = [
    'an inventor \uD83D\uDEE0',
    'a coder \uD83D\uDCBB',
    'a freshman @ Columbia 🦁',
    'a coffee lover \u2615',
    'an occasional procrastinator \uD83E\uDEE0',
    'an aviation geek ✈️'
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