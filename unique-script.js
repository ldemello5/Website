document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".unique-card").forEach((card, index) => {
        const images = card.dataset.images.split(",");
        let currentIndex = 0;

        function updateImage() {
            const imageElement = card.querySelector(".unique-card-image");
            imageElement.src = images[currentIndex];
        }

        card.querySelector(".unique-left-arrow").addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });

        card.querySelector(".unique-right-arrow").addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });

        card.querySelector(".unique-card-image").addEventListener("click", () => {
            const image = card.querySelector('.unique-card-image');
            const overlay = card.querySelector('.overlay');
            image.classList.toggle('enlarged');
            overlay.style.opacity = image.classList.contains('enlarged') ? '1' : '0';
        });

        // Initialize the image display for each card
        updateImage();
    });

    // Add event listener to the document to shrink the image when clicked
    document.addEventListener("click", (event) => {
        const enlargedImages = document.querySelectorAll(".unique-card-image.enlarged");
        enlargedImages.forEach(image => {
            if (!image.contains(event.target)) {
                image.classList.remove("enlarged");
                const overlay = image.parentElement.querySelector(".overlay");
                overlay.style.opacity = '0';
            }
        });
    });
});
