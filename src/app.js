



// ////////////////////////////////////////////////

const scroll_to_top=document.querySelector(".scroll_to_top");
// const map=document.getElementById("map");
const menuBtn = document.querySelector("#menu_btn");
const navbar = document.querySelector(".navs");




/////////////////////////menu
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

///////////////Calendar////////////
// Replace with your actual API endpoint and key
const calendar=document.getElementById("calendar")
// const apiUrl = 'https://api.example.com/v1/calendar';
// const apiKey = 'your_api_key';

// // Function to format the date
// function formatDate(dateString) {
//   const date = new Date(dateString);
//   return date.toLocaleDateString();
// }

// // Function to display the calendar
// function displayCalendar(data) {
//   const calendarDiv = document.getElementById('calendar');
//   calendarDiv.innerHTML = '';

//   data.forEach(day => {
//     const dayDiv = document.createElement('div');
//     dayDiv.classList.add('day');

//     const dateDiv = document.createElement('div');
//     dateDiv.classList.add('date');
//     dateDiv.textContent = formatDate(day.date);

//     const eventDiv = document.createElement('div');
//     eventDiv.classList.add('event');
//     eventDiv.textContent = day.event;

//     dayDiv.appendChild(dateDiv);
//     dayDiv.appendChild(eventDiv);
//     calendarDiv.appendChild(dayDiv);
//   });
// }

// // Fetch the Islamic calendar data
// fetch(apiUrl, {
//   headers: {
//     'Authorization': `Bearer ${apiKey}`
//   }
// })
// .then(response => response.json())
// .then(data => {
//   displayCalendar(data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });
