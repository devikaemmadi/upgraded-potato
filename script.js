const moons = document.querySelectorAll('.moon');
const sections = document.querySelectorAll('.phase-content');
const navLinks = document.querySelectorAll('.nav-link');

function switchPhase(phase) {
    document.body.className = 'phase-' + phase;

    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === phase) {
            section.classList.add('active');

            if (phase === "skills") {
                animateSkills(section);
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.phase === phase) {
            link.classList.add('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        switchPhase(link.dataset.phase);
    });
});

moons.forEach(moon => {
    moon.addEventListener('click', () => {
        switchPhase(moon.dataset.phase);
    });
});

function animateSkills(section) {
    const fills = section.querySelectorAll(".skill-fill[data-w]");
    fills.forEach(f => {
        f.style.width = "0%";
        requestAnimationFrame(() => {
            f.style.width = f.dataset.w;
        });
    });
}
