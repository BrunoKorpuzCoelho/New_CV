const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');

// Verifica se o modo dark está ativado no localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Função para ativar o modo dark
function enableDarkMode() {
    document.body.classList.add('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.remove('active');
    darkMode.querySelector('span:nth-child(2)').classList.add('active');
    // Armazena o estado do modo dark no localStorage
    localStorage.setItem('darkMode', 'true');

    // Aplica classe para botões no modo dark
    menuBtn.classList.remove('mode-light');
    closeBtn.classList.remove('mode-light');
}

// Função para desativar o modo dark
function disableDarkMode() {
    document.body.classList.remove('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.add('active');
    darkMode.querySelector('span:nth-child(2)').classList.remove('active');
    // Armazena o estado do modo dark no localStorage
    localStorage.setItem('darkMode', 'false');

    // Aplica classe para botões no modo claro
    menuBtn.classList.add('mode-light');
    closeBtn.classList.add('mode-light');
}

// Verifica se o modo dark deve ser ativado inicialmente
if (isDarkMode) {
    enableDarkMode();
}

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    // Toggle do modo dark
    if (document.body.classList.contains('dark-mode-variables')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

document.getElementById('onlineResumeBtn').addEventListener('click', () => {
    window.open('https://online-resume-brunovcoelho.netlify.app/', '_blank');
});

document.getElementById('skylineServersBtn').addEventListener('click', () => {
    window.open('0_skylineservers.html', '_blank');
});

document.getElementById('googleCloneBtn').addEventListener('click', () => {
    window.open('0_google.html', '_blank'); 
});

document.getElementById('instagramCloneBtn').addEventListener('click', () => {
    window.open('0_instagram.html', '_blank'); 
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('applyFilterBtn');
    const filterProjects = document.getElementById('filterProjects');

    if (filterButton && filterProjects) {
        filterButton.addEventListener('click', function() {
            const filterValue = filterProjects.value;
            const projects = document.querySelectorAll('.projects-cards-inner');
            
            projects.forEach(project => {
                const projectType = project.querySelector('.type').textContent.trim();
                
                if (filterValue === 'All Projects') {
                    project.style.display = 'flex';
                } else if (projectType.includes(filterValue)) {
                    project.style.display = 'flex'; 
                } else {
                    project.style.display = 'none';
                }
            });
        });
    } else {
        console.error('Elementos de filtro não foram encontrados.');
    }
});


function openGithubPageSK() {
    window.open('0_page_under.html', '_blank');
}

function openGithubPageLW() {
    window.open('https://github.com/BrunoKorpuzCoelho/Luxury-Wheels', '_blank');
}

function openGithubPageSkyServersHtml() {
    window.open('0_skylineservers.html', '_blank');
}