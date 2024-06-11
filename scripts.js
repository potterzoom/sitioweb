// Añadir cualquier funcionalidad JavaScript aquí
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de funcionalidad: desplazar suavemente a las secciones
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
