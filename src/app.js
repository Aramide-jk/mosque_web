



// ////////////////////////////////////////////////

const scroll_to_top=document.querySelector(".scroll_to_top");
// const map=document.getElementById("map");
const menuBtn = document.querySelector("#menu_btn");
const navbar = document.querySelector(".navs");


const solatTimeContainer = document.querySelector(".times");
const solatDate = document.querySelector(".date");




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
const fetchPrayerTimes = async ()=>{
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;

  console.log(year,month);
  try{
  const response = await fetch(`https://api.aladhan.com/v1/calendar?latitude=9.077751&longitude=8.6774567&year=${year}&month=${month}`);
  const result = await response.json();
  renderTodaysPrayerTimes(result.data)
  }catch(err){
  console.log(err)
  }
 }



 const solatNotToDisplay = ["imsak","sunrise","sunset","midnight","firstthird","lastthird"];
 function renderTodaysPrayerTimes(prayerTimes){
   const today = new Date().getDate();
   const times = prayerTimes[today - 1];
   console.log(times);
   const solatNames = Object.keys(times.timings);
   let html ='';
   solatNames.forEach(solatName=>{
  if(solatNotToDisplay.includes(solatName.toLocaleLowerCase())) return;
  const solatTime = times.timings[solatName];
  html+=`<div class="flex flex-col gap-y-1 text-sm">
  <span class="font-bold text-red-900">${solatName}</span>
  <span>${solatTime.replace("(WAT)","")}</span>
</div>`
   })


  
   solatDate.innerHTML = new Date().toGMTString();
   solatTimeContainer.innerHTML = html;

  }
  window.addEventListener("load",fetchPrayerTimes);