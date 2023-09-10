//certificates
// document.addEventListener('DOMContentLoaded', function() {
//     const certificateImages = document.querySelectorAll('.certificate-image');
    
//     certificateImages.forEach(function(image) {
//       const src = image.getAttribute('data-src');
//       image.setAttribute('src', src);
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul.menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});
