document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
        particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#fff" },
            shape: { type: "circle" },
            opacity: { value: 1, random: false },
            size: { value: 1, random: true },
            line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffffff", 
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
            onhover: { enable: true, mode: "grab" }, 
            onclick: { enable: true, mode: "push" }, 
            resize: true
            }
        },
        retina_detect: true
        });
  });