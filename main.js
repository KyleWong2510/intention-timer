var studyButton = document.querySelector('.study');
var meditateButton = document.querySelector('.meditate');
var exerciseButton = document.querySelector('.exercise');
var minInput = document.querySelector('#min-input');
var secInput = document.querySelector('#sec-input');
var main1 = document.querySelector('.main1');
var main2 = document.querySelector('.main2');
var startButton = document.querySelector('#start-activity-button');
var startTimer = document.querySelector('.start-timer-button');
var buttonContainer = document.querySelector('.category-section');
var categoryField = document.querySelector('.category-field');
var inputField1 = document.querySelector('.input-field-1');
var inputField2 = document.querySelector('.input-field-2');
var inputField3 = document.querySelector('.input-field-3');
var buttonArray = [studyButton, meditateButton, exerciseButton];
var inputArray = [inputField1, inputField2, inputField3];
var titleInput = document.querySelector("#title-input");
var minInput = document.querySelector("#min-input");
var secInput = document.querySelector("#sec-input");

minInput.addEventListener('input', restrictMinInput);
secInput.addEventListener('input', restrictSecInput);
buttonContainer.addEventListener('click', changeButtons);
startButton.addEventListener('click', validateButtons);

function changeButtons() {
  var classList = event.target.classList;
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    event.target.firstElementChild.src = `./assets/${event.target.id}.svg`;
  } else {
    event.target.classList.add('active');
    event.target.firstElementChild.src = `./assets/${event.target.id}-active.svg`;
  }
  removeColors();
}

function removeColors() {
  for (var i = 0; i < buttonArray.length; i++) {
    if (buttonArray[i].id !== event.target.id) {
      buttonArray[i].classList.remove('active');
      buttonArray[i].firstElementChild.src = `./assets/${buttonArray[i].id}.svg`;
    }
  }
}

function restrictMinInput() {
  if (minInput.value === "") {
    minInput.value = "";
  };
};

function restrictSecInput() {
  if (secInput.value === "") {
    secInput.value = "";
  };
};

function displayTimerPage() {
  main1.classList.add('hidden');
  main2.classList.remove('hidden');
}

function validateButtons() {
  for (var i = 0; i < buttonArray.length; i++) {
    if (!buttonArray[i].classList.contains('active')) {
      categoryField.insertAdjacentHTML('afterend', `
      <p class="card-text button-select cat-select"><img src="assets/warning.svg">You must select a category
      </p>`);
    } else {
      break
    }
  }
  validateInputs();
}

function validateInputs() {
  if (!titleInput.value) {
    inputField1.insertAdjacentHTML('afterend', `
    <div class="error-container">
      <p class="error-message cat-error card-text"><img src="assets/warning.svg">A description is required.</p>
    </div>`)
  }
  if (!minInput.value) {
    inputField2.insertAdjacentHTML('afterend', `
    <div class="error-container">
      <p class="error-message min-error card-text"><img src="assets/warning.svg">A value is required.</p>
    </div>`)
  }
  if (!secInput.value) {
    inputField3.insertAdjacentHTML('afterend', `
    <div class="error-container">
      <p class="error-message sec-error card-text"><img src="assets/warning.svg">A value is required.</p>
    </div>`)
  }
  if (titleInput.value && minInput.value && secInput.value) {
    displayTimerPage();
  };
};


// IDK WHAT THE FUCK THIS CODE IS - JUST THROWING SHIT AT THE WALL
// function validateInputs() {
//   for (var i = 0; i < inputArray.length; i++) {
//     if (!inputArray[i].value == "") {
//       inputField1.insertAdjacentHTML('afterend', `
//       <div class="error-container">
//       <p class="error-message cat-error card-text"><img src="assets/warning.svg">An input is required..</p>
//       </div>`)
//     }
//     if (!inputArray[i].value == "") {
//       inputField2.insertAdjacentHTML('afterend', `
//       <div class="error-container">
//       <p class="error-message cat-error card-text"><img src="assets/warning.svg">An input is required..</p>
//       </div>`)
//     }
//     if (!inputArray[i].value == "") {
//       inputField3.insertAdjacentHTML('afterend', `
//     <div class="error-container">
//     <p class="error-message cat-error card-text"><img src="assets/warning.svg">An input is required..</p>
//     </div>`)
//     };
//   };
// };
