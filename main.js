// BUTTON VARIABLES
var studyButton = document.querySelector('.study');
var meditateButton = document.querySelector('.meditate');
var exerciseButton = document.querySelector('.exercise');
var startButton = document.querySelector('#start-activity-button');
var buttonContainer = document.querySelector('.category-section');
var buttonArray = [studyButton, meditateButton, exerciseButton];
var startTimerButton = document.querySelector('.start-timer-button');
var logActivityButton = document.querySelector('.log-activity-button');
var createNewButton = document.querySelector('.create-new-button');
// var sideBorder = document.querySelector('.card-border');

// INPUT VARIABLES
var titleInput = document.querySelector("#title-input");
var minInput = document.querySelector('#min-input');
var secInput = document.querySelector('#sec-input');
var inputField1 = document.querySelector('.input-field-1');
var inputField2 = document.querySelector('.input-field-2');
var inputField3 = document.querySelector('.input-field-3');
var categoryField = document.querySelector('.category-field');
// var minutes = minInput.value;
// var seconds = secInput.value;
// var title = titleInput.value;


// PAGE VARIABLES
var main1 = document.querySelector('.main1');
var main2 = document.querySelector('.main2');
var main3 = document.querySelector('.main3');


// TIMER VARIABLES
var startTimer = document.querySelector('.start-timer-button');
var titleSlot = document.getElementById('title-display');
var secondsSlot = document.getElementById('seconds-slot');
var minutesSlot = document.getElementById('minutes-slot');


// EVENT LISTENERS
minInput.addEventListener('input', restrictMinInput);
secInput.addEventListener('input', restrictSecInput);
buttonContainer.addEventListener('click', changeButtons);
buttonContainer.addEventListener('click', timerBorder)
startButton.addEventListener('click', validate);
startTimerButton.addEventListener('click', setTimer);
logActivityButton.addEventListener('click', logActivity);
createNewButton.addEventListener('click', returnToMain1);



//CREATING A NEW OBJECT
var chosenTitle = document.querySelector('.chosen-title');
var chosenMin = document.querySelector('.chosen-min');
var chosenSec = document.querySelector('.chosen-sec');
var activityCard = document.querySelector('.activity-card');
var currentActivity;
var chosenCategory = document.querySelector('.chosen-category');
var noActivitiesNotice = document.querySelector('.no-activities-notice');

function createObject() {
  currentActivity =
    new Activity(titleInput.value,
      minInput.value,
      secInput.value,
      whichButton()
    );
}

function logActivity() {
  main2.classList.add('hidden');
  main3.classList.remove('hidden');
  var newCard = currentActivity.createCard(buttonArray);
  document.querySelector('.card-wrapper').appendChild(newCard);
  currentActivity = undefined;
}

function whichButton() {
  if (studyButton.classList.contains('active')) {
    return 'Study';
  } else if (meditateButton.classList.contains('active')) {
    return 'Meditate';
  } else if (exerciseButton.classList.contains('active')) {
    return 'Exercise';
  }
}

function returnToMain1() {
  var colon = document.querySelector('.colon');
  main3.classList.add('hidden');
  removeColors();
  main1.classList.remove('hidden');
  colon.classList.remove('hidden');
  startTimerButton.disabled = false;
  startTimerButton.innerText = 'START';
  logActivityButton.classList.add('hidden');
}

// BUTTON FUNCTIONS
function changeButtons() {
  removeColors();
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    event.target.firstElementChild.src = `./assets/${event.target.id}.svg`;
  } else {
    event.target.classList.add('active');
    event.target.firstElementChild.src = `./assets/${event.target.id}-active.svg`;
  }
}

function removeColors() {
  for (var i = 0; i < buttonArray.length; i++) {
      buttonArray[i].classList.remove('active');
      buttonArray[i].firstElementChild.src = `./assets/${buttonArray[i].id}.svg`;
  };
};

function timerBorder() {
  if (event.target.classList.contains('study')) {
    startTimer.style.borderColor = '#B3FD78';
    return 'study'
  }
  if (event.target.classList.contains('meditate')) {
    startTimer.style.borderColor = '#C278FD';
    return 'meditate'
  }
  if (event.target.classList.contains('exercise')) {
    startTimer.style.borderColor = '#FD8078';
    return 'exercise'
  };
};

// function changeBorderColor() {
//   for (var i = 0; i < buttonArray.length; i++) {
//     if (buttonArray[i].classList.contains('active')) {
//       var activeBorder = buttonArray[i].id;
//     }
//   }
// }

// function changeBorderColor() {
//   var sideBorder = document.getElementsByClassName('.card-border');
//   if (studyButton.classList.contains('active')) {
//     sideBorder.style.borderColor = '#B3FD78';
//   }
//   if (meditateButton.classList.contains('active')) {
//     sideBorder.style.borderColor = '#C278FD';
//   }
//   if (exerciseButton.classList.contains('active')) {
//     sideBorder.style.borderColor = '#FD8078';
//   }
// }

// function changeBorderColor() {
//   var sideBorder = document.getElementsByClassName('.card-border');
//   if (timerBorder() == 'study') {
//     sideBorder.style.borderColor = '#B3FD78';
//   }
  // if the return of timerBorder function is 'study'
//} make the side border green


// FUNCTIONS FOR THE TIMER
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

function setTimer() {
  var minutes = Number(currentActivity.minutes);
  var seconds = Number(currentActivity.seconds);
  var totalSeconds = (minutes*60) + seconds;
  var remainingSeconds = totalSeconds % 60;
  var remainingMinutes = Math.floor(totalSeconds / 60);
  var colon = document.querySelector('.colon')
  var timer = setInterval(function() {
    minutesSlot.innerText=remainingMinutes;
    secondsSlot.innerText=remainingSeconds;
      totalSeconds--;
      startTimerButton.disabled = true;
      remainingMinutes = Math.floor(totalSeconds / 60);
      remainingSeconds = totalSeconds % 60;
      if (remainingSeconds < 10) {
        remainingSeconds = `0${remainingSeconds}`;
      }
      if (totalSeconds < 0) {
          clearInterval(timer);
          minutesSlot.innerText='';
          secondsSlot.innerText='Congratulations!';
          colon.classList.add('hidden');
          startTimerButton.innerText='COMPLETE!';
          logActivityButton.classList.remove('hidden');
      };
    }, 1000);
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
    createObject();
    displayTimerPage();
    titleSlot.innerText=currentActivity.title;
    minutesSlot.innerText=currentActivity.minutes;
    secondsSlot.innerText=currentActivity.seconds;
    clearInputs();
  }
}

function clearInputs() {
  minInput.value = '';
  secInput.value = '';
  titleInput.value = '';


}

// Validate buttons function: in this function, we also created three new
// variables to increase readability. This function originally started out as
// "if (!studyButton.classList.contains('active'), && ...)" and was a very
// long if block. Attaching those statements to variables allowed for the
// if block to be more condensed and readable. The bang operator is used
// in the if block to say that if none of the buttons contain the
// class of 'active', then display the error message and RETURN (evaluate to)
// FALSE. If ANY of the buttons contain 'active', then it evaluates to true.
var catError = document.querySelector('.cat-error');

function validateButtons() {
  var isStudyActive = studyButton.classList.contains('active');
  var isMeditateActive = meditateButton.classList.contains('active');
  var isExerciseActive = exerciseButton.classList.contains('active');
  if (!isStudyActive && !isMeditateActive && !isExerciseActive) {
    catError.style.visibility = 'visible';
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
var titleError = document.querySelector('.title-error');
var minError = document.querySelector('.min-error');
var secError = document.querySelector('.sec-error');


function validateInputs() {
  var isValid = true;
  if (!titleInput.value) {
    titleError.style.visibility = 'visible';
    isValid = false;
  };
  if (!minInput.value) {
    minError.style.visibility = 'visible';
    isValid = false;
  };
  if (!secInput.value) {
    secError.style.visibility = 'visible';
    isValid = false;
  };
  return isValid;
};

function displayTimerPage() {
  main1.classList.add('hidden');
  main2.classList.remove('hidden');
};
