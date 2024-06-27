// Immediately Invoked Function Expression (IIFE) for encapsulation
(function () {
    // Activate buttons functionality
    const activateButtons = () => {
        const buttons = [...document.querySelectorAll(".control")];
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            });
        });
    };

    // Theme toggle functionality
    const toggleTheme = () => {
        const themeButton = document.querySelector(".theme-btn");
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            localStorage.setItem('theme', document.body.classList.contains("light-mode") ? 'light' : 'dark');
        });
    };

    // Load and apply saved theme
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add("light-mode");
        } else {
            document.body.classList.remove("light-mode");
        }
    };

    // Smooth scrolling functionality
    const smoothScroll = () => {
        const links = [...document.querySelectorAll('a[href^="#"]')];
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    // Initialize all functionalities
    const init = () => {
        activateButtons();
        toggleTheme();
        applySavedTheme();
        smoothScroll();
    };

    // Execute initialization
    init();
})();
