const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Sempre defina o tema como 'dark' quando a página carregar
document.documentElement.setAttribute('data-bs-theme', 'dark');
themeToggle.checked = true; // Garante que o toggle aparece como marcado (dark)

// Ouça a mudança do estado do checkbox para alternar o tema
themeToggle.addEventListener('change', toggleTheme);
