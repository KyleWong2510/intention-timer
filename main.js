// BUTTON VARIABLES
var studyButton = document.querySelector('.study');
var meditateButton = document.querySelector('.meditate');
var exerciseButton = document.querySelector('.exercise');
var startButton = document.querySelector('#start-activity-button');
var buttonContainer = document.querySelector('.category-section');
var buttonArray = [studyButton, meditateButton, exerciseButton];


// INPUT VARIABLES
var titleInput = document.querySelector("#title-input");
var minInput = document.querySelector('#min-input');
var secInput = document.querySelector('#sec-input');
var inputField1 = document.querySelector('.input-field-1');
var inputField2 = document.querySelector('.input-field-2');
var inputField3 = document.querySelector('.input-field-3');
var categoryField = document.querySelector('.category-field');


// PAGE VARIABLES
var main1 = document.querySelector('.main1');
var main2 = document.querySelector('.main2');


// TIMER VARIABLES
var startTimer = document.querySelector('.start-timer-button');


// EVENT LISTENERS
minInput.addEventListener('input', restrictMinInput);
secInput.addEventListener('input', restrictSecInput);
buttonContainer.addEventListener('click', changeButtons);
buttonContainer.addEventListener('click', timerBorder)
startButton.addEventListener('click', validate);


// BUTTON FUNCTIONS
function changeButtons() {
  // var classList = event.target.classList;
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
    };
  };
};

function timerBorder() {
  if (event.target.classList.contains('study')) {
    startTimer.style.borderColor = '#B3FD78';
  }
  if (event.target.classList.contains('meditate')) {
    startTimer.style.borderColor = '#C278FD';
  }
  if (event.target.classList.contains('exercise')) {
    startTimer.style.borderColor = '#FD8078';
  }
}

// FUNCTIONS FOR MINUTES AND SECONDS
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


// FUNCTIONS FOR MOVING TO PAGE


// Validate function: this function checks a few different things
// before moving onto the next page. We created two variables:
// the first is areButtonsValid and is assigned to the validateButtons
// function. The second is the same, but for the inputs. These two FUNCTIONS
// evaluate true or false, so in the if block of this specific function,
// we are saying "if the buttons are valid, and if the inputs are valid (e.g
// they both evaluate to true), execute the displayTimerPage function."
function validate() {
  var areButtonsValid = validateButtons();
  var areInputsValid = validateInputs();
  if(areButtonsValid && areInputsValid) {
    displayTimerPage();
  }
}

// Validate buttons function: in this function, we also created three new
// variables to increase readability. This function originally started out as
// "if (!studyButton.classList.contains('active'), && ...)" and was a very
// long if block. Attaching those statements to variables allowed for the
// if block to be more condensed and readable. The bang operator is used
// in the if block to say that if none of the buttons contain the
// class of 'active', then display the error message and RETURN (evaluate to)
// FALSE. If ANY of the buttons contain 'active', then it evaluates to true.
function validateButtons() {
  var isStudyActive = studyButton.classList.contains('active');
  var isMeditateActive = meditateButton.classList.contains('active');
  var isExerciseActive = exerciseButton.classList.contains('active');
  if (!isStudyActive && !isMeditateActive && !isExerciseActive) {
    categoryField.insertAdjacentHTML('afterend', `
    <p class="card-text button-select cat-select"><img src="assets/warning.svg">You must select a category
    </p>`);
    return false;
  }
  return true;
}

// Validate inputs function: A variable is created for "isValid" so that we
// can use its true or false evaluation up in the Validate function. It is
// set to true by default. IF there is no value in titleInput, minInput,
// or secInput, display the error message on the corresponding field.
// isValid will then be set to FALSE if any error message has appeared.
// If no error messages appeared, isValid will remain true and will push
// through the validate function above, allowing the timer page to be displayed.
function validateInputs() {
  var isValid = true;
  if (!titleInput.value) {
    inputField1.insertAdjacentHTML('afterend', `
    <div class="error-container">
      <p class="error-message cat-error card-text"><img src="assets/warning.svg">A description is required.</p>
    </div>`);
    isValid = false;
  };
  if (!minInput.value) {
    inputField2.insertAdjacentHTML('afterend', `
    <div class="error-container">
      <p class="error-message min-error card-text"><img src="assets/warning.svg">A value is required.</p>
    </div>`);
    isValid = false;
  };
  if (!secInput.value) {
    inputField3.insertAdjacentHTML('afterend', `
    <div class="error-container">
      <p class="error-message sec-error card-text"><img src="assets/warning.svg">A value is required.</p>
    </div>`);
    isValid = false;
  };
  return isValid;
};

function displayTimerPage() {
  main1.classList.add('hidden');
  main2.classList.remove('hidden');
};