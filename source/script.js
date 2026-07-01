function initTextPhrases() {
    const phrases = [
        "Do you like my hamburger menu?",
        "ok this text changes when you click the button",
        "hire me for your next project!",
        "<a href='https://ko-fi.com/anityex' target='_blank'>-Donations appreciated-</a>",
        "i am not a web developer so this feature was made with some help haha",
        "turns out web design is fun and quite hard",
        "i love myself and my work",
        "im passionate about my craft",
        "if you read this you are a true fan (*you start spinning*)",
        "gallery in the works (v‿v)",
    ];
    let currentIndex = 0;

    const textOverlay = document.querySelector(".text-overlay");
    const topBtn = document.querySelector(".bt-top-container");

    if (textOverlay && topBtn) {
        topBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % phrases.length;
            textOverlay.innerHTML = phrases[currentIndex]; // <-- use innerHTML here
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTextPhrases);
} else {
    initTextPhrases();
}
