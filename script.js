const heartElement = document.getElementById('heartElement');
        const toggleButton = document.getElementById('toggleHeart');

        toggleButton.addEventListener('click', () => {
            if (heartElement.style.background === 'red') {
                heartElement.style.background = 'pink';
            } else {
                heartElement.style.background = 'red';
            }
        });
