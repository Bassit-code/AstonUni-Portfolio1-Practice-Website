//Progress bar for java box.
let progressBar = document.querySelector(".progress-bar");
let progressBarLabel = document.querySelector(".progress-bar-label");
let progressPercentage = 55;
let progressWidth = 0;

let progressBarAnimation = setInterval(() => {
  if (progressWidth >= progressPercentage) {
    clearInterval(progressBarAnimation);
  } else {
    progressWidth++;
    progressBar.style.width = `${progressWidth}%`;
    progressBarLabel.innerHTML = `${progressWidth}%`;
  }
}, 20);

//Progress bar for HTML box.
let progressBar2 = document.querySelector(".progress-bar-2");
let progressBarLabel2 = document.querySelector(".progress-bar-label-2");
let progressPercentage2 = 75;
let progressWidth2 = 0;

let progressBarAnimation2 = setInterval(() => {
  if (progressWidth2 >= progressPercentage2) {
    clearInterval(progressBarAnimation);
  } else {
    progressWidth2++;
    progressBar2.style.width = `${progressWidth2}%`;
    progressBarLabel2.innerHTML = `${progressWidth2}%`;
  }
}, 20);

//Progress bar for CSS box.
let progressBar3 = document.querySelector(".progress-bar-3");
let progressBarLabel3 = document.querySelector(".progress-bar-label-3");
let progressPercentage3 = 69;
let progressWidth3 = 0;

let progressBarAnimation3 = setInterval(() => {
  if (progressWidth3 >= progressPercentage3) {
    clearInterval(progressBarAnimation);
  } else {
    progressWidth3++;
    progressBar3.style.width = `${progressWidth3}%`;
    progressBarLabel3.innerHTML = `${progressWidth3}%`;
  }
}, 20);


//Progress bar for JS box.
let progressBar4 = document.querySelector(".progress-bar-4");
let progressBarLabel4 = document.querySelector(".progress-bar-label-4");
let progressPercentage4 = 55;
let progressWidth4 = 0;

let progressBarAnimation4 = setInterval(() => {
  if (progressWidth4 >= progressPercentage4) {
    clearInterval(progressBarAnimation);
  } else {
    progressWidth4++;
    progressBar4.style.width = `${progressWidth4}%`;
    progressBarLabel4.innerHTML = `${progressWidth4}%`;
  }
}, 20);


//Submit button checks.

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  const proposedStartDate = new Date(document.querySelector("#proposed-start-date").value);
  const currentDate = new Date();
  const oneDayInMilliseconds = 86400000; // 1 day in milliseconds

  if (proposedStartDate.getTime() < currentDate.getTime() + oneDayInMilliseconds) {
    alert("Proposed start date must be at least 1 day in the future.");
    return;
  }

  const email = document.querySelector("#email").value;
  const confirmationEmail = document.querySelector("#confirmation-email").value;

  if (email !== confirmationEmail) {
    alert("Email and confirmation email do not match.");
    return;
  }

  // submit the form if everything is valid
  document.querySelector(".contact-info").submit();
});


function submitForm() {
  // Retrieve form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phoneNum').value;
  const project = document.getElementById('projectName').value;
  const date = document.getElementById('proposed-start-date').value;
  const contactMethod = document.getElementById('contactMethod').value
  // Create a variable to hold the form data
  const formData = `Name: ${name} \nEmail: ${email} \nPhone Number: ${phone} \nProject Name: ${project} \nStart Date: ${date} \nContact Method: ${contactMethod}`;

  
  // Display pop-up with form data
  window.alert(formData);
}

document.querySelector(".submit").addEventListener('click', submitForm);



