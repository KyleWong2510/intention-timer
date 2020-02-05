var studyButton = document.querySelector('.study');
var meditateButton = document.querySelector('.meditate');
var exerciseButton = document.querySelector('.exercise');
// var studyActive = document.querySelector('#study-img');
var studyInactive = document.querySelector('#study-inactive');
var studyActive = document.querySelector('#study-active');
var meditateInactive = document.querySelector('#meditate-inactive');
var meditateActive = document.querySelector('#meditate-active');
var exerciseInactive = document.querySelector('#exercise-inactive');
var exerciseActive = document.querySelector('#exercise-active');

studyButton.addEventListener('click', highlightActivityButtons);
meditateButton.addEventListener('click', highlightActivityButtons);
exerciseButton.addEventListener('click', highlightActivityButtons);
studyButton.addEventListener('click', replaceStudyImage);
meditateButton.addEventListener('click', replaceMeditateImage);
exerciseButton.addEventListener('click', replaceExerciseImage);

function highlightActivityButtons() {
  unhighlightButtons();
  if (this.classList.contains('study')) {
    this.classList.add('study-clicked');
    // studyActive.innerHTML = "<img src=\'assets/study-active.svg\'>";
  } else if (this.classList.contains('meditate')) {
    this.classList.add('meditate-clicked');
  } else if (this.classList.contains('exercise')) {
    this.classList.add('exercise-clicked');
  }
}

function unhighlightButtons() {
  studyButton.classList.remove('study-clicked');
  meditateButton.classList.remove('meditate-clicked');
  exerciseButton.classList.remove('exercise-clicked');
}

function replaceStudyImage() {
  meditateActive.classList.add('hidden');
  meditateInactive.classList.remove('hidden');
  exerciseActive.classList.add('hidden');
  exerciseInactive.classList.remove('hidden');
  studyActive.classList.remove('hidden');
  studyInactive.classList.add('hidden');
}

function replaceMeditateImage() {
  studyActive.classList.add('hidden');
  studyInactive.classList.remove('hidden');
  exerciseActive.classList.add('hidden');
  exerciseInactive.classList.remove('hidden');
  meditateActive.classList.remove('hidden');
  meditateInactive.classList.add('hidden');
}

function replaceExerciseImage() {
  studyActive.classList.add('hidden');
  studyInactive.classList.remove('hidden');
  meditateActive.classList.add('hidden');
  meditateInactive.classList.remove('hidden');
  exerciseActive.classList.remove('hidden');
  exerciseInactive.classList.add('hidden');
}
