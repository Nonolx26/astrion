window.addEventListener('scroll', function() {
    const text = document.getElementById('text');
    const scrollPosition = window.scrollY;

    // Définir les seuils pour l'animation
    const startScroll = 100; // À partir de quel scroll l'animation commence
    const endScroll = 600; // À quel scroll l'animation se termine

    // Si le scroll est dans l'intervalle
    if (scrollPosition > startScroll && scrollPosition < endScroll) {
        const progress = (scrollPosition - startScroll) / (endScroll - startScroll); // Calcul du progrès d'animation

        const opacity = progress; // Gérer l'opacité progressivement
        const scale = 0.1 + (progress * 3.9); // Zoom de 0.1 à 4
        const translateY = (1 - progress) * 500; // Monte de la position de départ à l'arrivée (500px vers le haut)

        // Appliquer l'animation
        text.style.opacity = opacity;
        text.style.transform = `translate(-50%, -${translateY}px) scale(${scale})`;
    }
});
