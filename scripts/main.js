import { DateTime } from 'luxon';

function getDateValue() {
  const dateInput = document.getElementById("date-input");

  // Guard: stop here if the user hasn't picked a date
  if (dateInput.value === "") {
    document.getElementById("output").innerText = "Please enter a date first.";
    return; // exits the function early
  }

  // Parse the input date with Luxon
  const birthDate = DateTime.fromISO(dateInput.value);
  const now = DateTime.now();

  // Date math — Luxon gives you a clean diff object
  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

  const years  = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days   = Math.floor(diff.days);

  document.getElementById("output").innerHTML = `
  <span class="age-number">${years}</span>
  <span class="age-unit">years old</span>
  <span class="age-detail"><span>${months} months, ${days} days</span> since your birthday</span>
`;
}

document.getElementById("date-btn").addEventListener("click", getDateValue);