class Activity {
  constructor(titleInput, minInput, secInput, category) {
    this.title = titleInput;
    this.minutes = minInput;
    this.seconds = secInput;
    this.category = category;
  }
  createCard() {
    noActivitiesNotice.classList.add('hidden');
    var loggedActivity = document.createElement('div');
    loggedActivity.classList.add('activity-card');
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
}
