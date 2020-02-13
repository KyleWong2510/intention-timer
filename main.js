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

// INPUT VARIABLES
var titleInput = document.querySelector("#title-input");
var minInput = document.querySelector('#min-input');
var secInput = document.querySelector('#sec-input');
var inputField1 = document.querySelector('.input-field-1');
var inputField2 = document.querySelector('.input-field-2');
var inputField3 = document.querySelector('.input-field-3');
var categoryField = document.querySelector('.category-field');
var titleError = document.querySelector('.title-error');
var minError = document.querySelector('.min-error');
var secError = document.querySelector('.sec-error');
var catError = document.querySelector('.cat-error');

// PAGE VARIABLES
var main1 = document.querySelector('.main1');
var main2 = document.querySelector('.main2');
var main3 = document.querySelector('.main3');

// TIMER VARIABLES
var startTimer = document.querySelector('.start-timer-button');
var titleSlot = document.getElementById('title-display');
var secondsSlot = document.getElementById('seconds-slot');
var minutesSlot = document.getElementById('minutes-slot');

// CLASS/OBJECT VARIABLES
var activityCard = document.querySelector('.activity-card');
var currentActivity;
var noActivitiesNotice = document.querySelector('.no-activities-notice');

// EVENT LISTENERS
minInput.addEventListener('input', restrictMinInput);
secInput.addEventListener('input', restrictSecInput);
buttonContainer.addEventListener('click', changeButtons);
buttonContainer.addEventListener('click', timerBorder)
startButton.addEventListener('click', validate);
startTimerButton.addEventListener('click', setTimer);
logActivityButton.addEventListener('click', logActivity);
createNewButton.addEventListener('click', returnToMain1);


//PAGE 1 BUTTONS
function changeButtons() {
  removeColors();
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    event.target.firstElementChild.src = `./assets/${event.target.id}.svg`;
  } else {
    event.target.classList.add('active');
    event.target.firstElementChild.src = `./assets/${event.target.id}-active.svg`;
  };
};

function removeColors() {
  for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].classList.remove('active');
    buttonArray[i].firstElementChild.src = `./assets/${buttonArray[i].id}.svg`;
  };
};

//PAGE 1 VALIDATION
function validate() {
  var areButtonsValid = validateButtons();
  var areInputsValid = validateInputs();
  if (areButtonsValid && areInputsValid) {
    createObject();
    displayTimerPage();
    titleSlot.innerText = currentActivity.title;
    minutesSlot.innerText = currentActivity.minutes;
    if (currentActivity.seconds < 10) {
      secondsSlot.innerText = `0${currentActivity.seconds}`
    } else {
      secondsSlot.innerText = currentActivity.seconds;
    };
    clearInputs();
  };
};

function validateButtons() {
  var isStudyActive = studyButton.classList.contains('active');
  var isMeditateActive = meditateButton.classList.contains('active');
  var isExerciseActive = exerciseButton.classList.contains('active');
  if (!isStudyActive && !isMeditateActive && !isExerciseActive) {
    catError.style.visibility = 'visible';
    return false;
  };
  return true;
};

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

function clearInputs() {
  minInput.value = '';
  secInput.value = '';
  titleInput.value = '';
};

//CREATING A NEW OBJECT
function createObject() {
  currentActivity =
    new Activity(titleInput.value,
      minInput.value,
      secInput.value,
      whichButton()
    );
};

function whichButton() {
  if (studyButton.classList.contains('active')) {
    return 'Study';
  } else if (meditateButton.classList.contains('active')) {
    return 'Meditate';
  } else if (exerciseButton.classList.contains('active')) {
    return 'Exercise';
  };
};

function logActivity() {
  main2.classList.add('hidden');
  main3.classList.remove('hidden');
  var newCard = currentActivity.createCard();
  document.querySelector('.card-wrapper').appendChild(newCard);
  currentActivity = undefined;
};

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
  var totalSeconds = (minutes * 60) + seconds;
  var remainingSeconds = totalSeconds % 60;
  var remainingMinutes = Math.floor(totalSeconds / 60);
  var colon = document.querySelector('.colon')
  var timer = setInterval(function() {
    remainingSeconds = ("0" + remainingSeconds).slice(-2);
    minutesSlot.innerText = remainingMinutes;
    secondsSlot.innerText = remainingSeconds;
    totalSeconds--;
    startTimerButton.disabled = true;
    remainingMinutes = Math.floor(totalSeconds / 60);
    remainingSeconds = totalSeconds % 60;
    if (totalSeconds < 0) {
      clearInterval(timer);
      minutesSlot.innerText = '';
      secondsSlot.innerText = 'Congratulations!';
      colon.classList.add('hidden');
      startTimerButton.innerText = 'COMPLETE!';
      logActivityButton.classList.remove('hidden');
    };
  }, 1000);
};

function timerBorder() {
  if (event.target.classList.contains('study')) {
    startTimer.style.borderColor = '#B3FD78';
    return 'study'
  };
  if (event.target.classList.contains('meditate')) {
    startTimer.style.borderColor = '#C278FD';
    return 'meditate'
  };
  if (event.target.classList.contains('exercise')) {
    startTimer.style.borderColor = '#FD8078';
    return 'exercise'
  };
};

function returnToMain1() {
  var colon = document.querySelector('.colon');
  main3.classList.add('hidden');
  removeColors();
  main1.classList.remove('hidden');
  colon.classList.remove('hidden');
  startTimerButton.disabled = false;
  startTimerButton.innerText = 'START';
  logActivityButton.classList.add('hidden');
};
