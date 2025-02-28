document.addEventListener("DOMContentLoaded", function () {
    // Animasi Typing Effect
    const text = "Open Recruitment";
    let index = 0;
    function type() {
        document.querySelector(".typing").textContent = text.slice(0, index++);
        if (index <= text.length) {
            setTimeout(type, 150);
        }
    }
    type();

    // Efek Partikel
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffcc00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animasi Typing Effect
    const text = "Open Recruitment";
    let index = 0;
    function type() {
        document.querySelector(".typing").textContent = text.slice(0, index++);
        if (index <= text.length) {
            setTimeout(type, 150);
        }
    }
    type();

    // Efek Partikel
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffcc00", "#ff4500"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 4, random: true },
            move: { enable: true, speed: 1.5 }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let footer = document.querySelector(".footer");
    
    function checkScroll() {
        let scrollPos = window.scrollY + window.innerHeight;
        let footerPos = footer.offsetTop;

        if (scrollPos > footerPos) {
            footer.classList.add("fade-in");
        }
    }

    window.addEventListener("scroll", checkScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    let footer = document.querySelector(".footer");

    function checkScroll() {
        let scrollPos = window.scrollY + window.innerHeight;
        let footerPos = footer.offsetTop;

        if (scrollPos > footerPos + 100) {
            footer.classList.add("fade-in");
        }
    }

    window.addEventListener("scroll", checkScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    let timelineItems = document.querySelectorAll(".timeline-item");

    function checkScroll() {
        let scrollPos = window.scrollY + window.innerHeight;

        timelineItems.forEach((item) => {
            let itemPos = item.offsetTop;

            if (scrollPos > itemPos + 100) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
});
