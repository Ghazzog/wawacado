document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-target'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.nav-buttons a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const textSection = document.querySelector(targetId); // Select the target section

        // Remove existing animation class if it exists
        textSection.classList.remove('fadeIn');

        // Trigger reflow to restart animation
        void textSection.offsetWidth;

        // Add the animation class
        textSection.classList.add('fadeIn');

        // Scroll to the target section smoothly
        textSection.scrollIntoView({ behavior: 'smooth' });
    });
});
