document.addEventListener("DOMContentLoaded", function () {
    const particleConfig = {
        particles: {
            number: { value: 300, density: { enable: true, value_area: 800 } }, 
            color: { value: "#ffffff" }, 
            shape: { type: "circle" },
            opacity: { value: 0.7, random: false },
            size: { value: 2, random: true },
            line_linked: {
                enable: true,
                distance: 80, 
                color: "#ffffff",
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5, 
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
    };

    // Inicializar Particles.js para cada faixa
    particlesJS("particles-primeiro", particleConfig);
    particlesJS("particles-segundo", particleConfig);
    particlesJS("particles-terceiro", particleConfig);
});