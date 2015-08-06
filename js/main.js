if(document.documentElement.clientWidth > 412) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
            },
            "color": {
                "value": "#bbbbbb"
            },
            "shape": {
                "type": "circle",
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 1,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#bbbbbb",
                "opacity": 0.5,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
}