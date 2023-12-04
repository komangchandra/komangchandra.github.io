document.addEventListener("DOMContentLoaded", function () {
  var penjelasanElement = document.getElementById("penjelasan");
  var anchorElements = document.querySelectorAll(".experience-link");

  anchorElements.forEach(function (anchor) {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();

          // Mendapatkan data dari atribut data
          var role = anchor.getAttribute("data-role")
          var location = anchor.getAttribute("data-location");
          var date = anchor.getAttribute("data-date");
          var details = anchor.getAttribute("data-details").split(',');

          // Mengubah isi elemen penjelasan
          penjelasanElement.innerHTML = `
              <h4 class="text-2xl font-bold text-gray-200">${role}</h4>
              <h5 class="text-sm font-light">${location}</h5>
              <p class="mt-5 text-light text-gray-200">${date}</p>
              <hr class="my-5">
              <ul class="list-disc list-inside leading-10">
                ${details.map(detail => `<li>${detail.trim()}</li>`).join('')}
              </ul>
          `;
      });
  });
});


// Get the button and navigation elements
const hamburgerButton = document.getElementById('hamburger');
const navElement = document.querySelector('nav');

// Add click event listener to the button
hamburgerButton.addEventListener('click', function() {
  // Toggle the 'hidden' utility class on the navigation element
  navElement.classList.toggle('hidden');
});


// If you want to toggle the visibility dynamically with JavaScript
const myDiv = document.getElementById('myNav');

// Check if the screen width is medium (md) or larger
const isMediumScreen = window.matchMedia('(min-width: 768px)').matches;

// Toggle the 'hidden' class based on the screen width
myDiv.classList.toggle('hidden', !isMediumScreen);