document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.querySelectorAll('.ingredients');

    ingredients.forEach(container => {
        container.addEventListener('click', () => {
            if (container.classList.contains('expanded')) {
                // Add fade-out class before removing the expanded class
                container.classList.add('fade-out');
                setTimeout(() => {
                    container.classList.remove('expanded');
                    container.classList.remove('fade-out');
                }, 500); // Match the duration of the fade-out animation
            } else {
                // Collapse any expanded container
                document.querySelectorAll('.ingredients.expanded').forEach(expandedContainer => {
                    expandedContainer.classList.add('fade-out');
                    setTimeout(() => {
                        expandedContainer.classList.remove('expanded');
                        expandedContainer.classList.remove('fade-out');
                    }, 500); // Match the duration of the fade-out animation
                });

                // Expand the clicked container
                container.classList.add('expanded');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const footerLink = document.getElementById('footer-link');
    let isHovered = false;

    // Set a flag when the user hovers over the link
    footerLink.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    // Reset the flag when the user leaves the link
    footerLink.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    // Handle the click event
    footerLink.addEventListener('click', (event) => {
        if (isHovered) {
            // Allow the default action (redirect) if hovered
            window.location.href = footerLink.href;
        } else {
            // Prevent the default action if not hovered
            event.preventDefault();
        }
    });
});

