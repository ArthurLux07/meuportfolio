document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
        particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" }, 
            shape: { type: "circle" },
            opacity: { value: 1, random: false },
            size: { value: 1, random: true },
            line_linked: {
            enable: true,
            distance: 150, 
            color: "#ffffff",
            opacity: 0.4,
            width: 1
            },
            move: {
            enable: true,
            speed: 2, 
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
            onhover: { enable: false, mode: "grab" }, 
            onclick: { enable: false, mode: "push" }, 
            resize: false
            }
        },
        retina_detect: true
        });
  });

  document.querySelectorAll('.card, .card2').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});