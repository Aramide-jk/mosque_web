// // Replace with your actual API endpoint and key
// const apiUrl = "http://api.aladhan.com/v1/gToH/07-12-2014";
// const apiKey = "your_api_key";

// // Function to format the date
// function formatDate(dateString) {
//   const date = new Date(dateString);
//   return date.toLocaleDateString();
// }

// // Function to display the calendar
// function displayCalendar(data) {
//   const calendarDiv = document.getElementById("calendar");
//   calendarDiv.innerHTML = "";

//   data.forEach((day) => {
//     const dayDiv = document.createElement("div");
//     dayDiv.classList.add("day");

//     const dateDiv = document.createElement("div");
//     dateDiv.classList.add("date");
//     dateDiv.textContent = formatDate(day.date);

//     const eventDiv = document.createElement("div");
//     eventDiv.classList.add("event");
//     eventDiv.textContent = day.event;

//     dayDiv.appendChild(dateDiv);
//     dayDiv.appendChild(eventDiv);
//     calendarDiv.appendChild(dayDiv);
//   });
// }

// // Fetch the Islamic calendar data
// fetch(apiUrl, {
//   headers: {
//     Authorization: `Bearer ${apiKey}`,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     displayCalendar(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
