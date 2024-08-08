document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html">Job Poster Pro+</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">profile</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Career</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Explore companies</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    `;
});