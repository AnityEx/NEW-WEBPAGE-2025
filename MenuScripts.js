
  <script>
    (function setVhVarAndInit() {
      function setVhVar() {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01 * 1) + 'px');
      }
      setVhVar();

      // text-changing button logic
      function initTextPhrases() {
        const phrases = [
          "Do you like my hamburger menu?",
          "ok this text changes when you click the button",
          "hire me for your next project!",
          "i am not a web developer so this feature was made with some help haha",
          "turns out web desing is fun and quite hard",
          "i love myself and my work",
          "im great to work with i swear",
          "if you read this you are a true fan  (*you start spinning*)",
        ];
        let currentIndex = 0;

        const textOverlay = document.querySelector(".text-overlay");
        const topBtn = document.querySelector(".top-btn");

        if (textOverlay && topBtn) {
          topBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % phrases.length;
            textOverlay.textContent = phrases[currentIndex];
          });
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTextPhrases);
      } else {
        initTextPhrases();
      }
    })();
  </script>
  <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
  <script>
    kofiWidgetOverlay.draw('anityex', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#ffffff',
      'floating-chat.donateButton.text-color': '#323842'
    });
  </script>