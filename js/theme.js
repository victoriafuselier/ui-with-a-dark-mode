const themeBtn = document.querySelector('#theme-btn');
const root = document.documentElement;
const heroImage = document.querySelector('#hero-image');
const featuresHeading = document.querySelector('#features-heading');
const themeIcon = themeBtn.querySelector('i');
let styleElement;

function addLightStyles() {
    const styleElement = document.createElement('style');
    const cssRules = `
        #hero-span {
            color: var(--primary);
        }
        #features-heading {
            color: var(--text-primary);
        }
        #features-section i {
            color: var(--text-secondary);
            opacity: 0.4;
        }
    `;
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
}

function addDarkStyles() {
    const styleElement = document.createElement('style');
    const cssRules = `
        #hero-span,
        #features-heading {
            background-image: linear-gradient(to right, orange, white);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
        }
        #features-section i {
            background-image: linear-gradient(to bottom, orange, white);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            opacity: 1;
        }
    `;
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
}

function removeStyles() {
    if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
    }
}

function setDarkColors() {
    root.style.setProperty('--primary', '#FEB34F');
    root.style.setProperty('--text-primary', '#FFFFFF');
    root.style.setProperty('--text-secondary', '#A5B4BC');
    root.style.setProperty('--nav-bg', '#24282B');
    root.style.setProperty('--hero-bg', '#343A3D');
    root.style.setProperty('--features-bg', '#3D4346');
    root.style.setProperty('--footer-bg', '#24282B');
}

function setLightColors() {
    root.style.setProperty('--primary', '#FEB34F');
    root.style.setProperty('--text-primary', '#505961');
    root.style.setProperty('--text-secondary', '#505961');
    root.style.setProperty('--nav-bg', '#24282B');
    root.style.setProperty('--hero-bg', '#F9F9FA');
    root.style.setProperty('--features-bg', '#E1E2E4');
    root.style.setProperty('--footer-bg', '#24282B');
}

function setDarkMode() {
    heroImage.setAttribute('src', 'starter-files/assets/hero-dark-mode.png');
    setDarkColors();
    removeStyles();
    addDarkStyles();
    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

function setLightMode() {
    heroImage.setAttribute('src', 'starter-files/assets/hero-light-mode.png');
    setLightColors();
    removeStyles();
    addLightStyles();
    if (themeIcon.classList.contains('fa-sun')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

window.addEventListener('load', (e) => {
    e.preventDefault();
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
});

document.addEventListener('click', (e) => {
    if (e.target === themeBtn || e.target === themeIcon) {
        if (themeIcon.classList.contains('fa-sun')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            setLightMode();
            localStorage.clear();
            localStorage.setItem('theme', 'light');
        } else if (themeIcon.classList.contains('fa-moon')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            setDarkMode();
            localStorage.clear();
            localStorage.setItem('theme', 'dark');
        }
    }
});

alert("Note: This site is an example landing page for a fictitious product. With that in mind, all links and most buttons on this page are simply placeholders. The only funtional button present is the theme button in header. Theme button is marked by a moon/sun icon. Go ahead and try it out!");


