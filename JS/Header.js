function createHeader() {
    return `
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid nav-shell">
                    <div class="top-nav">
                        <a class="navbar-brand" href="index.html" aria-label="Ir al inicio">
                            <span class="brand-mark">
                                <img src="Assets/images/logo.png" alt="Logo">
                            </span>
                            <span class="brand-copy">
                                <span class="brand-title">Xipil</span>
                                <span class="brand-subtitle">Memoria viva de Xoco</span>
                            </span>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Abrir menu">
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="AboutUs.html">Quienes somos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Mapa.html">Mapa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Archivo.html">Archivo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Contacto.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('is-active');
        }
    });
}

function loadHeader() {
    const headerContainer = document.getElementById('header-container');

    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
        highlightCurrentPage();
    }
}

export { loadHeader };
