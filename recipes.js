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
