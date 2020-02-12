var sideBorder = document.querySelector('.card-border');

class Activity {
  constructor(titleInput, minInput, secInput, category) {
    this.title = titleInput;
    this.minutes = minInput;
    this.seconds = secInput;
    this.category = category;
  }
  createCard() {
    noActivitiesNotice.remove();
    var loggedActivity = document.createElement('div');
    loggedActivity.classList.add('activity-card');
    loggedActivity.classList.add('shadow');
    loggedActivity.classList.add('card-text');
    loggedActivity.innerHTML =
    ` <div class="card-border">
        <p class="chosen-category chosen">${this.category}</p>
        <div class="chosen-time">
          <p class="chosen-min">${this.minutes} MIN
          </p>
          <p class="chosen-sec"> ${this.seconds} SECONDS
          </p>
        </div>
      </div>
      <p class="chosen-title chosen">${this.title}</p>`;
    return loggedActivity;
  }
  // colorBorder() {
  //   console.log('hi');
  //     if (event.target.classList.contains('study')) {
  //       sideBorder.style.borderColor = '#B3FD78';
  //     }
  //     if (event.target.classList.contains('meditate')) {
  //       sideBorder.style.borderColor = '#C278FD';
  //     }
  //     if (event.target.classList.contains('exercise')) {
  //       sideBorder.style.borderColor = '#FD8078';
  //     };
  //   };
};
