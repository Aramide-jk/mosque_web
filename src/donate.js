const one_of = document.getElementById("one");
const regular = document.getElementById("regular");
const donation = document.getElementById("preffered_date");
const payment = document.getElementById("payment_method", "hidden");
// const profile=getElementById("your_profile");
const address = document.getElementById("your_address");

// Dyas selection
const optionContainer = document.getElementById("option-container");
for (let i = 1; i <= 28; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = ` ${i}th`;
  optionContainer.appendChild(option);
}


////////////////////////////////


// country
// Get the select element
const countrySelect = document.getElementById("country-select");

// Fetch the list of countries from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((countries) => {
    // Loop through the countries and create an option element for each country
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name.common;
      option.text = country.name.common;
      countrySelect.add(option);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries:", error);
  });

  /////////////////////////////////////

one_of.addEventListener("click", () => {
  donation.classList.add("hidden");
  payment.style.display = "grid";
  address.classList.add("hidden");
});

regular.addEventListener("click", () => {
  donation.classList.remove("hidden");
  payment.style.display = "none";
  // address.classList.remove("hidden")
  address.classList.remove("hidden");
});



// keeping intouch
function togglePhoneInput(radioButton) {
  const phoneInputContainer = document.getElementById(
    "phone-input-container",
  );

  if (radioButton.value === "yes") {
    phoneInputContainer.classList.remove("hidden");
  } else {
    phoneInputContainer.classList.add("hidden");
  }
}






