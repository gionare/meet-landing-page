// Get the reference to the images
const headerImg = document.querySelector('.header-img');
const additionalImg = document.getElementById('additional-img');

// Function to change the image source based on screen width
function changeImagesBasedOnScreenWidth() {
  // Check the window width
  const screenWidth = window.innerWidth;

  // Set different image sources based on the screen width
  if (screenWidth >= 1440) {
    headerImg.src = 'assets/desktop/image-hero-left.png'; // Replace with the path to your new image
    additionalImg.src = 'assets/desktop/image-hero-right.png'; // Replace with the path to your second image
    additionalImg.style.display = 'block'; // Show the additional image
  } else {
    headerImg.src = 'assets/tablet/image-hero.png';
    additionalImg.style.display = 'none'; // Hide the additional image
  }
}

// Call the function on page load and window resize
window.addEventListener('load', changeImagesBasedOnScreenWidth);
window.addEventListener('resize', changeImagesBasedOnScreenWidth);