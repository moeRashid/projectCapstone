document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageContainer");
    const galleryModal = document.getElementById("galleryModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let images = [];
    let currentIndex = 0;

    document.querySelectorAll(".icon").forEach(icon => {
        icon.addEventListener("click", () => {
            // Display images in the main body
            imageContainer.style.display = "flex";
            imageContainer.innerHTML = "";  // Clear any existing images

            for (let i = 1; i <= 10; i++) {  // Assuming 10 images
                let img = document.createElement("img");
                img.src = `https://via.placeholder.com/300?text=Image+${i}`; // Replace with your images
                img.alt = `Image ${i}`;
                img.dataset.index = i - 1;
                images.push(img.src);
                imageContainer.appendChild(img);
            }
        });
    });

    // Click event for images to open modal gallery
    imageContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            currentIndex = event.target.dataset.index;
            openModal(event.target.src);
        }
    });

    function openModal(src) {
        galleryModal.style.display = "block";
        modalImage.src = src;
    }

    closeBtn.addEventListener("click", () => {
        galleryModal.style.display = "none";
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalImage.src = images[currentIndex];
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalImage.src = images[currentIndex];
    });
});
